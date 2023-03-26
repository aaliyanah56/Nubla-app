import { memo, SVGProps } from 'react';

const Arrow4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.06066 -1.06066C-1.64645 -0.474874 -1.64645 0.474874 -1.06066 1.06066L8.48528 10.6066C9.07107 11.1924 10.0208 11.1924 10.6066 10.6066C11.1924 10.0208 11.1924 9.07107 10.6066 8.48528L2.12132 0L10.6066 -8.48528C11.1924 -9.07107 11.1924 -10.0208 10.6066 -10.6066C10.0208 -11.1924 9.07107 -11.1924 8.48528 -10.6066L-1.06066 -1.06066ZM48 -1.5L1.07288e-06 -1.5V1.5L48 1.5V-1.5Z'
      fill='#DADADA'
      fillOpacity={0.62}
    />
  </svg>
);

const Memo = memo(Arrow4Icon);
export { Memo as Arrow4Icon };
