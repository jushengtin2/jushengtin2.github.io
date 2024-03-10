// pages/index.js
import hellocss from '../styles/Home.module.css'

import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";

function Home() {
  return (
    <div className={hellocss.body}>
      
      <div className={hellocss.qq}>
        <div className={hellocss.title}>WELCOME TO MY WEB</div>
      </div>

      <div className={hellocss.divv}>

        <Link href="/aboutme"className={hellocss.overlap} >
          <Button className={hellocss.button_img}>
            <img className={hellocss.rectangle} alt="Rectangle" src="assets/lab.jpeg" />
            <div className={hellocss.frame}>
            <div className={hellocss.textwrapper}>About me</div>
            </div>
          </Button>
        </Link>

          <div className={hellocss.overlapgroup}> 
            <img className={hellocss.rectangle} alt="Rectangle" src="assets/nanyi.jpeg" />
            <div className={hellocss.frame}>
              <div className={hellocss.textwrapper}>SKILLS</div>
            </div> 
          </div> 

          <div className={hellocss.overlap2}>
            <img className={hellocss.rectangle} alt="Rectangle" src="assets/labstudents.jpeg" /> 
            <div className={hellocss.frame}> 
                <div className={hellocss.textwrapper}>COLLECTIONS</div> 
            </div>
          </div>

      </div>

    </div>
    

  );
}

export default Home