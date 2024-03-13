// pages/index.js
import hellocss from '../styles/Home.module.css'
import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";

function Home() {
  return (
    <div className={hellocss.body}>
      
      <div className={hellocss.qq}>
        <div className={hellocss.title1}>WELCOME
          <div className={hellocss.circle}></div>
        </div>
        <div className={hellocss.title2}>TO
          <div className={hellocss.triangle}></div>
        </div>
        <div className={hellocss.title3}>MY WEB
          <div className={hellocss.red_rectangle}></div>
        </div>
        
      </div>

      <div className={hellocss.divv}>

        <Link href="/aboutme"className={hellocss.overlap1} >
          <Button className={hellocss.button_img}>
            <img className={hellocss.rectangle}  src="assets/lab.jpeg" />
            <div className={hellocss.frame}>
              <div className={hellocss.textwrapper}>About me</div>
            </div>
          </Button>
        </Link>

        <Link href="/skills" className={hellocss.overlap2}> 
            <Button className={hellocss.button_img}>
              <img className={hellocss.rectangle}  src="assets/nanyi.jpeg" />
              <div className={hellocss.frame}>
                <div className={hellocss.textwrapper}>SKILLS</div>
              </div> 
            </Button>
            </Link> 

          <Link href="/collections" className={hellocss.overlap3}>
            <Button className={hellocss.button_img}>
              <img className={hellocss.rectangle}  src="assets/labstudents.jpeg" /> 
              <div className={hellocss.frame}> 
                  <div className={hellocss.textwrapper}>COLLECTIONS</div> 
              </div>
            </Button>
          </Link>

      </div>

    </div>
    

  );
}

export default Home