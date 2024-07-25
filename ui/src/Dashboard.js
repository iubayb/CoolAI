import React, { useState, useEffect } from 'react';
import { fetchOptimizationData } from '../services/api';
import TemperatureChart from './TemperatureChart';
import LatestData from './LatestData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchOptimizationData();
      setData(prevData => [...prevData, result].slice(-10)); // Keep last 10 data points
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // Fetch every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CoolAI Dashboard</h1>
      <Button onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching...' : 'Refresh Data'}
      </Button>
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card>
          <CardHeader>Temperature Optimization</CardHeader>
          <CardContent>
            <TemperatureChart data={data} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Latest Data</CardHeader>
          <CardContent>
            {data.length > 0 ? (
              <LatestData data={data[data.length - 1]} />
            ) : (
              <p>No data available</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
