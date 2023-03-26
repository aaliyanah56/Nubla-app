import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonPrimary.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    setLocationAutomatically?: ReactNode;
  };
}
/* @figmaId 3:69 */
export const ButtonPrimary: FC<Props> = memo(function ButtonPrimary(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.setLocationAutomatically != null ? (
        props.text?.setLocationAutomatically
      ) : (
        <div className={classes.setLocationAutomatically}>Set Location Automatically</div>
      )}
    </button>
  );
});
