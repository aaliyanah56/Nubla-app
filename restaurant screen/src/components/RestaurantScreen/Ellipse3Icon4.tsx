import { memo, SVGProps } from 'react';

const Ellipse3Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={7} cy={6.54356} rx={7} ry={6.33865} fill='#0D3C06' stroke='#0D3C06' strokeWidth={2} />
  </svg>
);

const Memo = memo(Ellipse3Icon4);
export { Memo as Ellipse3Icon4 };
