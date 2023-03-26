import { memo, SVGProps } from 'react';

const AngleDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.6699 17.2021L5.0293 10.5615C4.57031 10.1025 4.57031 9.36035 5.0293 8.90625L6.13281 7.80273C6.5918 7.34375 7.33398 7.34375 7.78809 7.80273L12.4951 12.5098L17.2021 7.80273C17.6611 7.34375 18.4033 7.34375 18.8574 7.80273L19.9609 8.90625C20.4199 9.36523 20.4199 10.1074 19.9609 10.5615L13.3203 17.2021C12.8711 17.6611 12.1289 17.6611 11.6699 17.2021V17.2021Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(AngleDownIcon);
export { Memo as AngleDownIcon };
