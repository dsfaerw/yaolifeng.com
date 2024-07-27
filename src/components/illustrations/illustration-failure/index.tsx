import React from 'react';

import { IllustrationFailureDark } from './illustration-failure-dark';
import { IllustrationFailureLight } from './illustration-failure-light';

import { cn } from '@/lib/utils';
export function IllustrationFailure(props: React.SVGProps<SVGSVGElement>) {
    return (
        <>
            <IllustrationFailureDark
                {...props}
                className={cn(props.className, 'hidden dark:block')}
            />
            <IllustrationFailureLight
                {...props}
                className={cn(props.className, 'block dark:hidden')}
            />
        </>
    );
}
