import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import backImage from "../../assets/images/sports-modified.webp"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['','W', 'e', 'l', 'c', 'o', 'm', 'e','','t','o','','S','p','o','r','t','s','','G','a','t','e','!']

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
              idx={12}
            />
          </h1>
        </div>
      </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
