import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import backImage from "../../assets/images/sports-modified.webp"

const Home = () => {
  function getYesterdayExtendedFormat() {
    const now = new Date();
    now.setDate(now.getDate() - 1);
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const yesterdayExtendedFormat = now.toLocaleDateString('en-US', options);
  
    return yesterdayExtendedFormat;
  }
  const yesterdayExtendedFormat = getYesterdayExtendedFormat();
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e','','','t','o','','','S','p','o','r','t','s','','G','a','t','e','!']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <><div className="background-image">
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={10}
            />
          </h1>
          <div class="row">
        <p></p>
        
        </div>
        <div class="row">
        <p></p>
        
        </div>
          <div class="row">
        <p class="col-sm-12 fade-in">Sport Scores for {yesterdayExtendedFormat}!</p>
        </div>
          
        </div>
      </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
