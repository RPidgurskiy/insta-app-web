import React, {SVGProps} from 'react';

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" {...props}>
            <path
                d="M4 2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zm2 12h10v2H6v-2zm0-3h10v2H6v-2zm0-3h10v2H6v-2z"/>
        </svg>
    );
};