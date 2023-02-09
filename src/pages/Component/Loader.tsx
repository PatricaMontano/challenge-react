import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Loader(){
    return(

        <Image
        alt="DEUNA"
        src="wait-icon.svg"
        width={200}
        height={240}
        className={styles.loaderContainer}  
    />
    )
}