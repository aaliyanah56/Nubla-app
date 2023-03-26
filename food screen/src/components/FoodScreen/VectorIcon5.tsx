import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.13083 9.66005L0.63998 3.19175C0.0531122 2.74468 0.0531122 2.02175 0.63998 1.57943L2.05096 0.504556C2.63783 0.0574821 3.5868 0.0574821 4.16743 0.504556L10.1859 5.08944L16.2045 0.504556C16.7913 0.0574821 17.7403 0.0574821 18.3209 0.504556L19.7319 1.57943C20.3188 2.02651 20.3188 2.74944 19.7319 3.19175L11.2411 9.66005C10.6667 10.1071 9.7177 10.1071 9.13083 9.66005V9.66005Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
