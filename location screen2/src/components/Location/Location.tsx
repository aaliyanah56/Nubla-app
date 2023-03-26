import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow4Icon } from './Arrow4Icon';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import classes from './Location.module.css';
import { LocationArrowIcon } from './LocationArrowIcon';
import { MapMarkerAltIcon } from './MapMarkerAltIcon';
import { Rectangle503Icon } from './Rectangle503Icon';
import { RightSideIcon } from './RightSideIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 55:124 */
export const Location: FC<Props> = memo(function Location(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.search}></div>
      <div className={classes.rectangle504}></div>
      <div className={classes.searchForYourAddress}>search for your address .. </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon3} />
      </div>
      <div className={classes.arrow4}>
        <Arrow4Icon className={classes.icon4} />
      </div>
      <div className={classes.thomasKinto6MsMKWzJWKcUnsplash}></div>
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
      <div className={classes.locationArrow}>
        <LocationArrowIcon className={classes.icon5} />
      </div>
      <div className={classes.explore}>Explore</div>
      <ButtonPrimary
        className={classes.buttonPrimary}
        text={{
          setLocationAutomatically: (
            <div className={classes.setLocationAutomatically}>Setall Locatio automatically</div>
          ),
        }}
      />
      <ButtonPrimary
        className={classes.buttonPrimary2}
        text={{
          setLocationAutomatically: (
            <div className={classes.setLocationAutomatically2}>
              <div className={classes.textBlock}>Set location</div>
              <div className={classes.textBlock2}>Manually</div>
            </div>
          ),
        }}
      />
      <div className={classes.rectangle503}>
        <Rectangle503Icon className={classes.icon6} />
      </div>
      <div className={classes.allowNublaToHaveAccessLocation}>Allow Nubla to have access location on your devive</div>
      <div className={classes.whileUsingTheApp}>while using the app</div>
      <div className={classes.onlyThisTime}>only this time</div>
      <div className={classes.donTAllow}>don’t allow</div>
      <div className={classes.mapMarkerAlt}>
        <MapMarkerAltIcon className={classes.icon7} />
      </div>
    </div>
  );
});
