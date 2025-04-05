'use client'

import { useEffect } from 'react'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import styles from './error.module.css'

interface ErrorProps {
    error: Error & { digest?: string }
}

const Error = ({ error }: ErrorProps) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className={styles.principal}>
            <Image
                className={styles.imagem}
                src="/images/error-500.png"
                alt="Robô verde sentado, pensando, com fundo desfocado verde"
                height={367}
                width={656}
            />
            <Heading>Opa! Um erro ocorreu.</Heading>
            <p className={styles.texto}>
                Não conseguimos carregar a página, volte para seguir navegando.
            </p>
            <Link className={styles.link} href="/">
                Voltar ao feed
            </Link>
        </main>
    )
}

export default Error
