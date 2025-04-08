import { Button } from '@/components/Button'
import styles from './SearchForm.module.css'

export const SearchForm = () => {
    return (
        <form className={styles.form} action="/">
            <input
                name="query"
                className={styles.input}
                type="search"
                placeholder="Digite o que você procura"
            />
            <Button>Buscar</Button>
        </form>
    )
}
