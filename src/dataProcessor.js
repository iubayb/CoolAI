export const handler = async (event) => {
  console.log('Processing sensor data:', JSON.stringify(event, null, 2));
  
  // In a real-world scenario, we would process the data here
  // For now, we'll just log it
  
  return { statusCode: 200, body: JSON.stringify({ message: 'Data processed successfully' }) };
};
