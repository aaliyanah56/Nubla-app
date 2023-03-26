import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.649258 9.50501C0.649258 8.37693 1.28209 7.34421 2.2872 6.83204L13.8958 0.916679L25.5044 6.83204C26.5095 7.34421 27.1423 8.37693 27.1423 9.50501V18.5833C27.1423 19.9641 26.023 21.0833 24.6423 21.0833H18.8697C18.3175 21.0833 17.8697 20.6356 17.8697 20.0833V14.7083C17.8697 14.4322 17.6459 14.2083 17.3697 14.2083H10.4218C10.1457 14.2083 9.92183 14.4322 9.92183 14.7083V20.0833C9.92183 20.6356 9.47411 21.0833 8.92183 21.0833H3.14926C1.76854 21.0833 0.649258 19.9641 0.649258 18.5833V9.50501Z'
      stroke='#C5C5C5'
      strokeOpacity={0.14}
      strokeWidth={1.74081}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
