import api from './api';

export const login = async (
  email: string,
  password: string,
) => {
  const response = await api.post('/auth/login', {
    email,
    password,
  });

  return response.data;
};

export const register = async (
  fullName: string,
  email: string,
  phone: string,
  password: string,
  address: string,
) => {
  const response = await api.post('/auth/register', {
    fullName,
    email,
    phone,
    password,
    address,
  });

  return response.data;
};