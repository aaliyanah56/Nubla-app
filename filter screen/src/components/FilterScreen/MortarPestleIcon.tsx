import { memo, SVGProps } from 'react';

const MortarPestleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_458_730)'>
      <path
        d='M24.4893 3.21496C25.3301 2.32318 25.1001 0.819796 24.0366 0.255831C23.7472 0.102412 23.4232 0.0374785 23.1009 0.068302C22.7786 0.0991256 22.4708 0.224489 22.2119 0.430355L12.2603 8.34658H19.6514L24.4893 3.21496ZM24.2188 10.0038H0.78125C0.349609 10.0038 0 10.3746 0 10.8324V12.4896C0 12.9474 0.349609 13.3182 0.78125 13.3182H1.5625C1.5625 17.5119 4.01367 21.092 7.47705 22.5529C6.854 23.4266 6.4165 24.4587 6.25879 25.5923C6.1875 26.106 6.55371 26.5752 7.04346 26.5752H17.9565C18.4463 26.5752 18.8125 26.106 18.7412 25.5923C18.584 24.4587 18.1465 23.4266 17.5229 22.5529C20.9863 21.092 23.4375 17.5119 23.4375 13.3182H24.2188C24.6504 13.3182 25 12.9474 25 12.4896V10.8324C25 10.3746 24.6504 10.0038 24.2188 10.0038Z'
        fill='black'
        fillOpacity={0.33}
      />
    </g>
    <defs>
      <clipPath id='clip0_458_730'>
        <rect y={0.060606} width={25} height={26.5152} rx={10} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(MortarPestleIcon);
export { Memo as MortarPestleIcon };
