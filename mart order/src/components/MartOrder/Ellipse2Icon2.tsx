import { memo, SVGProps } from 'react';

const Ellipse2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={12} cy={11.5436} rx={12} ry={10.8663} stroke='#0D3C06' strokeWidth={2} />
  </svg>
);

const Memo = memo(Ellipse2Icon2);
export { Memo as Ellipse2Icon2 };
