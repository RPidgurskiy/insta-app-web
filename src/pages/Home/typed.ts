export interface DataTyped {
    user: UserData;
    posts: {
        items: InstagramPostData[];
    };
}

interface UserData {
    profile_pic_url: string;
    username: string;
    full_name: string;
    biography: string;
    follow_count: number;
    follower_count: number;
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