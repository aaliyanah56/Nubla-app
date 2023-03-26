import { memo, SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.2208 15.7432H18.2327M18.2208 2.97723H15.8583C14.5535 2.97723 13.4958 4.01641 13.4958 5.29831V19.2248C13.4958 20.5068 14.5535 21.5459 15.8583 21.5459H27.671C28.9758 21.5459 30.0335 20.5068 30.0335 19.2248V5.29831C30.0335 4.01641 28.9758 2.97723 27.671 2.97723H25.3084H18.2208ZM18.2208 2.97723C18.2208 4.25913 19.2786 5.29831 20.5834 5.29831H22.9459C24.2507 5.29831 25.3084 4.25913 25.3084 2.97723H18.2208ZM18.2208 2.97723C18.2208 1.69533 19.2786 0.656143 20.5834 0.656143H22.9459C24.2507 0.656143 25.3084 1.69533 25.3084 2.97723H18.2208ZM21.7646 11.101H25.3084H21.7646ZM21.7646 15.7432H25.3084H21.7646ZM18.2208 11.101H18.2327H18.2208Z'
      stroke='white'
      strokeWidth={1.74081}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(NotificationIcon);
export { Memo as NotificationIcon };
