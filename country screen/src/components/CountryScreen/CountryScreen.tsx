import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import classes from './CountryScreen.module.css';
import { Ellipse7Icon } from './Ellipse7Icon';
import { Ellipse8Icon } from './Ellipse8Icon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 136:418 */
export const CountryScreen: FC<Props> = memo(function CountryScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.whereWillWeDeliverTo}>where will we deliver to ?</div>
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
      <div className={classes.ellipse8}>
        <Ellipse8Icon className={classes.icon4} />
      </div>
      <div className={classes.kenya}>kenya</div>
      <div className={classes.download21}></div>
      <div className={classes.ellipse7}>
        <Ellipse7Icon className={classes.icon5} />
      </div>
      <div className={classes.download1}></div>
      <div className={classes.tanzania}>Tanzania</div>
    </div>
  );
});
