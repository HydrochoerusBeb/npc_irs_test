import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Dashboard = ({ citizens }) => {
  const educationData = [
    { name: 'High School', value: citizens.filter(c => c.education === 'High School').length },
    { name: 'Bachelor', value: citizens.filter(c => c.education === 'Bachelor').length },
    { name: 'Master', value: citizens.filter(c => c.education === 'Master').length },
    { name: 'PhD', value: citizens.filter(c => c.education === 'PhD').length },
  ];

  const ageDistribution = citizens.reduce((acc, curr) => {
    const dateOfBirth = new Date(curr.dateOfBirth);
    if (isNaN(dateOfBirth.getTime())) {
      console.error(`Некорректная дата рождения: ${curr.dateOfBirth}`);
      return acc;
    }
    const age = new Date().getFullYear() - dateOfBirth.getFullYear();
    const ageGroup = `${Math.floor(age / 10) * 10}-${Math.floor(age / 10) * 10 + 9}`;
    acc[ageGroup] = (acc[ageGroup] || 0) + 1;
    return acc;
  }, {});

  const ageData = Object.entries(ageDistribution)
  .map(([key, value]) => ({ ageGroup: key, count: value }))
  .sort((a, b) => b.count - a.count);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ width: '45%', height: 300 }}>
          <h2>Education Levels</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={educationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {educationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: '45%', height: 300 }}>
          <h2>Age Distribution</h2>
          <ResponsiveContainer>
            <BarChart data={ageData}>
              <XAxis dataKey="ageGroup" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
