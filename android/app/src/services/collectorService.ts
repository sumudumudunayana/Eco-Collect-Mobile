import api from './api';

/* ============================
   GET ALL ASSIGNED COLLECTIONS
============================ */

export const getAssignedCollections = async () => {
  const response = await api.get('/collections/collector');
  return response.data;
};

/* ============================
   GET SINGLE COLLECTION
============================ */

export const getCollectionById = async (id: string) => {
  const response = await api.get(`/collections/${id}`);
  return response.data;
};

/* ============================
   UPDATE COLLECTION STATUS
============================ */

export const updateCollectionStatus = async (
  id: string,
  status: string,
) => {
  const response = await api.put(
    `/collections/${id}/status`,
    {
      status,
    },
  );

  return response.data;
};

/* ============================
   GET COLLECTOR'S ACTIVE ROUTE
============================ */

export const getCollectorRoute = async () => {
  const response = await api.get('/routes/collector');
  return response.data;
};