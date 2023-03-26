import { memo, SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.5877 1.80122L11.8931 6.58999L3.62667 7.36039C2.14426 7.49783 1.55017 8.66609 2.6252 9.33522L8.60574 13.0606L7.19123 18.3232C6.93662 19.2745 8.50389 19.987 9.81656 19.5421L17.2116 17.0573L24.6067 19.5421C25.9193 19.9834 27.4866 19.2745 27.232 18.3232L25.8175 13.0606L31.798 9.33522C32.873 8.66609 32.2789 7.49783 30.7965 7.36039L22.5302 6.58999L18.8355 1.80122C18.1735 0.94763 16.2554 0.93678 15.5877 1.80122Z'
      fill='#FFDB59'
    />
  </svg>
);

const Memo = memo(StarIcon);
export { Memo as StarIcon };
