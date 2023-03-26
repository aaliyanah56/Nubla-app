import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddIcon } from './AddIcon';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import { ClockIcon } from './ClockIcon';
import { EcliseIcon } from './EcliseIcon';
import { FooterIcon } from './FooterIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { MapMarkerAltIcon } from './MapMarkerAltIcon';
import classes from './MartScreen.module.css';
import { RightSideIcon } from './RightSideIcon';
import { UserAltIcon } from './UserAltIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 99:764 */
export const MartScreen: FC<Props> = memo(function MartScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle6}></div>
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
      <div className={classes.rectangle3}></div>
      <div className={classes._1Items}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>1</span>
          <span className={classes.label2}> </span>
          <span className={classes.label3}>items</span>
        </p>
      </div>
      <div className={classes._200}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label4}>$</span>
          <span className={classes.label5}> </span>
          <span className={classes.label6}>20</span>
          <span className={classes.label7}>.00</span>
        </p>
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
      <div className={classes.recipe}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label8}>Recipe</span>
          </p>
        </div>
      </div>
      <div className={classes.loremIpsumDolorSitAmetMore}>Lorem ipsum dolor sit amet, more .... </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.location}>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
        <div className={classes.textBlock4}>Location</div>
      </div>
      <div className={classes.deliveryTime}>delivery time</div>
      <div className={classes.loremIpsumDolorSit}>Lorem ipsum dolor sit </div>
      <div className={classes._30min}>30min</div>
      <div className={classes.mapMarkerAlt}>
        <MapMarkerAltIcon className={classes.icon5} />
      </div>
      <div className={classes.clock}>
        <ClockIcon className={classes.icon6} />
      </div>
      <div className={classes.eclise}>
        <EcliseIcon className={classes.icon7} />
      </div>
      <div className={classes.donuts}>donuts</div>
      <div className={classes._2002}>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
        <div className={classes.textBlock6}>$ 20.00</div>
      </div>
      <div className={classes.add}>
        <AddIcon className={classes.icon8} />
      </div>
      <div className={classes._3}>3</div>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon9} />
      </div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon10} />
      </div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon11} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon12} />
      </div>
      <div className={classes.home3}>home</div>
      <Home
        className={classes.home2}
        classes={{ home: classes.home }}
        swap={{
          home: (
            <div className={classes.home}>
              <HomeIcon className={classes.icon3} />
            </div>
          ),
        }}
      />
    </div>
  );
});
