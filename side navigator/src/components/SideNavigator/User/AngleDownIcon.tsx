import { memo, SVGProps } from 'react';

const AngleDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.967 17.9167L5.59195 11.2976C5.15132 10.8401 5.15132 10.1003 5.59195 9.64767L6.65134 8.54772C7.09197 8.09022 7.80448 8.09022 8.24042 8.54772L12.7592 13.2395L17.2781 8.54772C17.7187 8.09022 18.4312 8.09022 18.8671 8.54772L19.9265 9.64767C20.3672 10.1052 20.3672 10.845 19.9265 11.2976L13.5514 17.9167C13.1202 18.3742 12.4077 18.3742 11.967 17.9167V17.9167Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(AngleDownIcon);
export { Memo as AngleDownIcon };
