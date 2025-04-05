'use client'

import { useEffect } from 'react'

interface ErrorProps {
    error: Error & { digest?: string }
}

const Error = ({ error }: ErrorProps) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2 style={{ color: 'white' }}>Something went wrong!</h2>
        </div>
    )
}

export default Error
