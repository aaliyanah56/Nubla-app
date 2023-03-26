import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8.88014C0 7.92659 0.453315 7.02983 1.22115 6.46442L10 0L18.7788 6.46443C19.5467 7.02983 20 7.92659 20 8.88014V19.5C20 20.8807 18.8807 22 17.5 22H14C13.4477 22 13 21.5523 13 21V15C13 14.7239 12.7761 14.5 12.5 14.5H7.5C7.22386 14.5 7 14.7239 7 15V21C7 21.5523 6.55228 22 6 22H2.5C1.11929 22 0 20.8807 0 19.5V8.88014Z'
      stroke='#14142B'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
