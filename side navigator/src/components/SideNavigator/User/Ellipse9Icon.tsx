import { memo, SVGProps } from 'react';

const Ellipse9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={18.1673} cy={17.5202} rx={18.1673} ry={17.5202} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse9Icon);
export { Memo as Ellipse9Icon };
