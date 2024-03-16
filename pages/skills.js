import styles from '../styles/skills.module.css'
import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Aboutme() {

    const [index, setIndex] = React.useState(0);
    const isFirstRender = React.useRef(true);
    const [showList, setShowList] = React.useState(false);
    const [showList2, setShowList2] = React.useState(false);

    const toggleList = () => {
          setShowList(!showList);
        };
    const toggleList2 = () => {
      setShowList2(!showList2);
    };

    React.useEffect(() => {  /* 這是讓照片的幻燈片第一次不要１跳３*/ 

      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

    

      const timeoutId = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1 //檢查當前索引是否等於數組的長度減一，這樣它就知道是否要移動到下一個索引或從頭開始。
          ),
        delay
      );
  
      return () => clearTimeout(timeoutId);
    }, [index]);
    
    return (
      <div className={styles.body}>
        <div className={styles.slide_container} >
          <div className={styles.slideshow}>
            <div className={styles.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {colors.map((backgroundColor, index) => (
                <div className={styles.slide} key={index} style={{ backgroundColor }}/>
              ))}
            </div>
          </div>
          <div className={styles.slideshowDots}>
              {colors.map((_, idx) => (
                  <div key={idx} className={`${styles.slideshowDot} ${index === idx ? styles.active : ''}`}></div>
                ))}
            </div>
        </div>
    

        <div className={styles.introzone}>
          <div className={styles.intro}>
            Im skilled in in the field of information management as well as drumming and Japanese language. Here are some funny pics in the past.
          </div>
        </div>
        
        <div className={styles.skillzone}>

          <div className={styles.devzone}>
            <Button variant="contained" className={styles.button1} onClick={toggleList}>
              programming
            </Button>
          </div>

          <div className={styles.musiczone}>
            <Button variant="contained" className={styles.button2} onClick={toggleList2}>
              others
            </Button>
          </div>
          



        </div>

        

            <CSSTransition
              in={showList}
              timeout={300}
              classNames={{
                enter: styles.projectListEnter,
                enterActive: styles.projectListEnterActive,
                exit: styles.projectListExit,
                exitActive: styles.projectListExitActive,
              }}
              unmountOnExit>
              
                <div className={styles.project}>
                  <div className={styles.project1}>1. Python</div>
                  <div className={styles.project1}>2. C/C++</div>
                  <div className={styles.project1}>3. HTML / CSS / JavaScript</div>
                  <div className={styles.project1}>4. MySQL</div>
                  <div className={styles.project1}>5. Git</div>
                </div>
              
            </CSSTransition>

            <CSSTransition
              in={showList2}
              timeout={300}
              classNames={{
                enter: styles.projectListEnter,
                enterActive: styles.projectListEnterActive,
                exit: styles.projectListExit,
                exitActive: styles.projectListExitActive,
              }}
              unmountOnExit>
              
                
                <div className={styles.project}>
                  <div className={styles.project2}>1. TOEIC 900</div>
                  <div className={styles.project2}>2. JLPT N1</div>
                  <div className={styles.project2}>3. Figma</div>
                </div>
              
            </CSSTransition>

        



      </div>
    );
  }
  
  export default Aboutme