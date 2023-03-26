import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.5 12.5C15.9521 12.5 18.75 9.70215 18.75 6.25C18.75 2.79785 15.9521 0 12.5 0C9.04785 0 6.25 2.79785 6.25 6.25C6.25 9.70215 9.04785 12.5 12.5 12.5ZM16.875 14.0625H16.0596C14.9756 14.5605 13.7695 14.8438 12.5 14.8438C11.2305 14.8438 10.0293 14.5605 8.94043 14.0625H8.125C4.50195 14.0625 1.5625 17.002 1.5625 20.625V22.6562C1.5625 23.9502 2.6123 25 3.90625 25H21.0938C22.3877 25 23.4375 23.9502 23.4375 22.6562V20.625C23.4375 17.002 20.498 14.0625 16.875 14.0625Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(UserIcon);
export { Memo as UserIcon };
