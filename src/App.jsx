import React from 'react';
import FuelProvider from './Providers/FuelProvider';
import Fetchdata from './Providers/Fetchdata';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Header from './components/Header';
import Footer from './components/Footer';
import IndiaMap from './Maps/Maps';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <FuelProvider>
        <Fetchdata />

        <main className="flex-1 w-full max-w-4xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Fuel Prices</h1>
          <LineChart />
          <BarChart />
        </main>
        <div className="flex justify-center items-center mb-4">
          <IndiaMap />
        </div>
      </FuelProvider>

      <Footer />
    </div>
  );
};

export default App;