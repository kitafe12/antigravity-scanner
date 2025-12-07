'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TraderAvatarProps {
    src?: string | null
    nickname: string
    className?: string
    size?: number
}

export function TraderAvatar({ src, nickname, className, size = 120 }: TraderAvatarProps) {
    const fallbackUrl = `https://api.dicebear.com/7.x/shapes/svg?seed=${nickname}&backgroundColor=0a5c48`
    const [imgSrc, setImgSrc] = useState(src || fallbackUrl)
    const [hasError, setHasError] = useState(false)

    return (
        <div className={cn("relative overflow-hidden bg-slate-800", className)}>
            <Image
                src={hasError || !src ? fallbackUrl : imgSrc}
                alt={nickname}
                fill
                className="object-cover"
                onError={() => {
                    setHasError(true)
                    setImgSrc(fallbackUrl)
                }}
            />
        </div>
    )
}
