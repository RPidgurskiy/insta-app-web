export interface ProfileTyped {
    user: {
        profile_pic_url: string;
        username: string;
        full_name: string;
        biography: string;
        follow_count: number;
        follower_count: number;
    }
    postsCount?: number;
}