import html from 'remark-html'
import logger from '@/utils/logger'
import { remark } from 'remark'
import { PaginatedPosts } from '@/types/PaginatedPosts'
import { Post } from '@/types/Post'

export async function getAllPosts(page: number): Promise<PaginatedPosts> {
    const response = await fetch(
        `http://localhost:3042/posts?_page=${page}&_per_page=6`
    )

    if (!response.ok) {
        logger.error('Ops, alguma coisa deu errado')

        return {
            first: 1,
            prev: null,
            next: null,
            last: 1,
            pages: 1,
            items: 0,
            data: [],
        }
    }

    logger.info('Posts obtidos com sucesso')

    return response.json()
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`)

    if (!response.ok) {
        logger.error('Ops, alguma coisa deu errado')

        return null
    }

    logger.info('Post obtido com sucesso')

    const data: Post[] = await response.json()

    if (data.length === 0) {
        return null
    }

    const post = data[0]

    const processedContent = await remark().use(html).process(post.markdown)
    const contentHtml = processedContent.toString()

    post.markdown = contentHtml

    return post
}
