import api from './api';

export const getProfile = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

export const updateProfile = async (profile: any) => {
  const response = await api.put('/auth/profile', profile);
  return response.data;
};