import React, { FunctionComponent, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'
import Router from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function CardBoxOld({name='Desconocido' , url=''}) {
    console.log(url.split('/').pop());
    const [id, setId] = useState<string | undefined>(url.split('/').pop());

    return (
        <div className={styles.grid}>
          
          <a
            
            href={'http://localhost:3000/detail/'+{id}}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {name} <span>-&gt;</span>
            </h2>
            
          </a>
        </div>
    )
}