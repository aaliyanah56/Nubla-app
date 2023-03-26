import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import classes from './HelpScreen.module.css';
import { IOSStatusBarBlack } from './IOSStatusBarBlack/IOSStatusBarBlack';
import { LeftSideIcon } from './LeftSideIcon';
import { RightSideIcon } from './RightSideIcon';

interface Props {
  className?: string;
}
/* @figmaId 139:543 */
export const HelpScreen: FC<Props> = memo(function HelpScreen(props = {}) {
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
      <div className={classes.help}>Help</div>
      <div className={classes.arrowLeft}>
        <ArrowLeftIcon className={classes.icon3} />
      </div>
      <div className={classes.ifYouCreateYourOwnAccountWithN}>
        <div className={classes.textBlock}>if you create your own account with NUbla using</div>
        <div className={classes.textBlock2}>the same phone number you placedd your guest</div>
        <div className={classes.textBlock3}>order with our system will automatically connect</div>
        <div className={classes.textBlock4}>all your current and previvious order s you placed</div>
        <div className={classes.textBlock5}>usingthat phone number, and we will be able to</div>
        <div className={classes.textBlock6}>help and support you instantly</div>
      </div>
      <div className={classes.youNeedANublaAccountSoWeCanHel}>
        <div className={classes.textBlock7}>You need a Nubla account </div>
        <div className={classes.textBlock8}>so we can help </div>
      </div>
      <div className={classes.weNoticedThatYouAreAGuestUserA}>
        <div className={classes.textBlock9}>We noticed that you are a guest user, and as musch as</div>
        <div className={classes.textBlock10}>we are happy with your visit and order, we need you </div>
        <div className={classes.textBlock11}>to register to create your own account with Nubla</div>
        <div className={classes.textBlock12}>so we can serve you better</div>
      </div>
      <div className={classes.afterAFewEasyResistrationSteps}>
        <div className={classes.textBlock13}>After a few easy resistration steps, you will be able to</div>
        <div className={classes.textBlock14}>unlock the full potential of your account by brnrfiting</div>
        <div className={classes.textBlock15}>from all the discounts and promotion we offer, enjoy</div>
        <div className={classes.textBlock16}>our loyality and subscription programs, as well as</div>
        <div className={classes.textBlock17}>enjoying the best experience we can offer you</div>
      </div>
      <div className={classes.loginBtn}>
        <div className={classes.bg}></div>
        <div className={classes.login}>Login</div>
      </div>
    </div>
  );
});
