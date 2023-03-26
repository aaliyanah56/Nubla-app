import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.333301 9.06202C0.333301 7.80491 1.11708 6.68112 2.29678 6.24677L17 0.833325L31.7032 6.24677C32.8829 6.68112 33.6666 7.80491 33.6666 9.06202V16.6667C33.6666 18.0474 32.5473 19.1667 31.1666 19.1667H23C22.4477 19.1667 22 18.7189 22 18.1667V13.4167C22 13.1405 21.7761 12.9167 21.5 12.9167H12.5C12.2238 12.9167 12 13.1405 12 13.4167V18.1667C12 18.7189 11.5523 19.1667 11 19.1667H2.8333C1.45259 19.1667 0.333301 18.0474 0.333301 16.6667V9.06202Z'
      stroke='black'
      strokeWidth={1.74081}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
