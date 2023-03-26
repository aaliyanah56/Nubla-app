import { memo, SVGProps } from 'react';

const RightSideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 67 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.35}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M42.3333 2.66935C42.3333 1.19659 43.5273 0.00268555 45 0.00268555H61.6667C63.1394 0.00268555 64.3333 1.19659 64.3333 2.66935V8.66935C64.3333 10.1421 63.1394 11.336 61.6667 11.336H45C43.5272 11.336 42.3333 10.1421 42.3333 8.66935V2.66935Z'
      fill='black'
      stroke='black'
    />
    <path
      opacity={0.4}
      d='M65.3333 3.66935V7.66935C66.1381 7.33058 66.6614 6.54249 66.6614 5.66935C66.6614 4.79622 66.1381 4.00813 65.3333 3.66935'
      fill='black'
    />
    <path
      d='M44.3333 3.33602C44.3333 2.59964 44.9303 2.00269 45.6667 2.00269H61C61.7364 2.00269 62.3333 2.59964 62.3333 3.33602V8.00268C62.3333 8.73906 61.7364 9.33602 61 9.33602H45.6667C44.9303 9.33602 44.3333 8.73907 44.3333 8.00269V3.33602Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.6637 2.27733C31.8796 2.27742 34.0107 3.12886 35.6167 4.65566C35.7376 4.77354 35.9309 4.77205 36.05 4.65233L37.206 3.48566C37.2663 3.42494 37.2999 3.34269 37.2994 3.25711C37.2989 3.17153 37.2644 3.08967 37.2033 3.02966C32.9882 -1.00989 26.3384 -1.00989 22.1233 3.02966C22.0623 3.08963 22.0276 3.17146 22.0271 3.25704C22.0265 3.34262 22.0601 3.42489 22.1203 3.48566L23.2767 4.65233C23.3957 4.77223 23.5891 4.77372 23.71 4.65566C25.3162 3.12876 27.4476 2.27732 29.6637 2.27733ZM29.6637 6.07299C30.8812 6.07292 32.0552 6.52545 32.9577 7.34266C33.0797 7.45864 33.272 7.45613 33.391 7.33699L34.5457 6.17033C34.6065 6.10913 34.6402 6.02612 34.6393 5.93985C34.6385 5.85359 34.603 5.77127 34.541 5.71133C31.7928 3.15494 27.5369 3.15494 24.7887 5.71133C24.7266 5.77127 24.6912 5.85363 24.6904 5.93992C24.6895 6.02621 24.7234 6.10922 24.7843 6.17033L25.9387 7.33699C26.0577 7.45613 26.2499 7.45864 26.372 7.34266C27.2739 6.52599 28.447 6.0735 29.6637 6.07299ZM31.9767 8.62681C31.9784 8.71332 31.9444 8.79672 31.8827 8.85733L29.8853 10.873C29.8268 10.9322 29.747 10.9656 29.6637 10.9656C29.5804 10.9656 29.5006 10.9322 29.442 10.873L27.4443 8.85733C27.3826 8.79668 27.3487 8.71325 27.3505 8.62674C27.3523 8.54023 27.3898 8.45831 27.454 8.40033C28.7296 7.32144 30.5978 7.32144 31.8733 8.40033C31.9375 8.45836 31.9749 8.54031 31.9767 8.62681Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 0.335938H15C14.4477 0.335938 14 0.783653 14 1.33594V10.0026C14 10.5549 14.4477 11.0026 15 11.0026H16C16.5523 11.0026 17 10.5549 17 10.0026V1.33594C17 0.783653 16.5523 0.335938 16 0.335938ZM10.3333 2.66927H11.3333C11.8856 2.66927 12.3333 3.11699 12.3333 3.66927V10.0026C12.3333 10.5549 11.8856 11.0026 11.3333 11.0026H10.3333C9.78106 11.0026 9.33334 10.5549 9.33334 10.0026V3.66927C9.33334 3.11699 9.78106 2.66927 10.3333 2.66927ZM6.66666 5.0026H5.66666C5.11437 5.0026 4.66666 5.45032 4.66666 6.0026V10.0026C4.66666 10.5549 5.11437 11.0026 5.66666 11.0026H6.66666C7.21894 11.0026 7.66666 10.5549 7.66666 10.0026V6.0026C7.66666 5.45032 7.21894 5.0026 6.66666 5.0026ZM2 7.0026H1C0.447715 7.0026 0 7.45032 0 8.0026V10.0026C0 10.5549 0.447715 11.0026 1 11.0026H2C2.55228 11.0026 3 10.5549 3 10.0026V8.0026C3 7.45032 2.55228 7.0026 2 7.0026Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(RightSideIcon);
export { Memo as RightSideIcon };
