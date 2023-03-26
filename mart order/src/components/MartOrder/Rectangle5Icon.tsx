import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 97 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.47715 4.47715 0 10 0H87C92.5228 0 97 4.47715 97 10V17C97 22.5228 92.5228 27 87 27H10C4.47715 27 0 22.5228 0 17V10Z'
      fill='#0D3C06'
    />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
