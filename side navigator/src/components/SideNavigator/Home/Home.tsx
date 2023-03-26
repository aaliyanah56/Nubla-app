import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Home.module.css';
import { HomeIcon } from './HomeIcon';

interface Props {
  className?: string;
  classes?: {
    home?: string;
    root?: string;
  };
  swap?: {
    home?: ReactNode;
  };
  hide?: {
    home?: boolean;
  };
}
/* @figmaId 6:231 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.home && (
        <div className={`${props.classes?.home || ''} ${classes.home}`}>
          {props.swap?.home || <HomeIcon className={classes.icon} />}
        </div>
      )}
    </div>
  );
});
