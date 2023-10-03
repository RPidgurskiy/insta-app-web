import React, {FC, useState} from 'react';
import {PlusIcon} from "components";
import {formatCount} from "helpers";

import {Button} from "../Button";
import {ButtonColor} from "../Button/typed";

import './index.css'
import {ProfileTyped} from './typed';

export const Profile: FC<ProfileTyped> = ({user, postsCount}) => {
    const [follow, setFollow] = useState(true);
    const handleFollow = () => {
        setFollow(!follow)
    }
    return (
        <div className="profile">
            <div className="profile-header">
                <div className={'profile-avatar-box'}>
                    <img
                        src={user.profile_pic_url}
                        alt="profile-avatar"
                        className="profile-avatar"
                    />
                </div>
                <div>
                    <div className={'profile-top-area'}>
                        <h1 className={'profile-username'}>{user.username}</h1>

                        <Button title={follow ? 'Follow' : 'Unfollow'}
                                onClick={handleFollow}
                                type={ButtonColor.BLUE}/>

                        <Button title={'Message'} type={ButtonColor.DARK}/>
                        <div className={'d-flex'}>
                            <Button title={''} type={ButtonColor.ICON} icon={<PlusIcon/>}/>
                            <Button title={'...'} type={ButtonColor.ICON}/>
                        </div>
                    </div>
                    <div className={'profile-grid-area'}>
                        <p><b>{postsCount}</b> Posts</p>
                        <p><b>{formatCount(user.follower_count)}</b> Followers</p>
                        <p><b>{formatCount(user.follow_count)}</b> Following</p>
                    </div>
                    <p>{user.full_name}</p>
                    <p className={'profile-bio'}>{user.biography}</p>
                </div>
            </div>
        </div>
    );
};
