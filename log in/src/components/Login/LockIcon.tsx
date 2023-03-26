import { memo, SVGProps } from 'react';

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={28.6523} height={26.8} transform='translate(0.563232)' fill='black' fillOpacity={0.5} />
    <path
      d='M14.8894 14.5167C14.5259 14.5127 14.1699 14.613 13.8692 14.804C13.5685 14.995 13.3376 15.2676 13.2075 15.5851C13.0775 15.9026 13.0545 16.2497 13.1418 16.5798C13.229 16.9098 13.4223 17.207 13.6955 17.4312V18.9833C13.6955 19.2795 13.8213 19.5635 14.0452 19.7729C14.2691 19.9824 14.5728 20.1 14.8894 20.1C15.206 20.1 15.5097 19.9824 15.7336 19.7729C15.9575 19.5635 16.0832 19.2795 16.0832 18.9833V17.4312C16.3565 17.207 16.5498 16.9098 16.637 16.5798C16.7243 16.2497 16.7013 15.9026 16.5713 15.5851C16.4412 15.2676 16.2103 14.995 15.9096 14.804C15.6089 14.613 15.2529 14.5127 14.8894 14.5167V14.5167ZM20.8586 10.05V7.81667C20.8586 6.33587 20.2297 4.91573 19.1103 3.86865C17.9908 2.82158 16.4725 2.23333 14.8894 2.23333C13.3063 2.23333 11.788 2.82158 10.6685 3.86865C9.54906 4.91573 8.92016 6.33587 8.92016 7.81667V10.05C7.97028 10.05 7.0593 10.4029 6.38763 11.0312C5.71596 11.6594 5.33862 12.5115 5.33862 13.4V21.2167C5.33862 22.1051 5.71596 22.9572 6.38763 23.5855C7.0593 24.2137 7.97028 24.5667 8.92016 24.5667H20.8586C21.8085 24.5667 22.7195 24.2137 23.3912 23.5855C24.0628 22.9572 24.4402 22.1051 24.4402 21.2167V13.4C24.4402 12.5115 24.0628 11.6594 23.3912 11.0312C22.7195 10.4029 21.8085 10.05 20.8586 10.05ZM11.3079 7.81667C11.3079 6.92819 11.6852 6.07611 12.3569 5.44786C13.0285 4.81961 13.9395 4.46667 14.8894 4.46667C15.8393 4.46667 16.7503 4.81961 17.4219 5.44786C18.0936 6.07611 18.4709 6.92819 18.4709 7.81667V10.05H11.3079V7.81667ZM22.0525 21.2167C22.0525 21.5128 21.9267 21.7969 21.7028 22.0063C21.4789 22.2157 21.1753 22.3333 20.8586 22.3333H8.92016C8.60353 22.3333 8.29987 22.2157 8.07599 22.0063C7.8521 21.7969 7.72632 21.5128 7.72632 21.2167V13.4C7.72632 13.1038 7.8521 12.8198 8.07599 12.6104C8.29987 12.401 8.60353 12.2833 8.92016 12.2833H20.8586C21.1753 12.2833 21.4789 12.401 21.7028 12.6104C21.9267 12.8198 22.0525 13.1038 22.0525 13.4V21.2167Z'
      fill='#DADADA'
    />
  </svg>
);

const Memo = memo(LockIcon);
export { Memo as LockIcon };
