import React from 'react';
import styled from '@emotion/styled';

const Promotion = ({ data }) => {
  const Divcont = styled.div`
    width: 94%;
    margin: 15px auto;
    background: #f2f2f2;
    img {
      width: 100%;
      margin: auto auto;
      text-align: center;
      padding: 0;
    }
    h2 {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 300;
      color: #48535f;
    }
    p {
      font-size: 0.9rem;
      color: #888d93;
      padding: 5px;
    }
    button {
      border: 1px solid #8190a5;
      border-radius: 5px;
      padding: 7px 10px;
      width: 120px;
      color: #8190a5;
      background: #f2f2f2;
    }
    button.btn-join {
      background: #8190a5;
      color: white;
    }
    .container-buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 10px;
    }
  `;
  return (
    <Divcont>
      <img src={data.heroImageUrl} alt='' />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <div className='container-buttons'>
        <button>{data.termsAndConditionsButtonText}</button>
        <button className='btn-join'>{data.joinNowButtonText}</button>
      </div>
    </Divcont>
  );
};

export default Promotion;
