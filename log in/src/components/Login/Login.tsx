import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { LockIcon } from './LockIcon';
import classes from './Login.module.css';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 6:93 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.donTHaveAnAccountRegister}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Don’t have an account? </span>
          <span className={classes.label2}>Register</span>
        </p>
      </div>
      <div className={classes.loginBtn}>
        <div className={classes.bg}></div>
        <div className={classes.login}>Login</div>
      </div>
      <div className={classes.forgotPassword}>Forgot Password?</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rememberMe}>Remember me</div>
      <div className={classes.bg2}></div>
      <div className={classes.lock}>
        <LockIcon className={classes.icon3} />
      </div>
      <div className={classes.labelTitle}>password</div>
      <div className={classes.bg3}></div>
      <div className={classes.placeholder}>+971544764829</div>
      <div className={classes.bg4}></div>
      <div className={classes.labelTitle2}>Phone number</div>
      <div className={classes.login2}>Login</div>
      <div className={classes.welcomeBack}>Welcome back!!!</div>
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
