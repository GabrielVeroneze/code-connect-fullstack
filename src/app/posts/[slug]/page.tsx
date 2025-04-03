import { Roboto_Mono } from 'next/font/google'
import { getPostBySlug } from '@/services/postService'
import { CardPost } from '@/components/CardPost'
import styles from './page.module.css'

const roboto_mono = Roboto_Mono({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

interface PagePostProps {
    params: Promise<{ slug: string }>
}

const PagePost = async ({ params }: PagePostProps) => {
    const { slug } = await params

    const post = await getPostBySlug(slug)

    if (!post) {
        return <p>Post não encontrado</p>
    }

    return (
        <main className={styles.principal}>
            <CardPost tamanho="expandido" post={post} />
            <section className={styles.secao}>
                <h2 className={styles.titulo}>Código:</h2>
                <div className={styles.box}>
                    <span
                        className={`${styles.codigo} ${roboto_mono.className}`}
                        dangerouslySetInnerHTML={{
                            __html: post.markdown,
                        }}
                    />
                </div>
            </section>
        </main>
    )
}

export default PagePost
