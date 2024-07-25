import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const generateRandomData = () => ({
  temperature: (Math.random() * 10 + 20).toFixed(1), // 20-30°C
  humidity: (Math.random() * 30 + 40).toFixed(1), // 40-70%
  occupancy: Math.random() > 0.5 ? 1 : 0, // 0 or 1
});

export const handler = async (event) => {
  const sensorIds = ['sensor1', 'sensor2', 'sensor3'];
  const timestamp = Date.now();

  const putPromises = sensorIds.map(sensorId => {
    const data = generateRandomData();
    return docClient.send(new PutCommand({
      TableName: process.env.SENSOR_DATA_TABLE,
      Item: {
        sensorId,
        timestamp,
        ...data
      }
    }));
  });

  await Promise.all(putPromises);

  return { statusCode: 200, body: JSON.stringify({ message: 'Mock data generated successfully' }) };
};
