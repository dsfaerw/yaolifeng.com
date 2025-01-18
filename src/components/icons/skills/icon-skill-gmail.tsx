import React from 'react';
import type { SVGProps } from 'react';

import { cn } from '@/utils/utils';

export const IconSkillGmailDark = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={cn('icon-[skill-icons--gmail-dark]', className)}></span>;
};

export const IconSkillGmailLight = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={cn('icon-[skill-icons--gmail-light]', className)}></span>;
};

export const IconSkillGmail = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3135"
            width="2em"
            height="2em"
        >
            <path
                d="M69.12 929.28L222.72 960V412.16c-51.2-37.376-102.4-75.264-153.6-112.64v629.76z"
                fill="#3399FF"
                p-id="3136"
            ></path>
            <path
                d="M514.56 632.32C366.08 521.216 217.6 410.624 69.12 299.52c-3.584-6.144-11.264-20.992-10.24-40.96 1.536-24.576 15.36-40.448 20.48-46.08 13.312-13.824 28.16-18.432 35.84-20.48 15.872-4.096 29.184-1.536 35.84 0 121.344 88.576 242.176 177.664 363.52 266.24 95.744-71.68 190.976-143.36 286.72-215.04v179.2c-95.744 70.144-190.976 139.776-286.72 209.92z"
                fill="#FF3333"
                p-id="3137"
            ></path>
            <path
                d="M954.88 929.28V304.64c-51.2 39.424-102.4 78.336-153.6 117.76v542.72c51.2-11.776 102.4-24.064 153.6-35.84z"
                fill="#339966"
                p-id="3138"
            ></path>
            <path
                d="M801.28 243.2v174.08c51.2-37.376 102.4-75.264 153.6-112.64 1.536-11.776 3.584-24.064 5.12-35.84-0.512-8.704-2.56-26.112-15.36-40.96-9.216-10.752-19.968-15.872-30.72-20.48-16.384-7.168-31.232-9.728-40.96-10.24-24.064 15.36-47.616 30.72-71.68 46.08z"
                fill="#FFCC00"
                p-id="3139"
            ></path>
        </svg>
    );
};
