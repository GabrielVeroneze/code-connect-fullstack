import { Author } from '@/types/Author'

export interface Post {
    id: number
    cover: string
    title: string
    slug: string
    body: string
    markdown: string
    author: Author
}
