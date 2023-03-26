import { memo, SVGProps } from 'react';

const AngleDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.6699 16.2264L5.0293 10.1863C4.57031 9.7688 4.57031 9.09372 5.0293 8.68069L6.13281 7.67696C6.5918 7.25948 7.33398 7.25948 7.78809 7.67696L12.4951 11.9584L17.2021 7.67696C17.6611 7.25948 18.4033 7.25948 18.8574 7.67696L19.9609 8.68069C20.4199 9.09817 20.4199 9.77324 19.9609 10.1863L13.3203 16.2264C12.8711 16.6439 12.1289 16.6439 11.6699 16.2264V16.2264Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(AngleDownIcon);
export { Memo as AngleDownIcon };
