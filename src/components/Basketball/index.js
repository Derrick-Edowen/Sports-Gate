import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import baskImage from "../../assets/images/bask-modified.jpg"


const Basketball = () => {

  function getYesterdayYYYYMMDD() {
    const now = new Date();
    now.setDate(now.getDate() - 1);
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
  
    return `${year}${month}${day}`;
  }
    
    const yesterdayYYYYMMDD = getYesterdayYYYYMMDD();
  

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://livescore6.p.rapidapi.com/matches/v2/list-by-date', {
          params: {
            Category: 'basketball',
            Date: yesterdayYYYYMMDD,
            Timezone: '-7'
          },
          headers: {
            'X-RapidAPI-Key': 'f2d3bb909amsh6900a426a40eabep10efc1jsn24e7f3d354d7',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
          },
        });

        const data = response.data;
        console.log('API Data - Basketball:', data);
        setApiData(data); 

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bask-image">
    <div className='basketball-page'>
      <h1>Basketball</h1>
      {apiData ? (
        <div>
        <h2>{apiData.Stages[0].Cnm}</h2>
        <h3>{apiData.Stages[0].Snm}</h3>
        <div class="row">
        <div class="col-sm-6">
          <h3> {apiData.Stages[0].Events[0].T1[0].Nm} </h3>
          <h4>Scoreboard</h4>
          <h3> First Quarter: {apiData.Stages[0].Events[0].Tr1Q1} </h3>
          <h3> Second Quarter:{apiData.Stages[0].Events[0].Tr1Q2} </h3>
          <h3> Third Quarter:{apiData.Stages[0].Events[0].Tr1Q3} </h3>
          <h3> Forth Quarter:{apiData.Stages[0].Events[0].Tr1Q4} </h3>
          <h3> Final Score:{apiData.Stages[0].Events[0].Tr1} </h3>
          </div>
          <div class="col-sm-6">
          <h3> {apiData.Stages[0].Events[0].T2[0].Nm} </h3>
          <h4>Scoreboard</h4>
          <h3> First Quarter:{apiData.Stages[0].Events[0].Tr2Q1} </h3>
          <h3> Second Quarter:{apiData.Stages[0].Events[0].Tr2Q2} </h3>
          <h3> Third Quarter:{apiData.Stages[0].Events[0].Tr2Q3} </h3>
          <h3> Forth Quarter:{apiData.Stages[0].Events[0].Tr2Q4} </h3>
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

export default Basketball;
