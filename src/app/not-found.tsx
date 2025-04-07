import { Heading } from '@/components/Heading'
import Image from 'next/image'
import Link from 'next/link'
import styles from './error.module.css'

const NotFound = () => {
    return (
        <main className={styles.principal}>
            <Image
                className={styles.imagem}
                src="/images/errors/error-404.png"
                alt="Robô triste em uma floresta olhando para o número 404 na água."
                height={367}
                width={656}
            />
            <Heading>OPS! Página não encontrada.</Heading>
            <p className={styles.texto}>
                Você pode voltar ao feed e continuar buscando projetos
                incríveis!
            </p>
            <Link className={styles.link} href="/">
                Voltar ao feed
            </Link>
        </main>
    )
}

export default NotFound
