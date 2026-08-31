import api from './api';

/* ============================
   CITIZEN
============================ */

// Get citizen collection schedule
export const getCitizenSchedule = async () => {
  try {
    const response = await api.get('/collections/my-schedule');
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Primary endpoint failed:', error);
    try {
      const fallbackResponse = await api.get('/collections/schedule');
      console.log('Fallback API Response:', fallbackResponse.data);
      return fallbackResponse.data;
    } catch (fallbackError) {
      console.error('Both endpoints failed:', fallbackError);
      throw fallbackError;
    }
  }
};

/* ============================
   COLLECTOR
============================ */

// Get assigned collections
export const getAssignedCollections = async () => {
  const response = await api.get('/collections/collector');
  return response.data;
};

// Get single collection
export const getCollectionById = async (id: string) => {
  const response = await api.get(`/collections/${id}`);
  return response.data;
};

// Update collection status
export const updateCollectionStatus = async (
  id: string,
  status: string,
  reason?: string,
) => {
  const response = await api.put(`/collections/${id}/status`, {
    status,
    reason,
  });

  return response.data;
};


export const getCollectorCollections = async () => {
  const response = await api.get('/collections/collector');
  return response.data;
};