import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AngleDownIcon } from './AngleDownIcon';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1Icon2 } from './Ellipse1Icon2';
import { Ellipse1Icon3 } from './Ellipse1Icon3';
import { Ellipse1Icon4 } from './Ellipse1Icon4';
import { Ellipse1Icon5 } from './Ellipse1Icon5';
import { Ellipse1Icon6 } from './Ellipse1Icon6';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse2Icon2 } from './Ellipse2Icon2';
import { Ellipse2Icon3 } from './Ellipse2Icon3';
import { Ellipse2Icon4 } from './Ellipse2Icon4';
import { Ellipse2Icon5 } from './Ellipse2Icon5';
import { Ellipse2Icon6 } from './Ellipse2Icon6';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Ellipse3Icon2 } from './Ellipse3Icon2';
import { Ellipse3Icon3 } from './Ellipse3Icon3';
import { Ellipse3Icon4 } from './Ellipse3Icon4';
import { Ellipse3Icon5 } from './Ellipse3Icon5';
import { Ellipse3Icon6 } from './Ellipse3Icon6';
import { EllipsisVIcon } from './EllipsisVIcon';
import { FooterIcon } from './FooterIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { MortarPestleIcon } from './MortarPestleIcon';
import { Rectangle5Icon } from './Rectangle5Icon';
import classes from './RestaurantScreen.module.css';
import { RightSideIcon } from './RightSideIcon';
import { SearchIcon } from './SearchIcon';
import { UserAltIcon } from './UserAltIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import { VectorIcon9 } from './VectorIcon9';
import { VectorIcon10 } from './VectorIcon10';
import { VectorIcon11 } from './VectorIcon11';
import { VectorIcon12 } from './VectorIcon12';
import { VectorIcon13 } from './VectorIcon13';

interface Props {
  className?: string;
}
/* @figmaId 6:135 */
export const RestaurantScreen: FC<Props> = memo(function RestaurantScreen(props = {}) {
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
      <div className={classes.rectangle2}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon6} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon7} />
      </div>
      <div className={classes.vegetables}>Vegetables</div>
      <div className={classes._100}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>$</span>
          <span className={classes.label2}> </span>
          <span className={classes.label3}>10.00</span>
        </p>
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon8} />
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.ellipse12}>
        <Ellipse1Icon2 className={classes.icon9} />
      </div>
      <div className={classes.ellipse22}>
        <Ellipse2Icon2 className={classes.icon10} />
      </div>
      <div className={classes.ellipse32}>
        <Ellipse3Icon2 className={classes.icon11} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon12} />
      </div>
      <div className={classes.mineralWater}>Mineral water</div>
      <div className={classes._50}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label4}>$</span>
          <span className={classes.label5}> 5</span>
          <span className={classes.label6}>.00</span>
        </p>
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon13} />
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.ellipse13}>
        <Ellipse1Icon3 className={classes.icon14} />
      </div>
      <div className={classes.ellipse23}>
        <Ellipse2Icon3 className={classes.icon15} />
      </div>
      <div className={classes.ellipse33}>
        <Ellipse3Icon3 className={classes.icon16} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon17} />
      </div>
      <div className={classes.fRUITS}>FRUITS</div>
      <div className={classes._80}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label7}>$</span>
          <span className={classes.label8}> 8</span>
          <span className={classes.label9}>.00</span>
        </p>
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon18} />
      </div>
      <div className={classes.rectangle24}></div>
      <div className={classes.ellipse14}>
        <Ellipse1Icon4 className={classes.icon19} />
      </div>
      <div className={classes.ellipse24}>
        <Ellipse2Icon4 className={classes.icon20} />
      </div>
      <div className={classes.ellipse34}>
        <Ellipse3Icon4 className={classes.icon21} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon22} />
      </div>
      <div className={classes.friedChicken}>Fried chicken</div>
      <div className={classes._150}>
        <p className={classes.labelWrapper4}>
          <span className={classes.label10}>$</span>
          <span className={classes.label11}> </span>
          <span className={classes.label12}>15.00</span>
        </p>
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon23} />
      </div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon24} />
      </div>
      <div className={classes._10OFF}>10% OFF</div>
      <div className={classes.vector9}>
        <VectorIcon9 className={classes.icon25} />
      </div>
      <div className={classes.deliveringTo}>Delivering to</div>
      <div className={classes.streetName}>Street name ....</div>
      <div className={classes.angleDown}>
        <AngleDownIcon className={classes.icon26} />
      </div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon27} />
      </div>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon28} />
      </div>
      <div className={classes.rectangle25}></div>
      <div className={classes.ellipse15}>
        <Ellipse1Icon5 className={classes.icon29} />
      </div>
      <div className={classes.ellipse25}>
        <Ellipse2Icon5 className={classes.icon30} />
      </div>
      <div className={classes.ellipse35}>
        <Ellipse3Icon5 className={classes.icon31} />
      </div>
      <div className={classes.vector10}>
        <VectorIcon10 className={classes.icon32} />
      </div>
      <div className={classes.coffee}>Coffee</div>
      <div className={classes._70}>
        <p className={classes.labelWrapper5}>
          <span className={classes.label13}>$</span>
          <span className={classes.label14}> 7</span>
          <span className={classes.label15}>.00</span>
        </p>
      </div>
      <div className={classes.vector11}>
        <VectorIcon11 className={classes.icon33} />
      </div>
      <div className={classes.rectangle26}></div>
      <div className={classes.ellipse16}>
        <Ellipse1Icon6 className={classes.icon34} />
      </div>
      <div className={classes.ellipse26}>
        <Ellipse2Icon6 className={classes.icon35} />
      </div>
      <div className={classes.ellipse36}>
        <Ellipse3Icon6 className={classes.icon36} />
      </div>
      <div className={classes.vector12}>
        <VectorIcon12 className={classes.icon37} />
      </div>
      <div className={classes.shakes}>shakes</div>
      <div className={classes._120}>$12.00</div>
      <div className={classes.vector13}>
        <VectorIcon13 className={classes.icon38} />
      </div>
      <div className={classes.rectangle507}></div>
      <div className={classes.filters}>filters</div>
      <div className={classes.rectangle508}></div>
      <div className={classes.cuisines}>cuisines</div>
      <div className={classes.rectangle509}></div>
      <div className={classes.search2}>search</div>
      <div className={classes.search3}>
        <SearchIcon className={classes.icon39} />
      </div>
      <div className={classes.mortarPestle}>
        <MortarPestleIcon className={classes.icon40} />
      </div>
      <div className={classes.ellipsisV}>
        <EllipsisVIcon className={classes.icon41} />
      </div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon42} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon43} />
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
