import Link from 'next/link'
import { getAllPosts } from '@/services/postService'
import { SearchForm } from '@/components/SearchForm'
import { CardPost } from '@/components/CardPost'
import styles from './page.module.css'

interface HomeProps {
    searchParams: Promise<{ page: string; query: string }>
}

const Home = async ({ searchParams }: HomeProps) => {
    const { page, query } = await searchParams
    const currentPage = Number(page) || 1

    const { data: posts, prev, next } = await getAllPosts(currentPage, query)

    return (
        <main className={styles.principal}>
            <SearchForm />
            <section className={styles.posts}>
                {posts.map(post => (
                    <CardPost key={post.id} post={post} />
                ))}
            </section>
            <nav className={styles.links}>
                {prev && (
                    <Link
                        className={styles.link}
                        href={{
                            pathname: '/',
                            query: { page: prev, query: query },
                        }}
                    >
                        Página anterior
                    </Link>
                )}
                {next && (
                    <Link
                        className={styles.link}
                        href={{
                            pathname: '/',
                            query: { page: next, query: query },
                        }}
                    >
                        Próxima página
                    </Link>
                )}
            </nav>
        </main>
    )
}

export default Home
