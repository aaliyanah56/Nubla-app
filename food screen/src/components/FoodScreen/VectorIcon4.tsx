import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.27965 9.66008L0.809558 3.19178C0.224125 2.7447 0.224125 2.02177 0.809558 1.57946L2.21709 0.504579C2.80252 0.057505 3.74918 0.057505 4.32838 0.504579L10.3322 5.08946L16.336 0.504579C16.9214 0.057505 17.8681 0.057505 18.4473 0.504579L19.8548 1.57946C20.4402 2.02653 20.4402 2.74946 19.8548 3.19178L11.3847 9.66008C10.8117 10.1071 9.86508 10.1071 9.27965 9.66008V9.66008Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
