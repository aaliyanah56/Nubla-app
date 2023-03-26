import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.6518 0C5.21511 0 0 4.85295 0 10.8426C0 16.8323 5.21511 21.6853 11.6518 21.6853C18.0885 21.6853 23.3036 16.8323 23.3036 10.8426C23.3036 4.85295 18.0885 0 11.6518 0ZM18.4173 12.0668C18.4173 12.3554 18.1636 12.5914 17.8535 12.5914H13.5311V16.6137C13.5311 16.9023 13.2774 17.1384 12.9673 17.1384H10.3363C10.0262 17.1384 9.77247 16.9023 9.77247 16.6137V12.5914H5.45003C5.13994 12.5914 4.88623 12.3554 4.88623 12.0668V9.61847C4.88623 9.32991 5.13994 9.09382 5.45003 9.09382H9.77247V5.07155C9.77247 4.783 10.0262 4.54691 10.3363 4.54691H12.9673C13.2774 4.54691 13.5311 4.783 13.5311 5.07155V9.09382H17.8535C18.1636 9.09382 18.4173 9.32991 18.4173 9.61847V12.0668Z'
      fill='#DADADA'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
