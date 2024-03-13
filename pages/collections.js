import styles from '../styles/aboutme.module.css'
import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";


function Aboutme() {
    return (
      <div className={styles.body}>
        <div className={styles.piczone}>
            <img src='https://i.ibb.co/RjzH6Bp/S-3981318.jpg'className={styles.mypic} ></img>
            <div className={styles.rectangle}></div>
        </div>

        <div className={styles.introzone}>
            <div className={styles.intro}>
                Hello!!! I'm Justin, 23yo from Kaohsiung Taiwan 🇹🇼 and currently pursuing a Master's degree in Information Management at National Taiwan University, I'm a member of Professor Nanyi's research lab and currently researching HCI (Human-Computer Interaction).
            </div>
            <div className={styles.circle}></div>
        </div>
  
      </div>
      
  
    );
  }
  
  export default Aboutme