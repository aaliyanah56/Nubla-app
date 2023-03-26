import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.0416 1.44184C18.5475 -0.756231 14.8381 -0.36086 12.5487 2.08196L11.6521 3.03744L10.7555 2.08196C8.4707 -0.36086 4.75676 -0.756231 2.2626 1.44184C-0.595674 3.96468 -0.74587 8.49261 1.81201 11.2273L10.619 20.6314C11.1879 21.2386 12.1118 21.2386 12.6807 20.6314L21.4877 11.2273C24.0501 8.49261 23.8999 3.96468 21.0416 1.44184V1.44184Z'
      fill='#DADADA'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
