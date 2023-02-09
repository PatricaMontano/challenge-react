import React, { FunctionComponent, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import Router from 'next/router'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

type DataRick = {
    id:number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Origin
    location: Location,
    image: string,
    episode: string[],
    url: string,
}
type Origin = {
    name: string,
    url: string
}

type Location = {
    name: string
    url: string
}

export default function CardBox({ dataRick }: { dataRick: DataRick }) {
    return (
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <Image
                        alt="DEUNA"
                        src={dataRick.image}
                        width={180}
                        height={240}
                        className={styles.images}
                    />

                    <h3>{dataRick.name}</h3>
                    <p>Status:{dataRick.status} </p>
                    <p>Specie: {dataRick.species}</p>
                    <p>Gender: {dataRick.gender}</p>

                    <a type="button" onClick={() => Router.push('/detail/' + dataRick.id )} >View Episodes</a>
                </div>
            </div>
        </div>
    )

}