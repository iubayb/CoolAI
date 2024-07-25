export { handler as generateMockData } from './src/mockDataGenerator.js';
export { handler as processData } from './src/dataProcessor.js';
export { handler as optimizeAC } from './src/acOptimizer.js';

export const sharedConfig = {
  VERSION: '1.0.0',
  // ... other shared configurations
};

// add any initialization code here if needed
console.log('CoolAI Prototype initialized');
