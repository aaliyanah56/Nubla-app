import { memo, SVGProps } from 'react';

const LeftSideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.86719 11.0889C6.55518 11.0889 8.15186 8.98682 8.15186 5.42725C8.15186 4.08691 7.89551 2.95898 7.40479 2.0874C6.69434 0.732422 5.47119 0 3.92578 0C1.62598 0 0 1.54541 0 3.71338C0 5.74951 1.46484 7.229 3.479 7.229C4.7168 7.229 5.72021 6.65039 6.21826 5.64697H6.24023C6.24023 5.64697 6.26953 5.64697 6.27686 5.64697C6.2915 5.64697 6.34277 5.64697 6.34277 5.64697C6.34277 8.06396 5.42725 9.50684 3.88184 9.50684C2.97363 9.50684 2.27051 9.00879 2.02881 8.21045H0.146484C0.461426 9.94629 1.93359 11.0889 3.86719 11.0889ZM3.93311 5.72754C2.71729 5.72754 1.85303 4.86328 1.85303 3.65479C1.85303 2.47559 2.76123 1.57471 3.94043 1.57471C5.11963 1.57471 6.02783 2.49023 6.02783 3.68408C6.02783 4.86328 5.1416 5.72754 3.93311 5.72754Z'
      fill='#0C0B0B'
    />
    <path
      d='M11.243 10.9863C11.9388 10.9863 12.4148 10.4883 12.4148 9.8291C12.4148 9.1626 11.9388 8.67188 11.243 8.67188C10.5545 8.67188 10.0711 9.1626 10.0711 9.8291C10.0711 10.4883 10.5545 10.9863 11.243 10.9863ZM11.243 5.49316C11.9388 5.49316 12.4148 5.00244 12.4148 4.34326C12.4148 3.67676 11.9388 3.18604 11.243 3.18604C10.5545 3.18604 10.0711 3.67676 10.0711 4.34326C10.0711 5.00244 10.5545 5.49316 11.243 5.49316Z'
      fill='#0C0B0B'
    />
    <path
      d='M19.2706 10.8325H21.0797V8.8623H22.5079V7.26562H21.0797V0.263672H18.4137C16.546 3.07617 15.0592 5.42725 14.107 7.17773V8.8623H19.2706V10.8325ZM15.8575 7.19971C17.088 5.03174 18.1866 3.2959 19.1974 1.80176H19.2999V7.30957H15.8575V7.19971Z'
      fill='#0C0B0B'
    />
    <path
      d='M26.5365 10.8325H28.4262V0.263672H26.5438L23.7826 2.19727V4.01367L26.412 2.16797H26.5365V10.8325Z'
      fill='#0C0B0B'
    />
  </svg>
);

const Memo = memo(LeftSideIcon);
export { Memo as LeftSideIcon };