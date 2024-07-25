import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const sensorIds = ['sensor1', 'sensor2', 'sensor3'];
  const currentTime = Date.now();
  const fiveMinutesAgo = currentTime - 5 * 60 * 1000;

  const queryPromises = sensorIds.map(sensorId => 
    docClient.send(new QueryCommand({
      TableName: process.env.SENSOR_DATA_TABLE,
      KeyConditionExpression: 'sensorId = :sensorId AND #ts > :timestamp',
      ExpressionAttributeNames: { '#ts': 'timestamp' },
      ExpressionAttributeValues: {
        ':sensorId': sensorId,
        ':timestamp': fiveMinutesAgo
      },
      Limit: 1,
      ScanIndexForward: false
    }))
  );

  const results = await Promise.all(queryPromises);
  const latestData = results.map(result => result.Items[0]);

  // Simple optimization logic (in reality, this would be much more complex)
  const averageTemp = latestData.reduce((sum, data) => sum + parseFloat(data.temperature), 0) / latestData.length;
  const averageHumidity = latestData.reduce((sum, data) => sum + parseFloat(data.humidity), 0) / latestData.length;
  const isOccupied = latestData.some(data => data.occupancy === 1);

  let optimizedTemp;
  if (isOccupied) {
    optimizedTemp = averageTemp > 25 ? 24 : 26;
  } else {
    optimizedTemp = 28; // Energy-saving mode when unoccupied
  }

  const optimizationResult = {
    averageTemp,
    averageHumidity,
    isOccupied,
    optimizedTemp,
    timestamp: currentTime
  };

  console.log('Optimization result:', optimizationResult);

  return {
    statusCode: 200,
    body: JSON.stringify(optimizationResult)
  };
};
