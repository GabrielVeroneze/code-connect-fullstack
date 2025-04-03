import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { Aside } from '@/components/Aside'
import '@/styles/reset.css'
import '@/styles/globals.css'

const prompt = Prompt({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Code Connect',
    description: 'Uma rede social para devs!',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="pt-br" className={prompt.className}>
            <body>
                <div className="app-container">
                    <Aside />
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout
