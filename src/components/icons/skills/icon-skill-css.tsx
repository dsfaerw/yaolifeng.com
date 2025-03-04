import React from 'react';

import { cn } from '@/utils/utils';

export const IconSkillCSS = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={cn('icon-[skill-icons--css]', className)}></span>;
};
