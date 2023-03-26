import { memo, SVGProps } from 'react';

const EcliseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={14.0106} cy={10.5657} rx={14.0106} ry={10.5657} stroke='#0D3C06' strokeWidth={2} />
    <ellipse cx={14.3735} cy={10.5656} rx={8.17285} ry={6.16331} fill='#0D3C06' stroke='#0D3C06' strokeWidth={2} />
  </svg>
);

const Memo = memo(EcliseIcon);
export { Memo as EcliseIcon };
