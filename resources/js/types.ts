export interface TeamMember {
    username: string,
    name: string,
    role: string,
    social?: {
        website?: string,
        github?: string,
        twitter?: string,
        reddit?: string,
        twitch?: string,
    }
}

export interface ProductData {
    name: string,
    description: string,
    image: string,
    images: number,
    size?: {
        row?: number,
        col?: number
    }
}
