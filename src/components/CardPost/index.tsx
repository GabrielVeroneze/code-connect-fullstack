import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@/components/Avatar'
import { Post } from '@/types/Post'
import styles from './CardPost.module.css'

interface CardPostProps {
    post: Post
    tamanho?: 'compacto' | 'expandido'
}

export const CardPost = ({ post, tamanho = 'compacto' }: CardPostProps) => {
    return (
        <article className={`${styles.card} ${styles[tamanho]}`}>
            <header className={styles.cabecalho}>
                <Image
                    className={styles.imagem}
                    src={post.cover}
                    alt={`Capa do post: ${post.title}`}
                    width={438}
                    height={133}
                />
            </header>
            <section className={styles.conteudo}>
                <h2 className={styles.titulo}>{post.title}</h2>
                <p className={styles.texto}>{post.body}</p>
                {tamanho === 'compacto' && (
                    <Link className={styles.link} href={`/posts/${post.slug}`}>
                        Ver detalhes
                    </Link>
                )}
            </section>
            <footer className={styles.rodape}>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}
