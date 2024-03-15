import styles from '../styles/skills.module.css'
import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from 'next/image';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Aboutme() {

    const [index, setIndex] = React.useState(0);
    const isFirstRender = React.useRef(true);
    React.useEffect(() => {

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
            I'm skilled in in the field of information management (like text mining and website development), as well as jazz drumming and Japanese language. Here are the development projects I've worked on and the performances I've been a part of in the past.
          </div>
        </div>
        
        <div className={styles.skillzone}>

          <div className={styles.devzone}>
                123
          </div>
          
          <div className={styles.musiczone}>
                456
          </div>


        </div>

        
      </div>
    );
  }
  
  export default Aboutme