import { memo, SVGProps } from 'react';

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.0113 0.78833V4.10772L9.01988 4.93757L6.03278 2.44803L2.04999 5.76742L5.03708 8.25696L4.04139 9.91665H0.0585938V14.8957H4.04139L5.03708 16.5554L2.04999 19.045L6.03278 22.3644L9.01988 19.8748L11.0113 20.7047V24.0241H16.9855V20.7047L18.9769 19.8748L21.964 22.3644L25.9467 19.045L22.9596 16.5554L23.9553 14.8957H27.9381V9.91665H23.9553L22.9596 8.25696L25.9467 5.76742L21.964 2.44803L18.9769 4.93757L16.9855 4.10772V0.78833H11.0113Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.9975 15.7255C16.1971 15.7255 17.9803 14.2394 17.9803 12.4062C17.9803 10.5729 16.1971 9.08679 13.9975 9.08679C11.7978 9.08679 10.0146 10.5729 10.0146 12.4062C10.0146 14.2394 11.7978 15.7255 13.9975 15.7255Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SettingIcon);
export { Memo as SettingIcon };
