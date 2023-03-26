import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow4Icon } from './Arrow4Icon';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import classes from './Location.module.css';
import { LocationArrowIcon } from './LocationArrowIcon';
import { RightSideIcon } from './RightSideIcon';
import { ThomasKinto6msmkwzjwkcUnsplash } from './ThomasKinto6msmkwzjwkcUnsplash';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:45 */
export const Location: FC<Props> = memo(function Location(props = {}) {
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
      <div className={classes.thomasKinto6MsMKWzJWKcUnsplash}>
        <ThomasKinto6msmkwzjwkcUnsplash className={classes.icon3} />
      </div>
      <div className={classes.locationArrow}>
        <LocationArrowIcon className={classes.icon4} />
      </div>
      <ButtonPrimary />
      <ButtonPrimary
        className={classes.buttonPrimary}
        text={{
          setLocationAutomatically: (
            <div className={classes.setLocationAutomatically}>
              <div className={classes.textBlock}>Set location</div>
              <div className={classes.textBlock2}>Manually</div>
            </div>
          ),
        }}
      />
      <div className={classes.search}></div>
      <div className={classes.rectangle504}></div>
      <div className={classes.searchForYourAddress}>search for your address .. </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon5} />
      </div>
      <div className={classes.arrow4}>
        <Arrow4Icon className={classes.icon6} />
      </div>
      <div className={classes.explore}>Explore</div>
    </div>
  );
});
