import { Post } from '@/types/Post'

export interface PaginatedPosts {
    first: number
    prev: number | null
    next: number | null
    last: number
    pages: number
    items: number
    data: Post[]
}
