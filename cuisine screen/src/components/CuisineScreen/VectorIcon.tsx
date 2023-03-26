import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.5734 1.70941C19.8977 -0.896569 15.9183 -0.427827 13.4623 2.46833L12.5004 3.60112L11.5385 2.46833C9.08734 -0.427827 5.10304 -0.896569 2.42731 1.70941C-0.639037 4.70043 -0.800167 10.0686 1.94392 13.3108L11.392 24.4601C12.0023 25.18 12.9935 25.18 13.6039 24.4601L23.0519 13.3108C25.8009 10.0686 25.6398 4.70043 22.5734 1.70941V1.70941Z'
      fill='#C5C5C5'
      fillOpacity={0.14}
      stroke='black'
      strokeOpacity={0.33}
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
