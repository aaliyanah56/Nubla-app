import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Home } from '../Home/Home';
import { IOSStatusBarBlack } from '../IOSStatusBarBlack/IOSStatusBarBlack';
import { AngleDownIcon } from './AngleDownIcon';
import { BarsIcon } from './BarsIcon';
import { CogIcon } from './CogIcon';
import { Ellipse5Icon } from './Ellipse5Icon';
import { Ellipse9Icon } from './Ellipse9Icon';
import { FileAltIcon } from './FileAltIcon';
import { HandPointRightIcon } from './HandPointRightIcon';
import { InfoIcon } from './InfoIcon';
import { RightSideIcon } from './RightSideIcon';
import classes from './User.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';

interface Props {
  className?: string;
  hide?: {
    home?: boolean;
    home2?: boolean;
    home3?: boolean;
    home4?: boolean;
  };
}
/* @figmaId 134:286 */
export const User: FC<Props> = memo(function User(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle506}></div>
      <div className={classes.heyThere}>Hey there!!</div>
      <IOSStatusBarBlack
        className={classes.iOSStatusBarBlack}
        classes={{ rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.deliveringTo}>Delivering to</div>
      <div className={classes.streetName}>Street name ....</div>
      <div className={classes.angleDown}>
        <AngleDownIcon className={classes.icon2} />
      </div>
      <div className={classes.bars}>
        <BarsIcon className={classes.icon3} />
      </div>
      <div className={classes.rectangle532}></div>
      <div className={classes.hiGuest}>Hi guest</div>
      <div className={classes.line10}></div>
      <div className={classes.homeIcon}>
        <div className={classes.yourOrder}>Your order</div>
        <Home
          className={classes.home}
          hide={{
            home: true,
          }}
        />
        <div className={classes.fileAlt}>
          <FileAltIcon className={classes.icon4} />
        </div>
      </div>
      <div className={classes.signOut}>
        <div className={classes.signOut2}>Sign Out</div>
      </div>
      <div className={classes.info}>
        <div className={classes.getHelp}>Get help</div>
        <div className={classes.handPointRight}>
          <HandPointRightIcon className={classes.icon5} />
        </div>
      </div>
      <div className={classes.homeIcon2}>
        <div className={classes.nublaPay}>Nubla Pay</div>
        <Home
          className={classes.home2}
          hide={{
            home: true,
          }}
        />
        <div className={classes.vector}>
          <VectorIcon className={classes.icon6} />
        </div>
      </div>
      <div className={classes.homeIcon3}>
        <div className={classes.myStore}>My Store</div>
        <Home
          className={classes.home3}
          hide={{
            home: true,
          }}
        />
        <div className={classes.vector2}>
          <VectorIcon2 className={classes.icon7} />
        </div>
      </div>
      <div className={classes.ellipse5}>
        <Ellipse5Icon className={classes.icon8} />
      </div>
      <div className={classes.info2}>
        <div className={classes.settings}>settings</div>
        <div className={classes.cog}>
          <CogIcon className={classes.icon9} />
        </div>
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon10} />
      </div>
      <div className={classes.homeIcon4}>
        <div className={classes.about}>About</div>
        <div className={classes.ellipse9}>
          <Ellipse9Icon className={classes.icon11} />
        </div>
        <div className={classes.info3}>
          <InfoIcon className={classes.icon12} />
        </div>
        <Home
          className={classes.home4}
          hide={{
            home: true,
          }}
        />
      </div>
    </div>
  );
});
