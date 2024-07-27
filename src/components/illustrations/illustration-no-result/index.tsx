import React from 'react';

import { IllustrationNoResultDark } from './illustration-no-result-dark';
import { IllustrationNoResultLight } from './illustration-no-result-light';

import { cn } from '@/lib/utils';
export function IllustrationNoResult(props: React.SVGProps<SVGSVGElement>) {
    return (
        <>
            <IllustrationNoResultDark
                {...props}
                className={cn(props.className, 'hidden dark:block')}
            />
            <IllustrationNoResultLight
                {...props}
                className={cn(props.className, 'block dark:hidden')}
            />
        </>
    );
}
