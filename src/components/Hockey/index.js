import './index.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Hockey = () => {

    function getCurrentDateYYYYMMDD() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
    
      return `${year}${month}${day}`;
    }
    
    const currentDateYYYYMMDD = getCurrentDateYYYYMMDD();
    
  
    const [apiData, setApiData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://livescore6.p.rapidapi.com/matches/v2/list-by-date', {
            params: {
              Category: 'hockey',
              Date: 20231108,
              Timezone: '-7'
            },
            headers: {
              'X-RapidAPI-Key': 'f2d3bb909amsh6900a426a40eabep10efc1jsn24e7f3d354d7',
              'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
            },
          });
  
          const data = response.data;
          console.log('API Data - Hockey:', data);
          setApiData(data); 
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="hock-image">
      <div className='basketball-page'>
        <h1>Hockey</h1>
        {apiData ? (
          <div>
          <h2>{apiData.Stages[0].Cnm}</h2>
          <h3>{apiData.Stages[0].Snm}</h3>
          <div class="row">
          <div class="col-sm-6">
          <h3> {apiData.Stages[0].Events[0].T1[0].Nm} </h3>
          <h4>Scoreboard</h4>
          <h3> First Quarter: {apiData.Stages[0].Events[0].Tr1Pe1} </h3>
          <h3> Second Quarter:{apiData.Stages[0].Events[0].Tr1Pe2} </h3>
          <h3> Third Quarter:{apiData.Stages[0].Events[0].Tr1Pe3} </h3>
          <h3> Final Score:{apiData.Stages[0].Events[0].Tr1} </h3>
          </div>
          <div class="col-sm-6">
          <h3> {apiData.Stages[0].Events[0].T2[0].Nm} </h3>
          <h4>Scoreboard</h4>
          <h3> First Quarter:{apiData.Stages[0].Events[0].Tr2Pe1} </h3>
          <h3> Second Quarter:{apiData.Stages[0].Events[0].Tr2Pe2} </h3>
          <h3> Third Quarter:{apiData.Stages[0].Events[0].Tr2Pe3} </h3>
          <h3> Final Score:{apiData.Stages[0].Events[0].Tr2} </h3>
          </div>
          <div class="col-sm-12">
          {apiData.Stages[0].Events[0].Tr1 > apiData.Stages[0].Events[0].Tr2 ? (
                <h3>{apiData.Stages[0].Events[0].T1[0].Nm} Won!</h3>
              ) : apiData.Stages[0].Events[0].Tr1 === apiData.Stages[0].Events[0].Tr2 ? (
                <h3>It's a Draw!</h3>
              ) : (
                <h3>{apiData.Stages[0].Events[0].T2[0].Nm} Won!</h3>
              )}
              
          </div>
          </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      </div>
    );
  }

export default Hockey;