import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.02188 9.66005L0.898953 3.19175C0.337515 2.74468 0.337515 2.02175 0.898953 1.57943L2.24879 0.504556C2.81023 0.0574821 3.71809 0.0574821 4.27355 0.504556L10.0313 5.08944L15.789 0.504556C16.3504 0.0574821 17.2583 0.0574821 17.8138 0.504556L19.1636 1.57943C19.725 2.02651 19.725 2.74944 19.1636 3.19175L11.0407 9.66005C10.4912 10.1071 9.58332 10.1071 9.02188 9.66005V9.66005Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
