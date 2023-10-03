export interface GalleryTyped {
   photos: InstagramPostData[]
}

interface InstagramPostData {
    code: string;
    post_url: string;
    like_count: number;
    comment_count: number;
    media_type: number;
    taken_at: number;
    view_count: number;
    display_url: string;
}