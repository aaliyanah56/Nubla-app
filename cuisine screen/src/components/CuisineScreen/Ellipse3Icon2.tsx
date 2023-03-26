import { memo, SVGProps } from 'react';

const Ellipse3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse
      cx={7}
      cy={6.16372}
      rx={7}
      ry={6.16372}
      fill='#0D3C06'
      fillOpacity={0.56}
      stroke='#0D3C06'
      strokeOpacity={0.56}
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(Ellipse3Icon2);
export { Memo as Ellipse3Icon2 };
