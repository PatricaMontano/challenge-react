import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Creator() {
    return (
        <div className={styles.autor}>
          <div>
            <a
              href="https://github.com/PatricaMontano"
              target="_blank"
              rel="noopener noreferrer"
            >
              By {process.env.NEXT_PUBLIC_AUTOR}
              <Image  
                src="/deuna-logo.svg"
                alt="DEUNA"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
    )
}