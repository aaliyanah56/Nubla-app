import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 92 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={45.509} cy={40} rx={45.509} ry={40} fill='white' />
  </svg>
);

const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
