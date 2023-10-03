import React, {useEffect, useState} from 'react';
import {DataTyped} from "./typed";

import {Gallery, Profile} from "components";

export const Home = () => {
    const [userData, setUserData] = useState<DataTyped | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | undefined>(null);

    useEffect(() => {
        fetch('https://checkinsta.herokuapp.com/check_upk/car?get_posts=true')
            .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            })
            .then(data => {
                setUserData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={'custom-loader'}></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return null;
    }
    return (
        <>
            <Profile user={userData?.user} postsCount={userData?.posts?.items?.length}/>
            <Gallery photos={userData?.posts?.items}/>
        </>
    );
};
