import { memo, SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_455_484)'>
      <path
        d='M8.22108 2.16146L6.26904 7.90799L1.9016 8.83247C1.11839 8.9974 0.804513 10.3993 1.37249 11.2023L4.53223 15.6727L3.78489 21.9878C3.65037 23.1293 4.47842 23.9844 5.17195 23.4505L9.07902 20.4688L12.9861 23.4505C13.6796 23.98 14.5077 23.1293 14.3732 21.9878L13.6258 15.6727L16.7856 11.2023C17.3535 10.3993 17.0396 8.9974 16.2564 8.83247L11.889 7.90799L9.93696 2.16146C9.58721 1.13715 8.57382 1.12413 8.22108 2.16146Z'
        fill='#0D3C06'
      />
    </g>
    <defs>
      <clipPath id='clip0_455_484'>
        <rect width={17.2186} height={25} fill='white' transform='translate(0.469707)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(StarIcon);
export { Memo as StarIcon };
