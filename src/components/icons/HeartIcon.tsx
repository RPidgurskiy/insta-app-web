import React, {SVGProps} from 'react';

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" {...props}>
            <path
                d="M12 21.35l-1.45-1.32C5.4 16.9 2 13.12 2 9c0-4.97 4.03-9 9-9s9 4.03 9 9c0 4.12-3.4 7.9-8.55 11.03L12 21.35z"/>
        </svg>
    );
};
