const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const fetchOptimizationData = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching optimization data:', error);
    throw error;
  }
};
