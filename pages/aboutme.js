import React, { useEffect } from "react";
import anime from "animejs";
import styles from '../styles/aboutme.module.css';
import Button from '@mui/material/Button';
import Link from "next/link";
import Image from 'next/image';

function Aboutme() {
    useEffect(() => {
        // Anime.js animation for .cat
        anime({
            targets: `.${styles.cat}`,
            translateX: 650, // 目標位置
            duration: 12000, // 動畫持續時間
            loop: true, // 循環播放
            easing: 'linear' // 保持速度一致
          });

        // Dynamically load the Tenor GIF embed script
        const script = document.createElement('script');
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Clean up script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.piczone}>
                <img src='https://i.ibb.co/RjzH6Bp/S-3981318.jpg' alt="Profile" className={styles.mypic} />
                
                <div className={styles.circle}></div>
            </div>

            <div className={styles.introzone}>
                <div className={styles.cat} id='cat'>
                    {/* Tenor GIF Embed */}
                    <div className="tenor-gif-embed" data-postid="20420596" data-share-method="host" data-aspect-ratio="2.56" data-width="100%">
                      <a href="https://tenor.com/view/nyancat-rainbow-cat-cat-gif-rainbow-gif-20420596">Nyancat Rainbow Cat Sticker</a> from 
                      <a href="https://tenor.com/search/nyancat-stickers">Nyancat Stickers</a>
                    </div>
                </div>
                <div className={styles.intro}>
                    Hello!!! Im Justin, 23yo from Kaohsiung Taiwan 🇹🇼 and currently pursuing a Masters degree in Information Management at National Taiwan University, Im a member of Professor Nanyi s research lab and currently researching HCI (Human-Computer Interaction) 🤜🏼🤛🏼 ❤️.
                </div>
                
            </div>
        </div>
    );
}

export default Aboutme;
