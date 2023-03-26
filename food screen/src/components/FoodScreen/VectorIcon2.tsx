import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.59106 9.46724L1.40523 3.015C0.83945 2.56903 0.83945 1.8479 1.40523 1.40668L2.76553 0.334473C3.33131 -0.111491 4.2462 -0.111491 4.80596 0.334473L10.6083 4.90797L16.4106 0.334473C16.9764 -0.111491 17.8912 -0.111491 18.451 0.334473L19.8113 1.40668C20.3771 1.85265 20.3771 2.57378 19.8113 3.015L11.6255 9.46724C11.0717 9.9132 10.1568 9.9132 9.59106 9.46724V9.46724Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
