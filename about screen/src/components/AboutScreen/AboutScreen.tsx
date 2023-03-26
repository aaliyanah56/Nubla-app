import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AboutScreen.module.css';
import { AngleRightIcon } from './AngleRightIcon';
import { AngleRightIcon2 } from './AngleRightIcon2';
import { AngleRightIcon3 } from './AngleRightIcon3';
import { AngleRightIcon4 } from './AngleRightIcon4';
import { AngleRightIcon5 } from './AngleRightIcon5';
import { AngleRightIcon6 } from './AngleRightIcon6';
import { AngleRightIcon7 } from './AngleRightIcon7';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 139:497 */
export const AboutScreen: FC<Props> = memo(function AboutScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
      <div className={classes.aboutUs}>About us</div>
      <div className={classes.arrowLeft}>
        <ArrowLeftIcon className={classes.icon3} />
      </div>
      <div className={classes.fAQ}>FAQ</div>
      <div className={classes.appFeedback}>App feedback</div>
      <div className={classes.privacyPolicy}>Privacy policy</div>
      <div className={classes.termsOfUse}>Terms of use</div>
      <div className={classes.facebook}>Facebook</div>
      <div className={classes.twitter}>Twitter</div>
      <div className={classes.instagram}>Instagram</div>
      <div className={classes.line10}></div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon4} />
      </div>
      <div className={classes.angleRight2}>
        <AngleRightIcon2 className={classes.icon5} />
      </div>
      <div className={classes.angleRight3}>
        <AngleRightIcon3 className={classes.icon6} />
      </div>
      <div className={classes.angleRight4}>
        <AngleRightIcon4 className={classes.icon7} />
      </div>
      <div className={classes.angleRight5}>
        <AngleRightIcon5 className={classes.icon8} />
      </div>
      <div className={classes.angleRight6}>
        <AngleRightIcon6 className={classes.icon9} />
      </div>
      <div className={classes.angleRight7}>
        <AngleRightIcon7 className={classes.icon10} />
      </div>
    </div>
  );
});
