import { memo, SVGProps } from 'react';

const EllipsisVIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_460_817)'>
      <path
        d='M8.98438 13.5606C8.98438 11.4995 10.5566 9.83191 12.5 9.83191C14.4434 9.83191 16.0156 11.4995 16.0156 13.5606C16.0156 15.6217 14.4434 17.2893 12.5 17.2893C10.5566 17.2893 8.98438 15.6217 8.98438 13.5606ZM3.90625 17.2893C5.84961 17.2893 7.42188 15.6217 7.42188 13.5606C7.42188 11.4995 5.84961 9.83191 3.90625 9.83191C1.96289 9.83191 0.390625 11.4995 0.390625 13.5606C0.390625 15.6217 1.96289 17.2893 3.90625 17.2893ZM21.0938 17.2893C23.0371 17.2893 24.6094 15.6217 24.6094 13.5606C24.6094 11.4995 23.0371 9.83191 21.0938 9.83191C19.1504 9.83191 17.5781 11.4995 17.5781 13.5606C17.5781 15.6217 19.1504 17.2893 21.0938 17.2893Z'
        fill='black'
        fillOpacity={0.33}
      />
    </g>
    <defs>
      <clipPath id='clip0_460_817'>
        <rect y={26.8182} width={26.5152} height={25} rx={10} transform='rotate(-90 0 26.8182)' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(EllipsisVIcon);
export { Memo as EllipsisVIcon };
