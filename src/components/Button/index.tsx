import React, {FC} from 'react';

import './index.css'
import {ButtonTyped} from "./typed";

export const Button: FC<ButtonTyped> = ({type, title, icon, onClick}) => {
    return (
        <button className={`${type} b-btn`} onClick={onClick}>
            {title}
            {icon && icon}
        </button>
    );
};
