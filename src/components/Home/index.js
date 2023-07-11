import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import './index.scss'
import pfp from "../../assets/images/pfp.JPG"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [" ", "A", "a", "r", "o", "n"]
  const jobArray = ["W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."]
  const hi = ["H", "i", ","]
  const Im = ["I", "'", "m"]
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)

  useEffect(() => {
    // Logic to determine animation completion
    const timeout = setTimeout(() => {
      setIsAnimationFinished(true)
    }, 2000); // Modify this value based on your animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='container home-page'>
      <div className={`text-zone ${isAnimationFinished ? 'spread-text' : ''}`}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={hi}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={Im}
            idx={15}
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>

        <br />
        <h2>Data Scientist, Machine Learning Enthusiast </h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <div className='info-bg'>
        <img src={pfp} width="100%" className="profile-image" />
      </div>
    </div>
  )
}

export default Home;
