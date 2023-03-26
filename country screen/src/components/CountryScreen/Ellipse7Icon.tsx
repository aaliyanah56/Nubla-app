import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={36.715} cy={40} rx={36.715} ry={40} fill='white' />
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
