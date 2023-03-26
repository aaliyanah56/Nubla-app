import { memo, SVGProps } from 'react';

const AngleRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.5234 14.9297L16.8984 22.3672C16.1641 22.8812 14.9766 22.8812 14.25 22.3672L12.4844 21.1312C11.75 20.6172 11.75 19.7859 12.4844 19.2773L20.0156 14.0055L12.4844 8.73359C11.75 8.21953 11.75 7.38828 12.4844 6.87969L14.2422 5.63281C14.9766 5.11875 16.1641 5.11875 16.8906 5.63281L27.5156 13.0703C28.2578 13.5844 28.2578 14.4156 27.5234 14.9297V14.9297Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(AngleRightIcon);
export { Memo as AngleRightIcon };
