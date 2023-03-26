import { memo, SVGProps } from 'react';

const HandPointRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25 9.74863C25 10.9022 23.9917 11.8886 22.8125 11.8886H17.937C18.7348 12.721 18.8328 14.3186 17.6294 15.3526C18.3271 16.4673 17.7342 17.9414 16.8262 18.3954C17.2644 20.7948 15.7546 21.875 13.2812 21.875C13.1472 21.875 12.633 21.8651 12.5 21.8655C9.47407 21.8737 8.74541 20.3486 6.45845 19.9946C5.88848 19.9064 5.46875 19.414 5.46875 18.8372V10.462L5.46885 10.4619C5.46938 9.56514 5.98677 8.70952 6.85869 8.32104C8.26914 7.68657 11.5175 5.92661 12.1094 4.54551C12.4901 3.65713 13.1535 3.12539 14.0625 3.125C15.7335 3.12432 16.8824 4.83877 16.2167 6.39199C16.0418 6.80015 15.8109 7.20596 15.5257 7.60869H22.8125C23.9575 7.60869 25 8.61177 25 9.74863V9.74863ZM4.6875 9.76562V19.1406C4.6875 19.7878 4.16284 20.3125 3.51562 20.3125H1.17188C0.524658 20.3125 0 19.7878 0 19.1406V9.76562C0 9.11841 0.524658 8.59375 1.17188 8.59375H3.51562C4.16284 8.59375 4.6875 9.11841 4.6875 9.76562ZM3.32031 17.9688C3.32031 17.4294 2.88311 16.9922 2.34375 16.9922C1.80439 16.9922 1.36719 17.4294 1.36719 17.9688C1.36719 18.5081 1.80439 18.9453 2.34375 18.9453C2.88311 18.9453 3.32031 18.5081 3.32031 17.9688Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(HandPointRightIcon);
export { Memo as HandPointRightIcon };
