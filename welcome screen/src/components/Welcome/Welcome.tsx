import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';
import classes from './Welcome.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:22 */
export const Welcome: FC<Props> = memo(function Welcome(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.startBtn}>
        <div className={classes.getStarted}>Get Started</div>
      </div>
      <div className={classes.allRightReserved2022}>All Right Reserved @2022 </div>
      <IOSStatusBarBlack
        className={classes.iOSStatusBarBlack}
        classes={{ rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon} />
            </div>
          ),
          leftSide: <LeftSideIcon className={classes.icon2} />,
        }}
      />
      <div className={classes.whatsApp_Image_20221019_at_225}></div>
      <div className={classes.searchLocation}></div>
    </div>
  );
});
