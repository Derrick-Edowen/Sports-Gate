import React, { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




const Basketball = () => {

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
            Category: 'basketball',
            Date: currentDateYYYYMMDD
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
    <div className='basketball-page'>
      <h1>Basketball API Data</h1>
      {apiData ? (
        <div>
        <h2>{apiData.Stages[0].Cnm}</h2>
        <h3>{apiData.Stages[0].Snm}</h3>
        <h3>{apiData.Stages[0].Events[0].T1[0].Nm}</h3>
        <h3>vs</h3>
        <h3>{apiData.Stages[0].Events[0].T2[0].Nm}</h3>
        <div class="row">
        <h2 class="col-sm-6">{apiData.Stages[0].Events[0].T1[0].Nm}</h2>
        <h2 class="col-sm-6">{apiData.Stages[0].Events[0].T2[0].Nm}</h2>
        </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Basketball;
