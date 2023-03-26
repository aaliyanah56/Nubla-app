import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PopularRestaurantNearby.module.css';

interface Props {
  className?: string;
}
/* @figmaId 27:117 */
export const PopularRestaurantNearby: FC<Props> = memo(function PopularRestaurantNearby(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.popularRestaurantNearby}> popular restaurant nearby</div>
    </div>
  );
});
