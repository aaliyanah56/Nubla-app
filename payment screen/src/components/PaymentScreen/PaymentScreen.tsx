import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import classes from './PaymentScreen.module.css';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 136:451 */
export const PaymentScreen: FC<Props> = memo(function PaymentScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.nublaPay}>Nubla Pay</div>
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
      <div className={classes.arrowLeft}>
        <ArrowLeftIcon className={classes.icon3} />
      </div>
      <div className={classes.rectangle538}></div>
      <div className={classes.download11}></div>
      <div className={classes.tigo}>Tigo</div>
      <div className={classes.rectangle539}></div>
      <div className={classes.download41}></div>
      <div className={classes.visa}>visa</div>
      <div className={classes.rectangle540}></div>
      <div className={classes.download31}></div>
      <div className={classes.mpesa}>mpesa</div>
    </div>
  );
});
