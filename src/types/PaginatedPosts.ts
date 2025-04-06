import { Post } from '@/types/Post'

export interface PaginatedPosts {
    data: Post[]
    prev: number | null
    next: number | null
}
