import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.54152 9.35912C0.54152 8.24207 1.16215 7.21752 2.15219 6.70021L13.2493 0.901751L24.3465 6.70021C25.3365 7.21752 25.9572 8.24207 25.9572 9.35911V18.24C25.9572 19.6207 24.8379 20.74 23.4572 20.74H18.0617C17.5094 20.74 17.0617 20.2923 17.0617 19.74V14.4769C17.0617 14.2008 16.8378 13.9769 16.5617 13.9769H9.937C9.66085 13.9769 9.437 14.2008 9.437 14.4769V19.74C9.437 20.2923 8.98928 20.74 8.437 20.74H3.04152C1.66081 20.74 0.54152 19.6207 0.54152 18.24V9.35912Z'
      stroke='white'
      strokeWidth={1.74081}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
