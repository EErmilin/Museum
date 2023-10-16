import {FC} from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const QrCode_icon: FC = (_, props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="none"
      {...props}>
      <G clip-path="url(#clip0_62_80)">
        <Path
          d="M22.9707 11.3482L22.5 2.5L32.5 2L31.3003 8.46865L38 8L37.1927 17.5L31.4829 18.3674V22.8497L49 22.5L48.5607 32.8256H51.5389V28.7691L59.5 28L59.999 42.813H48.717V45.8566L58.5 45L60.0031 59.978H45L45.7267 49.5L37.1629 48.7777V54.2363L28 55L28.7476 45.9247H34.3431L33 39.5L45.7478 40.1711V35.7565H38.7463V31.4427L29 32.8437L28.684 25.7741L25 26.5L25.6424 37.0057L17 38V32L12.7638 31.5165L12.7729 38L3.5 37.0116L4.30309 28.711H9.88836L9 22.7601L22.7564 23.5L22 15L28.527 15.7661V11.3482H22.9707ZM57.2547 57.3214L56.5 48.7777H49.5L48.7506 57.3214H57.2547ZM31.4286 28.6877L41.4671 28V32.8437H45.7718L45 25L31.4284 25.7802L31.4286 28.6877ZM57.2519 40.0738L56.5 30.5L54.31 31.482V35.7411H48.7562L49.5 39.5L57.2519 40.0738ZM22.7564 34.3039L22 26.5L12.7729 25.744V28.677H19.9021V34.3038L22.7564 34.3039ZM37.1927 45.7867L45.7267 46.5V42.983L37.1629 42L37.1927 45.7867ZM34.274 15.6346V11.4059H31.467L31.4284 15L34.274 15.6346ZM25 18.3674L25.7218 22.7601L28.7476 22.9562L28.5243 18.531L25 18.3674ZM29 9L28.5237 5.6567H25.7225V8.45308L29 9ZM7.01625 34.293L9.88836 35L9.81907 31.4873H7.01625V34.293ZM34.2943 48.7284H31.4974L31 52L34.2943 51.536V48.7284Z"
          fill="#EDE1B7"
          stroke="#2B4965"
        />
        <Path
          d="M-0.0032196 0H19L19.7319 19.7673H1L-0.0032196 0ZM3.5 17.0357H17.0325L16.5 2.79503H2.69617L3.5 17.0357Z"
          fill="#EDE1B7"
          stroke="#2B4965"
        />
        <Path
          d="M41 19L40.2136 0.0476074H59.9805V19.7832L41 19ZM57.2491 17.083V2.74775H43.0085L44 16.5L57.2491 17.083Z"
          fill="#EDE1B7"
          stroke="#2B4965"
        />
        <Path
          d="M0.5 40L19.7318 40.2328L20 59.5L-0.0032196 59.9999L0.5 40ZM17.0162 57.3157L17.5 42.5L2.77595 42.9805L3.5 56.5L17.0162 57.3157Z"
          fill="#EDE1B7"
          stroke="#2B4965"
        />
        <Path
          d="M5.75464 5.75781H13.9742L14.5 14.5L5.75464 14.0094V5.75781ZM8.47618 8.47591V11.2723H11.2842V8.47591H8.47618Z"
          fill="white"
        />
        <Path
          d="M54.2696 5V14.0085H45.9881V5.75854L54.2696 5ZM52 8L48.7006 8.54729V11.2802H51.56L52 8Z"
          fill="#EDE1B7"
          stroke="#2B4965"
        />
        <Path
          d="M5.5 45.5L13.9947 45.9698V54.2628H5.73398L5.5 45.5ZM8.46106 51.5406H11.2579L12 48L8.46106 48.7236V51.5406Z"
          fill="#EDE1B7"
          stroke="#2B4965"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_62_80">
          <Rect
            width="60.0064"
            height="60"
            fill="white"
            transform="translate(-0.0032196)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default QrCode_icon;
