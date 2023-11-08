import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import workdayScheduler from "../../assets/images/workday.PNG";
import passwordGenImage from "../../assets/images/passgen.PNG";
import textEditorImage from "../../assets/images/App screen.PNG";
import noteTakerImage from "../../assets/images/notetaker.PNG";
import codeQuiz from "../../assets/images/codequiz.PNG";
import techImage from "../../assets/images/techblog.PNG";
import bookImage from "../../assets/images/book.PNG";
import weatherImage from "../../assets/images/weather.PNG";
import juiceImage from "../../assets/images/juice.PNG";
import colourFlipper from "../../assets/images/colour.PNG"


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    //const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    /*useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }
*/
    const renderPortfolio = () => {
        return (
            <div className="images-container">
                {
                   <div className="job">
                      <div className="job-info">
                      <div className="job-text">
                        <h2 style={{fontSize:28, color:'#ffd700', fontFamily: 'Coolvetica'}} >Click on the Application icons to view the deployed project!</h2>
                     </div>
                     <div className="job-img">
                       <a href="https://derrick-edowen.github.io/Colour-Flipper/">
                         {" "}
                         <img
                           src={colourFlipper}
                           className="my-2"
                           style={{ width: "100%" }}
                           alt="Colour-flipper"
                         />
                       </a>
                     </div>
                     <div className="job-text">
                     </div>
                     </div><div className="job">
                     <div className="job-img">
                       <a href="https://ttech.herokuapp.com/">
                         {" "}
                         <img
                           src={techImage}
                           className="my-2"
                           style={{ width: "100%" }}
                           alt="Tech-blog"
                         />
                       </a>
                     </div>
                     <div className="job-text">
                     </div>
                     </div><div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/project-1-juice-calendar/">
                {" "}
                <img
                  src={juiceImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="juice"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div>
                     <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Code-Quiz/">
                {" "}
                <img
                  src={codeQuiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Code Quiz"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div><div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://quiet-shore-46614.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note Taker"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div><div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Password-Generator/">
                {" "}
                <img
                  src={passwordGenImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="PassGen"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div><div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://arcane-bastion-17633.herokuapp.com/">
                {" "}
                <img
                  src={textEditorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text Editor"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div>  <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Derrick-Edowen/Google-Book-Search/tree/main">
                {" "}
                <img
                  src={bookImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Book Search"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
            </div>
            </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Work-Day-Scheduler/">
                {" "}
                <img
                  src={workdayScheduler}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="workdaySch"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div><div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://derrick-edowen.github.io/Weather-Dashboard/">
                {" "}
                <img
                  src={weatherImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="weather"
                />
              </a>
            </div>
            <div className="job-text">
            </div>
          </div>
        </div>
                    </div>
                    
                 
                }
            </div>
            
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;