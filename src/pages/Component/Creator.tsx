import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Creator({name=''}) {
    return (
        <div className={styles.description}>
          <div>
            <a
              href="https://github.com/PatricaMontano"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{name}
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