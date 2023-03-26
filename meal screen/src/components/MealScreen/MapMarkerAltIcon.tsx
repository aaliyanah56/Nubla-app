import { memo, SVGProps } from 'react';

const MapMarkerAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_461_855)'>
      <path
        d='M14.3201 24.4956C5.73534 14.2105 4.14186 13.1549 4.14186 9.375C4.14186 4.19731 9.22074 0 15.4859 0C21.7511 0 26.8299 4.19731 26.8299 9.375C26.8299 13.1549 25.2365 14.2105 16.6517 24.4956C16.0884 25.1682 14.8834 25.1681 14.3201 24.4956ZM15.4859 13.2812C18.0964 13.2812 20.2126 11.5324 20.2126 9.375C20.2126 7.21763 18.0964 5.46875 15.4859 5.46875C12.8754 5.46875 10.7592 7.21763 10.7592 9.375C10.7592 11.5324 12.8754 13.2812 15.4859 13.2812Z'
        fill='#C5C5C5'
      />
    </g>
    <defs>
      <clipPath id='clip0_461_855'>
        <rect width={30.2508} height={25} fill='white' transform='translate(0.360512)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(MapMarkerAltIcon);
export { Memo as MapMarkerAltIcon };
