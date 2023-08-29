/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Button } from './styles'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    hasNotifications,
    isHome,
    mentions,
}) => {
    return(
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src="https://svgshare.com/i/Pb9.svg"/>}
        </Button>
    )
}

export default ServerButton