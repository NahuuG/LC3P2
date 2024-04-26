import React from 'react';
import Table from './Table';

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const averageIncome = netIncomes.reduce((total, item) => total + item.income, 0) / netIncomes.length;

  return (
    <div>
      <h1>Tabla de Ingresos Netos por Compañía</h1>
      <Table netIncomes={netIncomes} />
      <p>Promedio de Ingreso Neto: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;
