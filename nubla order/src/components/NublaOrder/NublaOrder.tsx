import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import { FooterIcon } from './FooterIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import classes from './NublaOrder.module.css';
import { PlusSquareIcon } from './PlusSquareIcon';
import { PlusSquareIcon2 } from './PlusSquareIcon2';
import { RightSideIcon } from './RightSideIcon';
import { SearchIcon } from './SearchIcon';
import { UserAltIcon } from './UserAltIcon';

interface Props {
  className?: string;
}
/* @figmaId 92:414 */
export const NublaOrder: FC<Props> = memo(function NublaOrder(props = {}) {
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
      <div className={classes.search}></div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon4} />
      </div>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon5} />
      </div>
      <div className={classes.rectangle518}></div>
      <div className={classes.searchItems}>search items</div>
      <div className={classes.search2}>
        <SearchIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle526}></div>
      <div className={classes.rectangle524}></div>
      <div className={classes.chocolateDelights}>chocolate delights</div>
      <div className={classes.rectangle523}></div>
      <div className={classes.plusSquare}>
        <PlusSquareIcon className={classes.icon7} />
      </div>
      <div className={classes.snickersBarUSD395}>
        <div className={classes.textBlock}>snickers bar</div>
        <div className={classes.textBlock2}>USD 3.95</div>
      </div>
      <div className={classes.rectangle525}></div>
      <div className={classes.plusSquare2}>
        <PlusSquareIcon2 className={classes.icon8} />
      </div>
      <div className={classes.reeseButterUSD1695}>
        <div className={classes.textBlock3}>Reese butter</div>
        <div className={classes.textBlock4}>USD 16.95</div>
      </div>
      <div className={classes.rectangle527}></div>
      <div className={classes.bevarages}>bevarages</div>
      <div className={classes.oatMilk}>oat milk</div>
      <div className={classes.rectangle528}></div>
      <div className={classes.pepsi}>pepsi</div>
      <div className={classes.rectangle529}></div>
      <div className={classes.rectangle530}></div>
      <div className={classes.cola}>cola</div>
      <div className={classes.dew}>dew</div>
      <div className={classes.rectangle5272}></div>
      <div className={classes.newArrivals}>new arrivals</div>
      <div className={classes.donuts}>Donuts</div>
      <div className={classes.rectangle5282}></div>
      <div className={classes.cakes}>cakes</div>
      <div className={classes.rectangle5292}></div>
      <div className={classes.rectangle5302}></div>
      <div className={classes.latee}>latee</div>
      <div className={classes.caffee}>caffee</div>
      <div className={classes.rectangle5273}></div>
      <div className={classes.moreCategories}>more categories</div>
      <div className={classes.electronics}>electronics</div>
      <div className={classes.rectangle5283}></div>
      <div className={classes.furniture}>furniture</div>
      <div className={classes.rectangle5293}></div>
      <div className={classes.rectangle5303}></div>
      <div className={classes.biscoff}>biscoff</div>
      <div className={classes.sweets}>sweets</div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon9} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon10} />
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
