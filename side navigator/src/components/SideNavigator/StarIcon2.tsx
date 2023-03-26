import { memo, SVGProps } from 'react';

const StarIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.1904 3.38504L15.3103 11.9775L4.39175 13.3598C2.43373 13.6064 1.64903 15.7026 3.06897 16.9032L10.9683 23.5877L9.09997 33.0303C8.76367 34.7371 10.8338 36.0156 12.5676 35.2174L22.3353 30.7589L32.103 35.2174C33.8368 36.0091 35.9069 34.7371 35.5706 33.0303L33.7023 23.5877L41.6016 16.9032C43.0215 15.7026 42.2368 13.6064 40.2788 13.3598L29.3602 11.9775L24.4801 3.38504C23.6058 1.85346 21.0723 1.83399 20.1904 3.38504Z'
      fill='#0D3C06'
    />
  </svg>
);

const Memo = memo(StarIcon2);
export { Memo as StarIcon2 };
