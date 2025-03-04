import React from 'react';

import { cn } from '@/utils/utils';

export const IconSkillDocker = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={cn('icon-[skill-icons--docker]', className)}></span>;
};
