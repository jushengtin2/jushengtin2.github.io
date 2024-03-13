import styles from '../styles/aboutme.module.css'
import React from "react";
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from 'next/image';


function Aboutme() {
    return (
      <div className={styles.body}>
        <div className={styles.piczone}>
            <Image src='https://i.ibb.co/RjzH6Bp/S-3981318.jpg'className={styles.mypic} / >
            <div className={styles.rectangle}></div>
        </div>

        <div className={styles.introzone}>
            <div className={styles.intro}>
                
            </div>
            <div className={styles.circle}></div>
        </div>
  
      </div>
      
  
    );
  }
  
  export default Aboutme