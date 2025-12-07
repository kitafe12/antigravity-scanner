import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getBoringAvatar(name: string) {
    const safeName = encodeURIComponent(name || 'Trader')
    const colors = '264653,2a9d8f,e9c46a,f4a261,e76f51' // Professional Palette
    return `https://source.boringavatars.com/beam/120/${safeName}?colors=${colors}`
}
