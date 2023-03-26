import { memo, SVGProps } from 'react';

const StarIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.7582 3.28542L15.6829 12.0201L4.32758 13.4253C2.29124 13.676 1.47515 15.8069 2.95189 17.0274L11.1672 23.8226L9.22413 33.4215C8.87438 35.1566 11.0273 36.4562 12.8305 35.6448L22.9889 31.1125L33.1473 35.6448C34.9504 36.4496 37.1034 35.1566 36.7536 33.4215L34.8105 23.8226L43.0258 17.0274C44.5026 15.8069 43.6865 13.676 41.6502 13.4253L30.2948 12.0201L25.2195 3.28542C24.3102 1.72847 21.6753 1.70868 20.7582 3.28542Z'
      fill='#0D3C06'
    />
  </svg>
);

const Memo = memo(StarIcon2);
export { Memo as StarIcon2 };
