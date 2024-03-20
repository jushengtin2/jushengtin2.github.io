import styles from '../styles/ec.module.css'
import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

const slideImages = [
  "https://i.ibb.co/GvjTwfT/IMG-4598.jpg",
  "https://i.ibb.co/DVxmTQL/IMG-4615.jpg",
  "https://i.ibb.co/F6ytb24/IMG-3286.jpg",
];

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

        <div className={styles.slide_container}>
          <div className={styles.slideshow}>
            <div className={styles.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {slideImages.map((imageSrc, idx) => (
                <img src={imageSrc} alt={`Slide ${idx}`} className={styles.slide} key={idx} />
              ))}
            </div>
          </div>
          <div className={styles.slideshowDots}>
            {slideImages.map((_, idx) => (
              <div key={idx} className={`${styles.slideshowDot} ${index === idx ? styles.active : ''}`} onClick={() => setIndex(idx)}></div>
            ))}
          </div>
        </div>
    

        <div className={styles.introzone}>
          <div className={styles.intro}>
          With 10 years of experience in drums/percussion performance, I specialize in popular genres such as pop rock and funk. My background includes previous employment at Yamaha Music School, serving as the president of a music club, and holding a street performance license from Kaohsiung City. In addition to my extensive performance experience, I also have 3 years of experience in music instruction.
          </div>
        </div>
        
        <div className={styles.skillzone}>

          <div className={styles.devzone}>
            <Button variant="contained" className={styles.button1} onClick={toggleList}>
              Performance experience
            </Button>
          </div>

          <div className={styles.musiczone}>
            <Button variant="contained" className={styles.button2} onClick={toggleList2}>
              Working experience
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
                  <div className={styles.project1}>1. 高雄黃色小鴨冬日遊樂園</div>
                  <div className={styles.project1}>2. 苗栗庄頭劇場藝術祭</div>
                  <div className={styles.project1}>3. 夢前行公益活動饗宴</div>
                  <div className={styles.project1}>4. 南區熱們音樂祭樂團</div>
                  <div className={styles.project1}>5. 高雄市街頭藝人街頭表演</div>
                  <div className={styles.project1}>6. 駁二藝術特區23校聯發</div>
                  <div className={styles.project1}>7. 高雄捷運港都高校音樂祭</div>
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
                  <div className={styles.project2}>1. YAMAHA音樂教室</div>
                  <div className={styles.project2}>2. 國立中山大學熱音社</div>
                  <div className={styles.project2}>3. 國立中山大學附中熱音社</div>
                </div>
              
            </CSSTransition>

        



      </div>
    );
  }
  
  export default Aboutme