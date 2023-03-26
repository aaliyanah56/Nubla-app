import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.340951 9.06368C0.340951 7.80575 1.12574 6.68141 2.30652 6.24766L17.0459 0.833325L31.7853 6.24766C32.9661 6.68141 33.7509 7.80575 33.7509 9.06368V16.6667C33.7509 18.0474 32.6316 19.1667 31.2509 19.1667H23.0574C22.5051 19.1667 22.0574 18.7189 22.0574 18.1667V13.4167C22.0574 13.1405 21.8336 12.9167 21.5574 12.9167H12.5344C12.2583 12.9167 12.0344 13.1405 12.0344 13.4167V18.1667C12.0344 18.7189 11.5867 19.1667 11.0344 19.1667H2.84095C1.46024 19.1667 0.340951 18.0474 0.340951 16.6667V9.06368Z'
      stroke='black'
      strokeWidth={1.74081}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
