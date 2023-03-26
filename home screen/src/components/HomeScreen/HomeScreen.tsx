import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AngleDownIcon } from './AngleDownIcon';
import { BarsIcon } from './BarsIcon';
import { BicycleIcon } from './BicycleIcon';
import { BirthdayCakeIcon } from './BirthdayCakeIcon';
import { FooterIcon } from './FooterIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import classes from './HomeScreen.module.css';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { PopularRestaurantNearby } from './PopularRestaurantNearby/PopularRestaurantNearby';
import { StarIcon } from './StarIcon';
import { StarIcon2 } from './StarIcon2';
import { UserAltIcon } from './UserAltIcon';

interface Props {
  className?: string;
}
/* @figmaId 3:85 */
export const HomeScreen: FC<Props> = memo(function HomeScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.topPicks}>Top picks</div>
      <div className={classes.rectangle495}></div>
      <div className={classes.nEW}>NEW</div>
      <div className={classes.rectangle496}></div>
      <div className={classes.rectangle497}></div>
      <div className={classes.rectangle498}></div>
      <div className={classes.star}>
        <StarIcon className={classes.icon2} />
      </div>
      <div className={classes.star2}>
        <StarIcon2 className={classes.icon3} />
      </div>
      <div className={classes.bicycle}>
        <BicycleIcon className={classes.icon4} />
      </div>
      <div className={classes.freeDelivey}>
        <div className={classes.textBlock}>free</div>
        <div className={classes.textBlock2}>delivey</div>
      </div>
      <div className={classes.birthdayCake}>
        <BirthdayCakeIcon className={classes.icon5} />
      </div>
      <div className={classes.desert}>desert</div>
      <div className={classes.popularBrands}>
        <div className={classes.textBlock3}>popular</div>
        <div className={classes.textBlock4}>brands</div>
      </div>
      <div className={classes.newlyAdded}>
        <div className={classes.textBlock5}>newly</div>
        <div className={classes.textBlock6}>added</div>
      </div>
      <div className={classes.kFC20min}>
        <div className={classes.textBlock7}>KFC</div>
        <div className={classes.textBlock8}>20min</div>
      </div>
      <PopularRestaurantNearby />
      <div className={classes.rectangle499}></div>
      <div className={classes.rectangle500}></div>
      <div className={classes.rectangle501}></div>
      <div className={classes.rectangle502}></div>
      <div className={classes.starBucks30min}>
        <div className={classes.textBlock9}>Star Bucks</div>
        <div className={classes.textBlock10}>30min</div>
      </div>
      <div className={classes.pizzahut45min}>
        <div className={classes.textBlock11}>pizzahut</div>
        <div className={classes.textBlock12}>45min</div>
      </div>
      <div className={classes.mcDonald50min}>
        <div className={classes.textBlock13}> McDonald</div>
        <div className={classes.textBlock14}>50min</div>
      </div>
      <div className={classes.healthWellness}>
        <div className={classes.textBlock15}>Health &amp;</div>
        <div className={classes.textBlock16}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>wellness</span>
            <span className={classes.label2}> </span>
          </p>
        </div>
      </div>
      <div className={classes.coffee}>coffee</div>
      <div className={classes.food}>food</div>
      <div className={classes.anhNguyenKcAC3f_3FEUnsplashRem}></div>
      <div className={classes.anhNguyenKcAC3f_3FEUnsplashRem2}></div>
      <div className={classes.nublaMart}>Nubla Mart</div>
      <div className={classes.groceries}>Groceries</div>
      <div className={classes.rectangle491}></div>
      <div className={classes.rectangle492}></div>
      <div className={classes.rectangle493}></div>
      <div className={classes.rectangle494}></div>
      <div className={classes.moreshops}>moreshops</div>
      <div className={classes.rectangle505}></div>
      <div className={classes.flowers}>flowers</div>
      <div className={classes.heyGoodAfternoon}>Hey,good afternoon</div>
      <div className={classes.rectangle506}></div>
      <div className={classes.heyThere}>Hey there!!</div>
      <IOSStatusBarBlack />
      <div className={classes.deliveringTo}>Delivering to</div>
      <div className={classes.streetName}>Street name ....</div>
      <div className={classes.angleDown}>
        <AngleDownIcon className={classes.icon6} />
      </div>
      <div className={classes.bars}>
        <BarsIcon className={classes.icon7} />
      </div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon8} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon9} />
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
