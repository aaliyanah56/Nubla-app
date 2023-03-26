import { memo, SVGProps } from 'react';

const BirthdayCakeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M50.6954 28.5C47.7428 28.5 47.4014 26.125 42.845 26.125C38.2686 26.125 37.9109 28.5 34.9683 28.5C32.05 28.5 31.6539 26.125 27.0916 26.125C22.5771 26.125 22.116 28.5 19.2412 28.5C16.2751 28.5 15.9533 26.125 11.3644 26.125C6.7757 26.125 6.44841 28.5 3.4877 28.5V22.5625C3.4877 20.5957 5.75325 19 8.54567 19H10.2317V8.3125H16.9756V19H23.7196V8.3125H30.4636V19H37.2075V8.3125H43.9515V19H45.6375C48.4299 19 50.6954 20.5957 50.6954 22.5625V28.5ZM50.6954 38H3.4877V30.875C8.05631 30.875 8.41575 28.5 11.3644 28.5C14.3098 28.5 14.6577 30.875 19.2412 30.875C23.7557 30.875 24.2166 28.5 27.0916 28.5C30.0576 28.5 30.3794 30.875 34.9683 30.875C39.537 30.875 39.8964 28.5 42.845 28.5C45.7416 28.5 46.1382 30.875 50.6954 30.875V38ZM13.6036 7.125C11.7332 7.125 10.2317 6.06738 10.2317 4.75C10.2317 2.44922 13.6036 3.04297 13.6036 0C14.8681 0 16.9756 2.18945 16.9756 4.15625C16.9756 6.12305 15.474 7.125 13.6036 7.125ZM27.0916 7.125C25.2212 7.125 23.7196 6.06738 23.7196 4.75C23.7196 2.44922 27.0916 3.04297 27.0916 0C28.3561 0 30.4636 2.18945 30.4636 4.15625C30.4636 6.12305 28.962 7.125 27.0916 7.125ZM40.5795 7.125C38.7091 7.125 37.2075 6.06738 37.2075 4.75C37.2075 2.44922 40.5795 3.04297 40.5795 0C41.844 0 43.9515 2.18945 43.9515 4.15625C43.9515 6.12305 42.4499 7.125 40.5795 7.125Z'
      fill='#0D3C06'
    />
  </svg>
);

const Memo = memo(BirthdayCakeIcon);
export { Memo as BirthdayCakeIcon };
