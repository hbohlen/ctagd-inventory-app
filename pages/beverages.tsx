import React from 'react';
import { Beverage as BeverageType } from '@/types';
import { Beverage } from '@/components/Beverage';
import Layout from '@/app/layout';

const mockBeverage: BeverageType = {
  id: 1,
  name: 'Orange Juice',
  quantity: 25
};

const BeveragesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Beverages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Beverage beverage={mockBeverage} />
        </div>
      </div>
    </Layout>
  );
};

export default BeveragesPage;
