import api from './api';

export const uploadImage = async (image: any) => {
  const formData = new FormData();

  formData.append('image', {
    uri: image.uri,
    type: image.type,
    name: image.fileName || 'photo.jpg',
  } as any);

  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};