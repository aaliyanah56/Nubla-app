import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.8964 27.666L24.8857 21.4354C24.6144 21.1542 24.2467 20.9979 23.8609 20.9979H22.8782C24.5421 18.7919 25.5308 16.0172 25.5308 12.9987C25.5308 5.81818 19.9181 0 12.9911 0C6.0641 0 0.45137 5.81818 0.45137 12.9987C0.45137 20.1793 6.0641 25.9975 12.9911 25.9975C15.903 25.9975 18.5797 24.9726 20.7078 23.2477V24.2664C20.7078 24.6663 20.8586 25.0476 21.1299 25.3288L27.1405 31.5594C27.7072 32.1469 28.6235 32.1469 29.1842 31.5594L30.8903 29.7908C31.457 29.2034 31.457 28.2535 30.8964 27.666ZM12.9911 20.9979C8.72879 20.9979 5.27434 17.4233 5.27434 12.9987C5.27434 8.58041 8.72276 4.99951 12.9911 4.99951C17.2534 4.99951 20.7078 8.57416 20.7078 12.9987C20.7078 17.417 17.2594 20.9979 12.9911 20.9979Z'
      fill='#DADADA'
      fillOpacity={0.62}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };