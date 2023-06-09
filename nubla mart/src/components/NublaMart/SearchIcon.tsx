import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_462_973)'>
      <path
        d='M26.9001 21.6162L21.6675 16.748C21.4313 16.5283 21.1112 16.4062 20.7753 16.4062H19.9198C21.3683 14.6826 22.2291 12.5146 22.2291 10.1562C22.2291 4.5459 17.3428 0 11.3125 0C5.28208 0 0.395844 4.5459 0.395844 10.1562C0.395844 15.7666 5.28208 20.3125 11.3125 20.3125C13.8474 20.3125 16.1777 19.5117 18.0304 18.1641V18.96C18.0304 19.2725 18.1616 19.5703 18.3978 19.79L23.6304 24.6582C24.1237 25.1172 24.9215 25.1172 25.4096 24.6582L26.8949 23.2764C27.3882 22.8174 27.3882 22.0752 26.9001 21.6162ZM11.3125 16.4062C7.60186 16.4062 4.59454 13.6133 4.59454 10.1562C4.59454 6.7041 7.59661 3.90625 11.3125 3.90625C15.0231 3.90625 18.0304 6.69922 18.0304 10.1562C18.0304 13.6084 15.0283 16.4062 11.3125 16.4062Z'
        fill='black'
        fillOpacity={0.49}
      />
    </g>
    <defs>
      <clipPath id='clip0_462_973'>
        <rect width={26.8717} height={25} fill='white' transform='translate(0.395844)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
