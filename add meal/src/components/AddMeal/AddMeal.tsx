import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AddMeal.module.css';
import { AngleDownIcon } from './AngleDownIcon';
import { AngleLeftIcon } from './AngleLeftIcon';
import { AngleRightIcon } from './AngleRightIcon';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1Icon2 } from './Ellipse1Icon2';
import { Ellipse1Icon3 } from './Ellipse1Icon3';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse2Icon2 } from './Ellipse2Icon2';
import { Ellipse2Icon3 } from './Ellipse2Icon3';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Ellipse3Icon2 } from './Ellipse3Icon2';
import { Ellipse3Icon3 } from './Ellipse3Icon3';
import { FooterIcon } from './FooterIcon';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { MinusSquareIcon } from './MinusSquareIcon';
import { PlusSquareIcon } from './PlusSquareIcon';
import { Rectangle5Icon } from './Rectangle5Icon';
import { RightSideIcon } from './RightSideIcon';
import { UserAltIcon } from './UserAltIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';

interface Props {
  className?: string;
}
/* @figmaId 48:166 */
export const AddMeal: FC<Props> = memo(function AddMeal(props = {}) {
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
      <div className={classes.rectangle3}></div>
      <div className={classes._3Items}>3 items</div>
      <div className={classes._370}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>$</span>
          <span className={classes.label2}> </span>
          <span className={classes.label3}>37</span>
          <span className={classes.label4}>.00</span>
        </p>
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
      <div className={classes.plusSquare}>
        <PlusSquareIcon className={classes.icon5} />
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.minusSquare}>
        <MinusSquareIcon className={classes.icon6} />
      </div>
      <div className={classes._3}>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>3</div>
      </div>
      <div className={classes.orderedItems}>ordered items</div>
      <div className={classes.angleLeft}>
        <AngleLeftIcon className={classes.icon7} />
      </div>
      <div className={classes.deliveringTo}>Delivering to</div>
      <div className={classes.streetName}>Street name ....</div>
      <div className={classes.angleDown}>
        <AngleDownIcon className={classes.icon8} />
      </div>
      <div className={classes.angleRight}>
        <AngleRightIcon className={classes.icon9} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon11} />
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon12} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon13} />
      </div>
      <div className={classes.shakes}>shakes</div>
      <div className={classes._120}>$12.00</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon14} />
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.ellipse12}>
        <Ellipse1Icon2 className={classes.icon15} />
      </div>
      <div className={classes.ellipse22}>
        <Ellipse2Icon2 className={classes.icon16} />
      </div>
      <div className={classes.ellipse32}>
        <Ellipse3Icon2 className={classes.icon17} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon18} />
      </div>
      <div className={classes.friedChicken}>Fried chicken</div>
      <div className={classes._150}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label5}>$</span>
          <span className={classes.label6}> </span>
          <span className={classes.label7}>15.00</span>
        </p>
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon19} />
      </div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon20} />
      </div>
      <div className={classes._10OFF}>10% OFF</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.ellipse13}>
        <Ellipse1Icon3 className={classes.icon21} />
      </div>
      <div className={classes.ellipse23}>
        <Ellipse2Icon3 className={classes.icon22} />
      </div>
      <div className={classes.ellipse33}>
        <Ellipse3Icon3 className={classes.icon23} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon24} />
      </div>
      <div className={classes.mineralWater}>Mineral water</div>
      <div className={classes._50}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label8}>$</span>
          <span className={classes.label9}> 5</span>
          <span className={classes.label10}>.00</span>
        </p>
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon25} />
      </div>
      <div className={classes.footer}>
        <FooterIcon className={classes.icon26} />
      </div>
      <div className={classes.account}>account</div>
      <div className={classes.userAlt}>
        <UserAltIcon className={classes.icon27} />
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
