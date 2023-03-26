import { memo, SVGProps } from 'react';

const Ellipse2Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={12} cy={10.8938} rx={12} ry={10.5664} stroke='#0D3C06' strokeWidth={2} />
  </svg>
);

const Memo = memo(Ellipse2Icon3);
export { Memo as Ellipse2Icon3 };
