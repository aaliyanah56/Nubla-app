import { memo, SVGProps } from 'react';

const AngleLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.4766 13.0703L23.1016 5.63281C23.8359 5.11875 25.0234 5.11875 25.75 5.63281L27.5156 6.86875C28.25 7.38281 28.25 8.21406 27.5156 8.72266L19.9922 14L27.5234 19.2719C28.2578 19.7859 28.2578 20.6172 27.5234 21.1258L25.7578 22.3672C25.0234 22.8812 23.8359 22.8812 23.1094 22.3672L12.4844 14.9297C11.7422 14.4156 11.7422 13.5844 12.4766 13.0703V13.0703Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(AngleLeftIcon);
export { Memo as AngleLeftIcon };
