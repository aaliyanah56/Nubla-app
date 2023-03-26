import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import { BlackberryIcon } from './BlackberryIcon';
import { FooterIcon } from './FooterIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import classes from './NublaMart.module.css';
import { SearchIcon } from './SearchIcon';
import { UserAltIcon } from './UserAltIcon';

interface Props {
  className?: string;
}
/* @figmaId 60:403 */
export const NublaMart: FC<Props> = memo(function NublaMart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IOSStatusBarBlack className={classes.iOSStatusBarBlack} />
      <div className={classes.nublaMart}>nubla mart</div>
      <div className={classes.rectangle490}></div>
      <div className={classes.anhNguyenKcAC3f_3FEUnsplashRem}></div>
      <div className={classes.cholateDelights}>cholate delights</div>
      <div className={classes.rectangle4902}></div>
      <div className={classes.anhNguyenKcAC3f_3FEUnsplashRem2}></div>
      <div className={classes.newArrivals}>new arrivals</div>
      <div className={classes.chips}>Chips</div>
      <div className={classes.favouriteSnacks}>Favourite snacks</div>
      <div className={classes.rectangle499}></div>
      <div className={classes.rectangle500}></div>
      <div className={classes.rectangle501}></div>
      <div className={classes.rectangle502}></div>
      <div className={classes.chocolate}>chocolate</div>
      <div className={classes.sweets}>sweets</div>
      <div className={classes.iceCream}>ice cream</div>
      <div className={classes.rectangle518}></div>
      <div className={classes.searchItems}>search items</div>
      <div className={classes.search}>
        <SearchIcon className={classes.icon2} />
      </div>
      <div className={classes.rectangle522}></div>
      <div className={classes.rectangle519}></div>
      <div className={classes._2030MinDeliveryTime}>
        <div className={classes.textBlock}>20-30 min</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>delivery time</span>
          </p>
        </div>
      </div>
      <div className={classes.rectangle520}></div>
      <div className={classes.uSD450DeliveryFee}>
        <div className={classes.textBlock3}>USD 4.50</div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>Delivery fee</span>
          </p>
        </div>
      </div>
      <div className={classes.rectangle521}></div>
      <div className={classes.uSD300MiniOrder}>
        <div className={classes.textBlock5}>USD 30.00</div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label3}>mini order</span>
          </p>
        </div>
      </div>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon3} />
      </div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon4} />
      </div>
      <div className={classes.frame1}>
        <div className={classes.meat}>meat</div>
      </div>
      <div className={classes.water}>water</div>
      <div className={classes.fruitsVegies}>fruits &amp; vegies</div>
      <div className={classes.rectangle491}></div>
      <div className={classes.rectangle492}></div>
      <div className={classes.rectangle493}></div>
      <div className={classes.rectangle494}></div>
      <div className={classes.cheese}>cheese</div>
      <div className={classes.rectangle495}></div>
      <div className={classes.rectangle496}></div>
      <div className={classes.rectangle497}></div>
      <div className={classes.rectangle498}></div>
      <div className={classes.homeEssential}>
        <div className={classes.textBlock7}>home </div>
        <div className={classes.textBlock8}>essential</div>
      </div>
      <div className={classes.more}>more</div>
      <div className={classes.electonics}>electonics</div>
      <div className={classes.bevarages}>bevarages</div>
      <div className={classes.blackberry}>
        <BlackberryIcon className={classes.icon5} />
      </div>
      <div className={classes.shopByCategories}>shop by categories</div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon6} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon7} />
      </div>
      <div className={classes.home3}>home</div>
      <Home
        className={classes.home2}
        classes={{ home: classes.home }}
        swap={{
          home: (
            <div className={classes.home}>
              <HomeIcon className={classes.icon} />
            </div>
          ),
        }}
      />
    </div>
  );
});
