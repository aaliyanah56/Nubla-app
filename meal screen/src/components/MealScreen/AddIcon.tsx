import { memo, SVGProps } from 'react';

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 139 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={9.85039} width={100.693} height={43.5484} rx={10} fill='#DADADA' fillOpacity={0.6} />
    <path
      d='M135.482 0H109.683C107.741 0 106.165 2.08993 106.165 4.6659V38.8825C106.165 41.4585 107.741 43.5484 109.683 43.5484H135.482C137.424 43.5484 139 41.4585 139 38.8825V4.6659C139 2.08993 137.424 0 135.482 0ZM133.137 24.496C133.137 25.1375 132.741 25.6624 132.257 25.6624H125.514V34.6054C125.514 35.247 125.119 35.7719 124.635 35.7719H120.531C120.047 35.7719 119.651 35.247 119.651 34.6054V25.6624H112.908C112.424 25.6624 112.029 25.1375 112.029 24.496V19.0524C112.029 18.4109 112.424 17.8859 112.908 17.8859H119.651V8.94297C119.651 8.30141 120.047 7.7765 120.531 7.7765H124.635C125.119 7.7765 125.514 8.30141 125.514 8.94297V17.8859H132.257C132.741 17.8859 133.137 18.4109 133.137 19.0524V24.496Z'
      fill='#0D3C06'
    />
    <path
      d='M29.3166 1.45161H3.518C1.57577 1.45161 0 3.54155 0 6.11751V40.3341C0 42.9101 1.57577 45 3.518 45H29.3166C31.2589 45 32.8346 42.9101 32.8346 40.3341V6.11751C32.8346 3.54155 31.2589 1.45161 29.3166 1.45161ZM6.74283 27.1141C6.2591 27.1141 5.86333 26.5891 5.86333 25.9476V20.504C5.86333 19.8625 6.2591 19.3376 6.74283 19.3376H26.0918C26.5755 19.3376 26.9713 19.8625 26.9713 20.504V25.9476C26.9713 26.5891 26.5755 27.1141 26.0918 27.1141H6.74283Z'
      fill='#0D3C06'
    />
  </svg>
);

const Memo = memo(AddIcon);
export { Memo as AddIcon };
