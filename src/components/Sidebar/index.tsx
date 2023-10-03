import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './index.css'
import {menuLinks} from "./config";
import {IconInstagram, InstagramIconSm} from '../icons';

export const Sidebar = () => {
    const navigate = useNavigate();
    const handleNavigateHome = () => {
        navigate('/')
    }
    return (
        <div className={'sidebar'}>
            <IconInstagram className={'logo-icon'} onClick={handleNavigateHome}/>
            <InstagramIconSm className={'logo-icon-sm'} onClick={handleNavigateHome}/>

            {menuLinks.map(((link, index) =>
                    <NavLink key={index} to={link.path} className={'link'}>
                        <span className={'link-icon'}>{link.Icon}</span>
                        {link.text}
                    </NavLink>
            ))}

        </div>
    );
};
