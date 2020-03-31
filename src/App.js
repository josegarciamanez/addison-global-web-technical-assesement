import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import AllPromotions from './components/AllPromotions';
import NewCustomers from './components/NewCustomers';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const reverseData = data.sort((a, b) => a.sequence - b.sequence);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.mocky.io/v2/5bc3b9cc30000012007586b7'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const NavLinks = styled.nav`
    display: flex;
    align-content: center;
    justify-content: space-around;
    width: 90%;
    height: 30px;
    padding: 5%;
    a {
      border: 1px solid #8190a5;
      border-radius: 5px;
      color: #8190a5;
      text-align: center;
      text-decoration: none;
      padding: 3px;
      width: 50%;
    }
    a:first-of-type {
      border-radius: 5px 0 0 5px;
    }
    a:last-child {
      border-radius: 0 5px 5px 0;
    }
  `;
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
            background: 'white',
            color: 'black'
          }
        }}
      />
      <Router>
        <div>
          <NavLinks>
            <NavLink
              activeStyle={{
                background: '#8190a5',
                color: 'white'
              }}
              to='/all-promotions'>
              All Promotions
            </NavLink>
            <NavLink
              activeStyle={{
                background: '#8190a5',
                color: 'white'
              }}
              to='/new-customers'>
              New Customers
            </NavLink>
          </NavLinks>
          <Switch>
            <Route path='/new-customers'>
              <NewCustomers data={reverseData} />
            </Route>
            <Route path='/all-promotions'>
              <AllPromotions data={reverseData} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
