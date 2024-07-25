# CoolAI Dashboard

## Overview

CoolAI Dashboard is a React-based user interface for visualizing and interacting with the CoolAI air conditioning optimization system. This dashboard provides real-time insights into temperature data, optimization results, and system performance.

## Features

- Real-time temperature optimization visualization
- Latest sensor data display
- Responsive design for various screen sizes
- Automatic data refresh and manual refresh option

## Technologies Used

- React 18
- Recharts for data visualization
- shadcn/ui components for UI elements
- AWS Amplify for deployment

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- An AWS account with Amplify CLI configured

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/coolai-ui.git
   cd coolai-ui
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your API endpoint:
   ```
   REACT_APP_API_ENDPOINT=https://your-api-gateway-url.com
   ```

## Usage

To run the application locally:

```
npm start
```

This will start the development server, and you can view the application by navigating to `http://localhost:3000` in your web browser.

## Deployment

This project is set up for deployment using AWS Amplify. To deploy:

1. Ensure you have the AWS Amplify CLI installed and configured.

2. Initialize Amplify in your project (if not already done):
   ```
   amplify init
   ```

3. Add hosting:
   ```
   amplify add hosting
   ```

4. Publish the app:
   ```
   amplify publish
   ```

Alternatively, you can use the provided CloudFormation template to set up the Amplify app:

1. Go to the AWS CloudFormation console.
2. Create a new stack using the `amplify-cloudformation-template.yml` file.
3. Fill in the required parameters (Repository URL, Branch, GitHub OAuth Token, API Endpoint).
4. Create the stack and wait for it to complete.

## Project Structure

```
coolai-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── TemperatureChart.js
│   │   └── LatestData.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── amplify.yml
├── package.json
└── amplify-cloudformation-template.yml
```

## Contributing

Contributions to the CoolAI Dashboard are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please contact the project maintainers:

- Your Name - your.email@example.com
- Project Link: https://github.com/your-username/coolai-ui

## Acknowledgements

- [React](https://reactjs.org/)
- [Recharts](https://recharts.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
