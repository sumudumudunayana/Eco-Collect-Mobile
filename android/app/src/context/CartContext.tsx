import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type CartItem = {
  _id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  addToCart: (product: any) => Promise<void>;
  updateQuantity: (productId: string, change: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

const CART_STORAGE_KEY = 'ecocollect_cart';

const normalizeProduct = (product: any): CartItem => ({
  _id: product?._id || product?.id || String(Date.now()),
  title: product?.title || 'Eco Product',
  category: product?.category || 'General',
  price: Number(product?.price || 0),
  image: product?.image || '',
  quantity: 1,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.log('Cart load error:', error);
    } finally {
      setLoading(false);
    }
  };

  const persistCart = async (nextCart: CartItem[]) => {
    setCart(nextCart);
    await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
  };

  const addToCart = async (product: any) => {
    const normalizedProduct = normalizeProduct(product);

    const existingItem = cart.find(item => item._id === normalizedProduct._id);

    const nextCart = existingItem
      ? cart.map(item =>
          item._id === normalizedProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...cart, normalizedProduct];

    await persistCart(nextCart);
  };

  const updateQuantity = async (productId: string, change: number) => {
    const nextCart = cart
      .map(item => {
        if (item._id !== productId) {
          return item;
        }

        const nextQuantity = item.quantity + change;

        return nextQuantity <= 0 ? null : { ...item, quantity: nextQuantity };
      })
      .filter(Boolean) as CartItem[];

    await persistCart(nextCart);
  };

  const removeFromCart = async (productId: string) => {
    const nextCart = cart.filter(item => item._id !== productId);
    await persistCart(nextCart);
  };

  const clearCart = async () => {
    await persistCart([]);
  };

  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const deliveryFee = subtotal > 0 ? 500 : 0;
  const total = subtotal + deliveryFee;

  if (loading) {
    return null;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        itemCount,
        subtotal,
        deliveryFee,
        total,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
