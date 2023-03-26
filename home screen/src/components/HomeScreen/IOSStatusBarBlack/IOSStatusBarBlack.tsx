import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IOSStatusBarBlack.module.css';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 3:87 */
export const IOSStatusBarBlack: FC<Props> = memo(function IOSStatusBarBlack(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rightSide}>
        <RightSideIcon className={classes.icon} />
      </div>
      <div className={classes.leftSide}>
        <LeftSideIcon className={classes.icon2} />
      </div>
    </div>
  );
});
