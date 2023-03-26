import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AngleDoubleDownIcon } from './AngleDoubleDownIcon';
import { AngleDownIcon } from './AngleDownIcon';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import classes from './FoodScreen.module.css';
import { FooterIcon } from './FooterIcon';
import { HamburgerIcon } from './HamburgerIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';
import { SearchIcon } from './SearchIcon';
import { StarIcon } from './StarIcon';
import { StarIcon2 } from './StarIcon2';
import { StarIcon3 } from './StarIcon3';
import { StarIcon4 } from './StarIcon4';
import { UserAltIcon } from './UserAltIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';

interface Props {
  className?: string;
}
/* @figmaId 71:228 */
export const FoodScreen: FC<Props> = memo(function FoodScreen(props = {}) {
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
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
      <div className={classes.deliveringTo}>Delivering to</div>
      <div className={classes.streetName}>Street name ....</div>
      <div className={classes.angleDown}>
        <AngleDownIcon className={classes.icon5} />
      </div>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle507}></div>
      <div className={classes.filters}>filters</div>
      <div className={classes.rectangle508}></div>
      <div className={classes.cuisines}>cuisines</div>
      <div className={classes.rectangle509}></div>
      <div className={classes.search}>search</div>
      <div className={classes.hamburger}>
        <HamburgerIcon className={classes.icon7} />
      </div>
      <div className={classes.search2}>
        <SearchIcon className={classes.icon8} />
      </div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon9} />
      </div>
      <div className={classes.rectangle516}></div>
      <div className={classes.rectangle512}></div>
      <div className={classes.desert}>desert</div>
      <div className={classes.rectangle514}></div>
      <div className={classes.rectangle510}></div>
      <div className={classes.superSave}>super save</div>
      <div className={classes.rectangle515}></div>
      <div className={classes.rectangle511}></div>
      <div className={classes.coffeeJoy}>coffee joy</div>
      <div className={classes.more}>more...</div>
      <div className={classes.allRestaurant}>All restaurant</div>
      <div className={classes.more2}>more....</div>
      <div className={classes.rectangle517}></div>
      <div className={classes.harvest1540x4801}></div>
      <div className={classes.casualDining}>casual dining</div>
      <div className={classes.harvestAtTradeMark}>harvest at trade mark</div>
      <div className={classes.star}>
        <StarIcon className={classes.icon10} />
      </div>
      <div className={classes._41100}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>4.1</span>
          <span className={classes.label2}>(100+)</span>
        </p>
      </div>
      <div className={classes.moreInfo}>more info.....</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon11} />
      </div>
      <div className={classes.rectangle5172}></div>
      <div className={classes.storyAkemi1}></div>
      <div className={classes.casualDining2}>casual dining</div>
      <div className={classes.akemi}>Akemi</div>
      <div className={classes.star2}>
        <StarIcon2 className={classes.icon12} />
      </div>
      <div className={classes._411002}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>4.1</span>
          <span className={classes.label4}>(100+)</span>
        </p>
      </div>
      <div className={classes.moreInfo2}>more info.....</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon13} />
      </div>
      <div className={classes.mercado1540x4801}></div>
      <div className={classes.casualDining3}>casual dining</div>
      <div className={classes.mercado}>Mercado</div>
      <div className={classes.star3}>
        <StarIcon3 className={classes.icon14} />
      </div>
      <div className={classes._411003}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>4.1</span>
          <span className={classes.label6}>(100+)</span>
        </p>
      </div>
      <div className={classes.moreInfo3}>more info.....</div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon15} />
      </div>
      <div className={classes.casualDining4}>casual dining</div>
      <div className={classes.sevenSeafoodGrill}>Seven seafood &amp;Grill</div>
      <div className={classes.star4}>
        <StarIcon4 className={classes.icon16} />
      </div>
      <div className={classes._411004}>
        <p className={classes.labelWrapper4}>
          <span className={classes.label7}>4.1</span>
          <span className={classes.label8}>(100+)</span>
        </p>
      </div>
      <div className={classes.moreInfo4}>more info.....</div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon17} />
      </div>
      <div className={classes.sevenSeafoodAndGrill540x4801}></div>
      <div className={classes.angleDoubleDown}>
        <AngleDoubleDownIcon className={classes.icon18} />
      </div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon19} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon20} />
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
