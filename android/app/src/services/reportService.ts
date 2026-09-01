import api from './api';

export const createReport = async (report: any) => {
  const response = await api.post('/reports', report);
  return response.data;
};

export const getMyReports = async () => {
  const response = await api.get('/reports/my');
  return response.data;
};