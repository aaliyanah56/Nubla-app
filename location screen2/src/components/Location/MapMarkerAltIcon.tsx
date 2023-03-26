import { memo, SVGProps } from 'react';

const MapMarkerAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_451_396)'>
      <path
        d='M17.997 36.2535C6.92936 21.0315 4.875 19.4693 4.875 13.875C4.875 6.21203 11.4228 0 19.5 0C27.5772 0 34.125 6.21203 34.125 13.875C34.125 19.4693 32.0706 21.0315 21.003 36.2535C20.2767 37.2489 18.7232 37.2488 17.997 36.2535ZM19.5 19.6562C22.8655 19.6562 25.5938 17.0679 25.5938 13.875C25.5938 10.6821 22.8655 8.09375 19.5 8.09375C16.1345 8.09375 13.4062 10.6821 13.4062 13.875C13.4062 17.0679 16.1345 19.6562 19.5 19.6562Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_451_396'>
        <rect width={39} height={37} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(MapMarkerAltIcon);
export { Memo as MapMarkerAltIcon };
