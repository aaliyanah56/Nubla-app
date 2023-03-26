import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';
import classes from './SettingsScreen.module.css';

interface Props {
  className?: string;
}
/* @figmaId 134:325 */
export const SettingsScreen: FC<Props> = memo(function SettingsScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle536}></div>
      <div className={classes.rectangle535}></div>
      <div className={classes.rectangle534}></div>
      <div className={classes.settings}>Settings</div>
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
      <div className={classes.line10}></div>
      <div className={classes.notification}>Notification</div>
      <div className={classes.language}>Language</div>
      <div className={classes.english}>English</div>
      <div className={classes.line11}></div>
      <div className={classes.country}>Country</div>
      <div className={classes.kenya}>kenya</div>
      <div className={classes.line12}></div>
      <div className={classes.arrowLeft}>
        <ArrowLeftIcon className={classes.icon3} />
      </div>
      <div className={classes.logIn}>log in</div>
    </div>
  );
});
