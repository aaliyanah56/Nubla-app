import { memo, SVGProps } from 'react';

const StarIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.8945 2.03971L11.2282 6.8404L3.02537 7.61272C1.55436 7.7505 0.964826 8.92167 2.03159 9.59246L7.96618 13.3271L6.56254 18.6028C6.30989 19.5564 7.86512 20.2707 9.1677 19.8248L16.5059 17.3338L23.8442 19.8248C25.1467 20.2671 26.702 19.5564 26.4493 18.6028L25.0457 13.3271L30.9803 9.59246C32.047 8.92167 31.4575 7.7505 29.9865 7.61272L21.7836 6.8404L18.1173 2.03971C17.4604 1.18399 15.5571 1.17312 14.8945 2.03971Z'
      fill='#FFDB59'
    />
  </svg>
);

const Memo = memo(StarIcon2);
export { Memo as StarIcon2 };
