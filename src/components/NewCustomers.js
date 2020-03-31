import React from 'react';
import Promotion from './Promotion';

function NewCustomers({ data }) {
  return (
    <>
      {data
        .filter(x => x.onlyNewCustomers === true)
        .map(data => (
          <Promotion key={data.id} data={data} />
        ))}
    </>
  );
}

export default NewCustomers;
