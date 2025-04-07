import styles from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode
    type?: 'button' | 'reset' | 'submit'
}

export const Button = ({ children, type }: ButtonProps) => {
    return (
        <button className={styles.botao} type={type}>
            {children}
        </button>
    )
}
