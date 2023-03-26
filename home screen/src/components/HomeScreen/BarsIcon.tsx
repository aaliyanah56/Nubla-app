import { memo, SVGProps } from 'react';

const BarsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.34375 6.06994H22.6562C23.0877 6.06994 23.4375 5.75181 23.4375 5.35933V3.58282C23.4375 3.19034 23.0877 2.87222 22.6562 2.87222H2.34375C1.91226 2.87222 1.5625 3.19034 1.5625 3.58282V5.35933C1.5625 5.75181 1.91226 6.06994 2.34375 6.06994ZM2.34375 13.176H22.6562C23.0877 13.176 23.4375 12.8579 23.4375 12.4654V10.6889C23.4375 10.2964 23.0877 9.97827 22.6562 9.97827H2.34375C1.91226 9.97827 1.5625 10.2964 1.5625 10.6889V12.4654C1.5625 12.8579 1.91226 13.176 2.34375 13.176ZM2.34375 20.282H22.6562C23.0877 20.282 23.4375 19.9639 23.4375 19.5714V17.7949C23.4375 17.4024 23.0877 17.0843 22.6562 17.0843H2.34375C1.91226 17.0843 1.5625 17.4024 1.5625 17.7949V19.5714C1.5625 19.9639 1.91226 20.282 2.34375 20.282Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(BarsIcon);
export { Memo as BarsIcon };
