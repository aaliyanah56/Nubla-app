import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={25.6797} cy={25.1656} rx={25.6679} ry={25.1656} fill='white' stroke='black' strokeWidth={2} />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };
