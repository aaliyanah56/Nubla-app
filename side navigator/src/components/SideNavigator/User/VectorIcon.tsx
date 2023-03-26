import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.5861 5.17708H4.47614C4.05618 5.17708 3.71602 4.83277 3.71602 4.40767C3.71602 3.98257 4.05618 3.63826 4.47614 3.63826H22.7191C23.1391 3.63826 23.4793 3.29395 23.4793 2.86884C23.4793 1.59402 22.4583 0.560606 21.1989 0.560606H3.71602C2.03662 0.560606 0.67552 1.93834 0.67552 3.63826V19.0265C0.67552 20.7264 2.03662 22.1042 3.71602 22.1042H22.5861C23.9173 22.1042 24.9995 21.0688 24.9995 19.7959V7.48532C24.9995 6.21242 23.9173 5.17708 22.5861 5.17708ZM20.4388 15.1795C19.5993 15.1795 18.9185 14.4903 18.9185 13.6406C18.9185 12.7909 19.5993 12.1018 20.4388 12.1018C21.2782 12.1018 21.959 12.7909 21.959 13.6406C21.959 14.4903 21.2782 15.1795 20.4388 15.1795Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };