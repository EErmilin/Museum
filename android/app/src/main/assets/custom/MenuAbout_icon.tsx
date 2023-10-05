
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuAbout_icon: FC = (_, props) => {
    return (

        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            {...props}>
            <Path d="M26.0923 23.5117C25.4804 23.9604 24.8989 24.3866 24.2692 24.8483C24.1929 24.4666 24.1696 23.9926 23.9922 23.5883C23.8736 23.318 23.5348 22.9741 23.2961 22.9753C23.0006 22.9768 22.5879 23.232 22.4358 23.5002C22.072 24.1418 22.389 24.8358 23.1555 25.3356C22.4755 25.5845 21.7953 25.8331 21.0937 26.0894C21.0937 25.5615 21.1577 25.0209 21.0789 24.5026C20.957 23.7011 20.1505 23.4605 19.5685 24.0285C19.2999 24.2907 19.0859 24.6103 18.752 25.0209C18.6397 24.2047 18.5421 23.4949 18.4505 22.829C19.1708 22.679 19.8412 22.5955 20.4673 22.3796C20.6945 22.3013 20.8159 21.9068 20.9855 21.6566C20.7524 21.5005 20.5229 21.2176 20.2855 21.2105C19.3442 21.1827 18.3975 21.2023 17.4585 21.2773C16.2018 21.3777 14.9801 21.381 13.7636 20.9262C12.8199 20.5734 11.8196 20.6272 11.0086 21.2889C10.6942 21.5455 10.4228 22.0821 10.4405 22.4769C10.4645 23.016 11.0408 22.9912 11.4644 22.9558C12.1177 22.9012 12.7674 22.8025 13.5823 22.7024C13.0674 23.4539 12.6135 24.1161 12.1596 24.7786C11.8021 24.5347 11.497 24.2351 11.1332 24.1059C10.8147 23.9928 10.4301 24.0713 10.0746 24.0652C10.1028 24.4477 10.0416 24.8687 10.1812 25.2034C10.3679 25.6511 10.7103 26.032 11.0149 26.4848C9.91605 26.1556 8.86924 25.8419 7.88705 25.5476C8.17205 25.2324 8.60092 24.8876 8.85404 24.4403C9.08837 24.0262 9.13466 23.5026 9.28251 22.9581C8.11474 22.8769 7.61361 23.4937 7.18931 24.2079C6.50763 25.3553 6.51382 25.3603 5.48022 24.5288C5.33354 24.4108 5.19684 24.2801 4.97836 24.0871C5.94974 23.6875 6.65855 23.0937 6.85348 21.9454C5.60774 21.8818 4.9044 22.6397 4.30409 23.5426C4.19704 22.5677 4.0971 21.6573 3.99399 20.7183C4.32069 20.8231 4.66337 20.9566 5.01729 21.042C5.85371 21.2441 6.24736 20.8384 5.98903 20.0061C5.87371 19.6345 5.63326 19.3029 5.40457 18.8675H7.36647C7.36647 19.2786 7.34683 19.6817 7.37128 20.082C7.4048 20.631 7.54276 21.1839 8.1397 21.3185C8.43211 21.3844 8.84834 21.2758 9.09253 21.0896C9.5959 20.7057 9.56715 20.0904 9.36662 19.5746C9.09422 18.874 8.67505 18.2338 8.36125 17.5477C7.59014 15.8617 6.847 14.1626 6.08573 12.4719C5.2812 10.6852 4.39661 8.94755 2.81028 7.72193C1.98803 7.08664 1.0231 6.88897 0 6.98301C0.0753704 5.84381 1.23511 5.19586 2.24659 5.01473C3.29659 4.8267 4.26086 5.09816 4.81121 6.18003C5.23176 7.00674 5.6696 7.82448 6.08334 8.65464C6.85618 10.2053 7.78007 11.6682 9.26578 12.5727C10.0869 13.0726 11.0736 13.4047 12.0242 13.5459C13.3339 13.7405 14.7497 12.1519 14.6541 10.7957C14.61 10.1704 13.9063 9.4777 13.2405 9.40425C12.4549 9.3176 11.7116 9.81175 11.5192 10.5811C11.4269 10.9501 11.3927 11.334 11.301 11.906C10.426 11.2753 9.6114 10.688 8.66079 10.0027C9.10441 9.72113 9.39233 9.4863 9.71903 9.34175C10.4264 9.02875 10.4325 8.50486 10.2762 7.85581C10.1229 7.21915 9.76955 6.88868 9.13094 6.93975C8.6637 6.97711 8.2002 7.07212 7.73761 7.15603C7.51747 7.19597 7.30335 7.26995 6.96976 7.36004C7.20099 6.51205 7.39775 5.79041 7.59672 5.06078C9.03976 5.70809 10.0451 5.3545 10.6128 4C11.1937 4.25076 11.7754 4.50184 12.4543 4.79492C12.1599 5.14705 11.9478 5.3926 11.7446 5.64546C11.3152 6.1796 11.098 6.7867 11.3811 7.44139C11.4992 7.71455 11.805 8.07781 12.0333 8.0837C12.3104 8.09083 12.7497 7.82413 12.8475 7.56887C13.0989 6.91263 13.2004 6.19729 13.3868 5.39846C13.984 5.57512 14.6226 5.76402 15.3968 5.99306C14.9833 6.59891 14.6011 7.07361 14.3193 7.60327C14.148 7.92524 13.9431 8.4959 14.0862 8.66529C14.3515 8.97925 14.8716 9.26239 15.2664 9.23808C16.625 9.1544 17.2076 7.83366 16.4631 6.68282C16.3882 6.56701 16.3061 6.45593 16.2193 6.33107C16.5953 6.07611 16.9431 5.84031 17.3286 5.5789C17.5285 6.26124 17.3511 7.21719 18.3751 7.27628C18.649 7.29208 19.1129 7.02049 19.1945 6.7784C19.4376 6.05733 18.9872 5.57026 18.4108 5.22568C18.9315 4.93431 19.4331 4.65365 19.9584 4.35974C19.9426 4.34825 20.0049 4.37169 20.0058 4.39723C20.0516 5.7779 20.5547 6.03415 21.9054 5.32561C22.3312 5.10226 22.7182 4.80262 23.2177 4.47588V6.66986C22.4625 6.66986 21.6909 6.61142 20.9375 6.70503C20.7077 6.73358 20.4565 7.15107 20.3408 7.44191C20.0889 8.07491 20.7932 9.51786 21.5087 9.5862C21.0914 9.98129 20.5598 10.4846 20.0282 10.9878L20.2144 11.2549C20.1492 11.0436 20.0927 10.829 20.0172 10.6215C19.6999 9.7509 19.1732 9.34911 18.4006 9.37912C17.746 9.40456 16.7929 10.0925 16.6387 10.7439C16.2774 12.27 16.6558 13.1747 18.3831 13.3463C20.5474 13.5614 21.9902 12.6704 22.9714 10.7691C23.8102 9.14387 24.6643 7.52119 25.6229 5.96806C25.9782 5.39237 26.6145 4.96262 27.1946 4.57788C27.4401 4.415 27.9494 4.40667 28.2017 4.56012C28.8008 4.92441 29.3181 5.42729 30 5.98105C29.2977 6.08497 28.8308 6.10492 28.392 6.22798C26.9337 6.63693 26.3552 7.89084 25.9704 9.16286C25.5237 10.6396 25.3536 12.2003 24.9567 13.6954C24.6596 14.8146 24.3027 15.9474 23.7644 16.9604C23.4045 17.6376 22.5996 18.0573 22.1468 18.7027C21.8488 19.1275 21.7522 19.7413 21.6956 20.2844C21.6412 20.8065 22.0524 21.2028 22.5087 21.1881C22.8552 21.1769 23.312 20.8767 23.5003 20.5675C23.748 20.1609 23.8487 19.625 23.8883 19.1344C23.9385 18.5124 24.1187 18.1494 24.8033 18.1753C25.0739 18.1856 25.3489 18.0804 25.6835 18.0158C25.5279 18.4276 25.3816 18.7536 25.2812 19.0936C25.0872 19.7505 25.5055 20.2032 26.161 20.0199C26.5856 19.9012 26.9856 19.6921 27.4004 19.522C27.326 20.4142 27.2536 21.2813 27.1719 22.2617C26.8686 21.9819 26.6133 21.7296 26.3406 21.4982C25.7637 21.0087 25.2727 20.9832 24.9055 21.4079C24.5321 21.8398 24.6261 22.325 25.2015 22.818C25.5055 23.0784 25.8328 23.3109 26.0923 23.5117ZM9.88373 15.7864C10.4205 16.4928 10.8544 17.1657 11.3927 17.7374C11.7723 18.1406 12.2522 18.5125 12.7585 18.7165C15.9379 19.9974 19.9157 18.9279 21.7209 14.7942C21.3738 14.9343 21.1011 15.0495 20.8249 15.1551C19.5715 15.6342 18.3009 15.9767 16.9876 15.4153C16.5369 15.2226 16.1266 14.9332 15.6957 14.6921C15.3606 14.5045 15.1481 14.5354 14.8914 14.9106C14.3295 15.7316 13.5483 16.2627 12.5053 16.1587C11.6686 16.0752 10.8385 15.9248 9.88373 15.7864Z" fill="#6A89A8" />
        </Svg>
    );
};

export default MenuAbout_icon;
