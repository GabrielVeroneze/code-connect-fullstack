import html from 'remark-html'
import db from '@prisma/db'
import logger from '@/utils/logger'
import { remark } from 'remark'
import { PaginatedPosts } from '@/types/PaginatedPosts'
import { Post } from '@/types/Post'

export async function getAllPosts(page: number): Promise<PaginatedPosts> {
    try {
        const perPage = 6
        const skip = (page - 1) * perPage

        const totalItems = await db.post.count()
        const totalPages = Math.ceil(totalItems / perPage)

        const prev = page > 1 ? page - 1 : null
        const next = page < totalPages ? page + 1 : null

        const posts = await db.post.findMany({
            take: perPage,
            skip: skip,
            orderBy: { createdAt: 'desc' },
            include: {
                author: true,
            },
        })

        return { data: posts, prev, next }
    } catch (error) {
        logger.error('Falha ao obter posts', { error })

        return { data: [], prev: null, next: null }
    }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const post = await db.post.findFirst({
        where: {
            slug: slug
        },
        include: {
            author: true
        }
    })
    
    const processedContent = await remark().use(html).process(post.markdown)
    const contentHtml = processedContent.toString()

    post.markdown = contentHtml

    return post
}
