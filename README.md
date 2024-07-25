# AI-Powered Air Conditioning Optimization "CoolAI"

## Solution Overview

Our proposed solution, "CoolAI," is an intelligent air conditioning optimization system that leverages AWS services and AI to significantly reduce energy consumption and carbon emissions associated with air conditioning in buildings.

### Key Components:

1. Data Collection:
   - AWS IoT Core for collecting real-time data from smart thermostats and occupancy sensors
   - Amazon Kinesis for real-time data streaming

2. Data Processing and Storage:
   - AWS Lambda for serverless data processing
   - Amazon S3 for data storage
   - Amazon DynamoDB for real-time database operations

3. AI/ML Pipeline:
   - Amazon SageMaker for developing and training machine learning models
   - Amazon Forecast for time-series forecasting of cooling demands

4. Optimization Engine:
   - AWS Step Functions for orchestrating the optimization workflow
   - Amazon EC2 for running complex optimization algorithms

5. User Interface:
   - Amazon API Gateway for creating RESTful APIs
   - AWS Amplify for developing and hosting the web application

6. Monitoring and Analytics:
   - Amazon CloudWatch for system monitoring and alerting
   - Amazon QuickSight for data visualization and analytics

## Implementation

1. Data Collection:
   - Deploy smart thermostats and occupancy sensors in buildings (simulated for the prototype)
   - Use AWS IoT Core to ingest real-time temperature, humidity, and occupancy data
   - Stream data using Amazon Kinesis for real-time processing

2. Data Processing:
   - Implement AWS Lambda functions to process and clean the incoming data
   - Store processed data in Amazon S3 for long-term storage and analysis
   - Use Amazon DynamoDB for storing real-time state information

3. AI/ML Model Development:
   - Utilize Amazon SageMaker to develop and train models for:
     a. Occupancy prediction
     b. Temperature forecasting
     c. Energy consumption optimization
   - Implement Amazon Forecast to predict cooling demands based on historical data and external factors (e.g., weather forecasts)

4. Optimization Engine:
   - Develop an optimization algorithm that considers:
     a. Predicted occupancy
     b. Forecasted temperatures
     c. Energy prices
     d. User comfort preferences
   - Use AWS Step Functions to orchestrate the optimization workflow
   - Deploy the optimization engine on Amazon EC2 for scalable computing power

5. Control System:
   - Implement AWS Lambda functions to send optimized control signals back to the air conditioning systems
   - Use AWS IoT Core to securely communicate with the AC units

6. User Interface:
   - Develop a web application using AWS Amplify
   - Implement RESTful APIs using Amazon API Gateway for user interactions and system control

7. Monitoring and Analytics:
   - Set up Amazon CloudWatch for system monitoring and alerting
   - Implement Amazon QuickSight dashboards for real-time energy savings visualization and analytics

## Innovation

CoolAI stands out for its holistic approach to AC optimization:
- Predictive occupancy modeling for proactive temperature adjustments
- Integration of external data sources (weather, energy prices) for context-aware optimization
- Continuous learning and adaptation to user preferences and changing conditions

## Environmental Impact

Potential for significant energy savings and carbon footprint reduction:
- Estimated 20-30% reduction in AC-related energy consumption
- Corresponding decrease in carbon emissions from power generation
- Improved overall building energy efficiency

## Feasibility

The solution is highly feasible due to:
- Utilization of existing AWS services and infrastructure
- Serverless architecture for easy deployment and scaling
- No hardware requirements for the prototype (can be simulated using AWS IoT Device Simulator)

## Scalability

CoolAI is designed for scalability:
- Cloud-native architecture allows for easy expansion to multiple buildings or regions
- Serverless components automatically scale with demand
- Modular design enables integration with various AC systems and smart building platforms

## Presentation

Our pitch will include:
- Live demo of the web interface showing real-time optimization
- Visualization of potential energy savings and environmental impact
- Clear explanation of the AI/ML models and their benefits

# Backend Deployment Guide

## Prerequisites

Before you begin, ensure you have the following:

1. Node.js (v20.x or later) and npm installed
2. AWS CLI installed and configured with your AWS credentials
3. Serverless Framework v3 installed globally:
   ```
   npm install -g serverless@3
   ```
4. Git (for version control)

## Project Structure

Ensure your project structure looks like this:

```
coolai-prototype/
├── src/
│   ├── mockDataGenerator.js
│   ├── dataProcessor.js
│   └── acOptimizer.js
├── index.js
├── serverless.yml
├── package.json
└── deployment.md (this file)
```

## Deployment Steps

1. Clone the repository:
   ```
   git clone https://github.com/iubayb/CoolAI.git
   cd CoolAI
   ```

2. Install project dependencies:
   ```
   npm install
   ```

3. Deploy the application:
   ```
   serverless deploy
   ```
   
   To deploy to a specific stage or region:
   ```
   serverless deploy --stage production --region us-west-2
   ```

4. After successful deployment, note the endpoints and other outputs provided in the terminal. You'll need these to configure your frontend application.

## Configuration Details

The `serverless.yml` file defines the following:

- Service name: coolai-prototype
- Framework version: 3
- Provider: AWS with Node.js 20.x runtime
- Three Lambda functions:
  - `generateMockData`: Runs every 5 minutes
  - `processData`: Triggered by DynamoDB stream
  - `optimizeAC`: Exposed as an HTTP POST endpoint
- DynamoDB table: `${self:service}-${self:provider.stage}-sensorData`
- IAM role with permissions for DynamoDB operations

## Environment Variables

Each function has access to the following environment variable:
- `SENSOR_DATA_TABLE`: The name of the DynamoDB table

## Plugins

This project uses the `serverless-esbuild` plugin for bundling:
- Bundle is enabled
- Minification is disabled
- Sourcemaps are generated
- AWS SDK is excluded from the bundle
- Targeting Node.js 20

## Updating the Deployment

To update your deployment after making changes:

1. Make your code changes
2. Run `serverless deploy` again

## Removing the Deployment

To remove all deployed resources:

```
serverless remove
```

**Caution**: This will delete all resources created by this Serverless application in AWS.

## Viewing Logs

To view logs for a specific function:

```
serverless logs -f functionName
```

Replace `functionName` with `generateMockData`, `processData`, or `optimizeAC`.

## Troubleshooting

1. If deployment fails, check the CloudFormation console in the AWS Management Console for detailed error messages.
2. Ensure your AWS CLI is configured with the correct credentials and has the necessary permissions.
3. Verify that your `serverless.yml` file is correctly formatted.
4. If you're having issues with the `serverless-esbuild` plugin, try clearing the `.esbuild` cache directory.

## Best Practices

1. Use different stages (e.g., dev, staging, prod) for different environments.
2. Regularly review and update the IAM permissions to ensure least privilege access.
3. Set up CloudWatch alarms for monitoring your Lambda functions and DynamoDB table.
4. Implement proper error handling and logging in your Lambda functions for easier debugging.

## Additional Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
