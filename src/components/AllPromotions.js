import React from 'react';
import Promotion from './Promotion';

function AllPromotions({ data }) {
  return (
    <>
      {data.map(data => (
        <Promotion key={data.id} data={data} />
      ))}
    </>
  );
}

export default AllPromotions;
