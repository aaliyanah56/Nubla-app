import { memo, SVGProps } from 'react';

const StarIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.8794 2.03971L12.047 6.8404L3.47263 7.61272C1.93499 7.7505 1.31876 8.92167 2.43384 9.59246L8.63723 13.3271L7.17002 18.6028C6.90592 19.5564 8.53159 20.2707 9.89317 19.8248L17.5638 17.3338L25.2344 19.8248C26.596 20.2671 28.2216 19.5564 27.9575 18.6028L26.4903 13.3271L32.6937 9.59246C33.8088 8.92167 33.1926 7.7505 31.6549 7.61272L23.0805 6.8404L19.2481 2.03971C18.5615 1.18399 16.5719 1.17312 15.8794 2.03971Z'
      fill='#FFDB59'
    />
  </svg>
);

const Memo = memo(StarIcon4);
export { Memo as StarIcon4 };
