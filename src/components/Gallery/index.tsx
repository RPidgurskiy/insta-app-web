import React, {FC} from 'react';
import {GalleryTyped} from "./typed";
import './index.css'

import {HeartIcon, CommentIcon} from "../icons";
export const Gallery: FC<GalleryTyped> = ({photos}) => {
    return (
        <div className={'gallery-grid'}>
            {photos.map((photo, index) => (
                <div key={index} className="photo-container">
                    <img src={photo.display_url} alt="" className={'gallery-img'}/>
                    <div className="icons">
                        <div className={'icon-box'}>
                            {photo.like_count}
                            <HeartIcon className={'icon'}/>
                        </div>
                        <div className={'icon-box'}>
                            {photo.comment_count}
                            <CommentIcon className={'icon'}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
