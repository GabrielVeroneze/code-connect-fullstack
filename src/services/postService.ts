import { Prisma } from '@prisma/client'
import { remark } from 'remark'
import { redirect } from 'next/navigation'
import { PaginatedPosts } from '@/types/PaginatedPosts'
import { Post } from '@/types/Post'
import html from 'remark-html'
import db from 'prisma/db'
import logger from '@/utils/logger'

export async function getAllPosts(page: number, searchTerm: string): Promise<PaginatedPosts> {
    try {
        const where: Prisma.PostWhereInput = {}

        if (searchTerm) {
            where.title = {
                contains: searchTerm,
                mode: 'insensitive',
            }
        }

        const perPage = 6
        const skip = (page - 1) * perPage

        const totalItems = await db.post.count({
            where: where,
        })

        const totalPages = Math.ceil(totalItems / perPage)
        const prev = page > 1 ? page - 1 : null
        const next = page < totalPages ? page + 1 : null

        const posts = await db.post.findMany({
            take: perPage,
            skip: skip,
            where: where,
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

export async function getPostBySlug(slug: string): Promise<Post> {
    try {
        const post = await db.post.findFirst({
            where: {
                slug: slug,
            },
            include: {
                author: true,
            },
        })

        if (!post) {
            throw new Error(`Post com o slug ${slug} não foi encontrado`)
        }

        const processedContent = await remark().use(html).process(post.markdown)
        const contentHtml = processedContent.toString()

        post.markdown = contentHtml

        return post
    } catch (error) {
        logger.error('Falha ao obter o post com o slug: ', {
            slug,
            error,
        })

        redirect('/not-found')
    }
}
