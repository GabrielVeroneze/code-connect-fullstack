import Image from 'next/image'
import styles from './Aside.module.css'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Image
                src="/images/logo.png"
                alt="Logo da Code Connect"
                height={40}
                width={128}
            />
        </aside>
    )
}
