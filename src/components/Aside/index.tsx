import Image from 'next/image'
import logo from './assets/logo.png'
import styles from './Aside.module.css'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Image src={logo} alt="Logo da Code Connect" />
        </aside>
    )
}
