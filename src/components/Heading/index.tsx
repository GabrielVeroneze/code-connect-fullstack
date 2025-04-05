import styles from './Heading.module.css'

interface HeadingProps {
    children: string
}

export const Heading = ({ children }: HeadingProps) => {
    return (
        <h1 className={styles.titulo}>{children}</h1>
    )
}
