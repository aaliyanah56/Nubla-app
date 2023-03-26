import { memo, SVGProps } from 'react';

const PlusSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={26.9582} height={23.7319} transform='translate(0.375977 0.920288)' fill='white' />
    <path
      d='M23.122 2.40353H4.5882C3.1929 2.40353 2.06087 3.40009 2.06087 4.6284V20.9441C2.06087 22.1724 3.1929 23.1689 4.5882 23.1689H23.122C24.5173 23.1689 25.6493 22.1724 25.6493 20.9441V4.6284C25.6493 3.40009 24.5173 2.40353 23.122 2.40353ZM21.4371 14.0841C21.4371 14.39 21.1528 14.6403 20.8053 14.6403H15.9612V18.9046C15.9612 19.2105 15.6769 19.4608 15.3294 19.4608H12.3808C12.0333 19.4608 11.749 19.2105 11.749 18.9046V14.6403H6.90492C6.55741 14.6403 6.27309 14.39 6.27309 14.0841V11.4884C6.27309 11.1825 6.55741 10.9322 6.90492 10.9322H11.749V6.66786C11.749 6.36194 12.0333 6.11164 12.3808 6.11164H15.3294C15.6769 6.11164 15.9612 6.36194 15.9612 6.66786V10.9322H20.8053C21.1528 10.9322 21.4371 11.1825 21.4371 11.4884V14.0841Z'
      fill='#0B0A0A'
      fillOpacity={0.5}
    />
  </svg>
);

const Memo = memo(PlusSquareIcon);
export { Memo as PlusSquareIcon };
