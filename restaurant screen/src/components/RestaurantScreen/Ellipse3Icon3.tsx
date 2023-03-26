import { memo, SVGProps } from 'react';

const Ellipse3Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={7} cy={6.89381} rx={7} ry={6.16372} fill='#0D3C06' stroke='#0D3C06' strokeWidth={2} />
  </svg>
);

const Memo = memo(Ellipse3Icon3);
export { Memo as Ellipse3Icon3 };
