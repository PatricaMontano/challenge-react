import React, { FunctionComponent, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import Router from 'next/router'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

type Episode = {
  id:number,
  name: string,
  air_mode: string,
  episode: string
}

export default function CardBox({ episodes }: { episodes: Episode }) {
    return (
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <Image
                        alt="DEUNA"
                        src={"/rick-episodes.jpg"}
                        width={180}
                        height={240}
                        className={styles.images}
                    />

                    <h3>{episodes.name}</h3>
                    <p>Name:{episodes.name} </p>
                    <p>Air Mode : {episodes.air_mode}</p>
                    <p>Episodio: {episodes.episode}</p>

                </div>
            </div>
        </div>
    )

}