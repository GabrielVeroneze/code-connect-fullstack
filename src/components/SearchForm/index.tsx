'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import styles from './SearchForm.module.css'

export const SearchForm = () => {
    const router = useRouter()
    const [search, setSearch] = useState<string>('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        router.push(`/?query=${search}`)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                name="query"
                className={styles.input}
                type="search"
                placeholder="Digite o que você procura"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button>Buscar</Button>
        </form>
    )
}
