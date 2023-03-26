import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { LockIcon } from './LockIcon';
import { LockIcon2 } from './LockIcon2';
import classes from './Register.module.css';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 6:41 */
export const Register: FC<Props> = memo(function Register(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.alreadyHaveAccountLogin}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Already have account? </span>
          <span className={classes.label2}>Login</span>
        </p>
      </div>
      <div className={classes.registerBtn}>
        <div className={classes.bg}></div>
        <div className={classes.signUp}>Sign Up</div>
      </div>
      <div className={classes.bg2}></div>
      <div className={classes.lock}>
        <LockIcon className={classes.icon3} />
      </div>
      <div className={classes.labelTitle}>confirm password</div>
      <div className={classes.bg3}></div>
      <div className={classes.lock2}>
        <LockIcon2 className={classes.icon4} />
      </div>
      <div className={classes.labelTitle2}>password</div>
      <div className={classes.bg4}></div>
      <div className={classes.bg5}></div>
      <div className={classes.labelTitle3}>username/email</div>
      <div className={classes.placeholder}>info@example.com</div>
      <div className={classes.bg6}></div>
      <div className={classes.placeholder2}>+971544764829</div>
      <div className={classes.bg7}></div>
      <div className={classes.labelTitle4}>Phone number</div>
      <div className={classes.signUp2}>Sign Up</div>
      <div className={classes.hello}>Hello...</div>
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
    </div>
  );
});
