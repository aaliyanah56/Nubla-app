import { memo, SVGProps } from 'react';

const StarIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.3174 2.03969L11.4944 6.84039L2.94091 7.6127C1.40703 7.75049 0.792304 8.92165 1.90466 9.59244L8.09289 13.3271L6.62926 18.6028C6.3658 19.5564 7.98751 20.2707 9.34575 19.8247L16.9976 17.3337L24.6495 19.8247C26.0077 20.2671 27.6294 19.5564 27.366 18.6028L25.9023 13.3271L32.0906 9.59244C33.2029 8.92165 32.5882 7.75049 31.0543 7.6127L22.5009 6.84039L18.6779 2.03969C17.9929 1.18398 16.0082 1.1731 15.3174 2.03969Z'
      fill='#FFDB59'
    />
  </svg>
);

const Memo = memo(StarIcon3);
export { Memo as StarIcon3 };
