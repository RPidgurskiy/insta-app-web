import React, {FC} from 'react';

import {LayoutTyped} from "./typed";
import './index.css'

export const Layout: FC<LayoutTyped> = ({children}) => {
    return (
        <div className={'layout'}>
            {children}
        </div>
    );
};
