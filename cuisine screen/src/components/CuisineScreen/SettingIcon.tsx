import { memo, SVGProps } from 'react';

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.612 3.14713e-05V3.37438L9.53623 4.21797L6.42251 1.6872L2.27088 5.06155L5.3846 7.59231L4.3467 9.27949H0.195068V14.341H4.3467L5.3846 16.0282L2.27088 18.5589L6.42251 21.9333L9.53623 19.4025L11.612 20.2461V23.6205H17.8395V20.2461L19.9153 19.4025L23.029 21.9333L27.1807 18.5589L24.0669 16.0282L25.1048 14.341H29.2565V9.27949H25.1048L24.0669 7.59231L27.1807 5.06155L23.029 1.6872L19.9153 4.21797L17.8395 3.37438V3.14713e-05H11.612Z'
      stroke='#C5C5C5'
      strokeOpacity={0.14}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.7256 15.1844C17.0185 15.1844 18.8773 13.6737 18.8773 11.8101C18.8773 9.94651 17.0185 8.43577 14.7256 8.43577C12.4327 8.43577 10.574 9.94651 10.574 11.8101C10.574 13.6737 12.4327 15.1844 14.7256 15.1844Z'
      stroke='#C5C5C5'
      strokeOpacity={0.14}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SettingIcon);
export { Memo as SettingIcon };
