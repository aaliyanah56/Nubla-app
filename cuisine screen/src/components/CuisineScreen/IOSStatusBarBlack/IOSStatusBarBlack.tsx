import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IOSStatusBarBlack.module.css';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
  classes?: {
    rightSide?: string;
    root?: string;
  };
  swap?: {
    rightSide?: ReactNode;
    leftSide?: ReactNode;
  };
}
/* @figmaId 1:3 */
export const IOSStatusBarBlack: FC<Props> = memo(function IOSStatusBarBlack(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rightSide || ''} ${classes.rightSide}`}>
        {props.swap?.rightSide || <RightSideIcon className={classes.icon} />}
      </div>
      <div className={classes.leftSide}>{props.swap?.leftSide || <LeftSideIcon className={classes.icon2} />}</div>
    </div>
  );
});
