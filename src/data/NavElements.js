const navElements = [
    {
        label: "Home",
        activeIcon: (
            <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_2709_41324)">
                    <path
                        d="M14.0282 14.0512C13.7596 15.4672 12.522 16.4922 11.0807 16.4922H4.39756C2.95626 16.4922 1.71866 15.4672 1.4501 14.0512L0.34496 8.22411C0.133498 7.10913 0.569295 5.97026 1.47106 5.28127L5.91778 1.88378C6.99305 1.06223 8.48522 1.06223 9.56049 1.88379L14.0072 5.28127C14.909 5.97027 15.3448 7.10913 15.1333 8.22411L14.0282 14.0512Z"
                        fill="#00FF91"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2709_41324">
                        <rect
                            y="0.492188"
                            width="15.4783"
                            height="16"
                            rx="3"
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2709_129049)">
                <path d="M13.5652 16.4922H1.91304L0 6.40523L7.73913 0.492188L15.4783 6.40523L13.5652 16.4922Z" fill="#669DD5" />
            </g>
            <defs>
                <clipPath id="clip0_2709_129049">
                    <rect y="0.492188" width="15.4783" height="16" rx="3" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        to: '/'
    },

    {
        label: "Cards",
        activeIcon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.67813 3.69238C3.25378 3.69238 2.84681 3.86095 2.54675 4.16101C2.2467 4.46107 2.07813 4.86804 2.07812 5.29238V6.09238H14.8781V5.29238C14.8781 4.86804 14.7096 4.46107 14.4095 4.16101C14.1094 3.86095 13.7025 3.69238 13.2781 3.69238H3.67813Z" fill="#00FF91" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8781 8.49219H2.07812V12.4922C2.07813 12.9165 2.2467 13.3235 2.54675 13.6236C2.84681 13.9236 3.25378 14.0922 3.67813 14.0922H13.2781C13.7025 14.0922 14.1094 13.9236 14.4095 13.6236C14.7096 13.3235 14.8781 12.9165 14.8781 12.4922V8.49219ZM3.67813 11.6922C3.67813 11.48 3.76241 11.2765 3.91244 11.1265C4.06247 10.9765 4.26595 10.8922 4.47813 10.8922H5.27813C5.4903 10.8922 5.69378 10.9765 5.84381 11.1265C5.99384 11.2765 6.07812 11.48 6.07812 11.6922C6.07812 11.9044 5.99384 12.1078 5.84381 12.2579C5.69378 12.4079 5.4903 12.4922 5.27813 12.4922H4.47813C4.26595 12.4922 4.06247 12.4079 3.91244 12.2579C3.76241 12.1078 3.67813 11.9044 3.67813 11.6922ZM7.67812 10.8922C7.46595 10.8922 7.26247 10.9765 7.11244 11.1265C6.96241 11.2765 6.87813 11.48 6.87813 11.6922C6.87813 11.9044 6.96241 12.1078 7.11244 12.2579C7.26247 12.4079 7.46595 12.4922 7.67812 12.4922H8.47813C8.6903 12.4922 8.89378 12.4079 9.04381 12.2579C9.19384 12.1078 9.27813 11.9044 9.27813 11.6922C9.27813 11.48 9.19384 11.2765 9.04381 11.1265C8.89378 10.9765 8.6903 10.8922 8.47813 10.8922H7.67812Z" fill="#00FF91" />
            </svg>

        ),
        icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.67813 3.69238C3.25378 3.69238 2.84681 3.86095 2.54675 4.16101C2.2467 4.46107 2.07813 4.86804 2.07812 5.29238V6.09238H14.8781V5.29238C14.8781 4.86804 14.7096 4.46107 14.4095 4.16101C14.1094 3.86095 13.7025 3.69238 13.2781 3.69238H3.67813Z" fill="#669DD5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.8781 8.49219H2.07812V12.4922C2.07813 12.9165 2.2467 13.3235 2.54675 13.6236C2.84681 13.9236 3.25378 14.0922 3.67813 14.0922H13.2781C13.7025 14.0922 14.1094 13.9236 14.4095 13.6236C14.7096 13.3235 14.8781 12.9165 14.8781 12.4922V8.49219ZM3.67813 11.6922C3.67813 11.48 3.76241 11.2765 3.91244 11.1265C4.06247 10.9765 4.26595 10.8922 4.47813 10.8922H5.27813C5.4903 10.8922 5.69378 10.9765 5.84381 11.1265C5.99384 11.2765 6.07812 11.48 6.07812 11.6922C6.07812 11.9044 5.99384 12.1078 5.84381 12.2579C5.69378 12.4079 5.4903 12.4922 5.27813 12.4922H4.47813C4.26595 12.4922 4.06247 12.4079 3.91244 12.2579C3.76241 12.1078 3.67813 11.9044 3.67813 11.6922ZM7.67812 10.8922C7.46595 10.8922 7.26247 10.9765 7.11244 11.1265C6.96241 11.2765 6.87813 11.48 6.87813 11.6922C6.87813 11.9044 6.96241 12.1078 7.11244 12.2579C7.26247 12.4079 7.46595 12.4922 7.67812 12.4922H8.47813C8.6903 12.4922 8.89378 12.4079 9.04381 12.2579C9.19384 12.1078 9.27813 11.9044 9.27813 11.6922C9.27813 11.48 9.19384 11.2765 9.04381 11.1265C8.89378 10.9765 8.6903 10.8922 8.47813 10.8922H7.67812Z" fill="#669DD5" />
        </svg>,
        to: '/cards',
        // linkDisabled: true

    },
    {
        label: "Transactions",
        activeIcon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.47852 1.49219C7.19785 1.49219 5.93452 1.56619 4.69185 1.71019C3.69385 1.82619 2.97852 2.68352 2.97852 3.66352V14.9922C2.97853 15.0739 2.99859 15.1544 3.03692 15.2266C3.07525 15.2988 3.13069 15.3604 3.19839 15.4062C3.26608 15.452 3.34397 15.4805 3.42523 15.4892C3.50649 15.4979 3.58865 15.4866 3.66452 15.4562L5.97852 14.5309L8.29318 15.4562C8.41217 15.5037 8.54486 15.5037 8.66385 15.4562L10.9785 14.5309L13.2925 15.4562C13.3684 15.4866 13.4505 15.4979 13.5318 15.4892C13.6131 15.4805 13.6909 15.452 13.7586 15.4062C13.8263 15.3604 13.8818 15.2988 13.9201 15.2266C13.9584 15.1544 13.9785 15.0739 13.9785 14.9922V3.66352C13.9785 2.68352 13.2632 1.82619 12.2652 1.71019C11.0082 1.56462 9.74388 1.49183 8.47852 1.49219ZM10.8318 6.34552C10.9202 6.25074 10.9683 6.12537 10.966 5.99584C10.9637 5.86631 10.9112 5.74272 10.8196 5.65111C10.728 5.5595 10.6044 5.50702 10.4749 5.50474C10.3453 5.50245 10.22 5.55054 10.1252 5.63886L6.12518 9.63886C6.07606 9.68463 6.03666 9.73983 6.00933 9.80116C5.982 9.8625 5.96731 9.92871 5.96612 9.99584C5.96494 10.063 5.97729 10.1297 6.00243 10.1919C6.02758 10.2542 6.06501 10.3107 6.11249 10.3582C6.15997 10.4057 6.21653 10.4431 6.27878 10.4683C6.34104 10.4934 6.40773 10.5058 6.47486 10.5046C6.542 10.5034 6.60821 10.4887 6.66954 10.4614C6.73087 10.434 6.78607 10.3946 6.83185 10.3455L10.8318 6.34552ZM6.22852 6.49219C6.22852 6.29328 6.30753 6.10251 6.44819 5.96186C6.58884 5.82121 6.7796 5.74219 6.97852 5.74219C7.17743 5.74219 7.36819 5.82121 7.50885 5.96186C7.6495 6.10251 7.72852 6.29328 7.72852 6.49219C7.72852 6.6911 7.6495 6.88187 7.50885 7.02252C7.36819 7.16317 7.17743 7.24219 6.97852 7.24219C6.7796 7.24219 6.58884 7.16317 6.44819 7.02252C6.30753 6.88187 6.22852 6.6911 6.22852 6.49219ZM9.97852 8.74219C9.7796 8.74219 9.58884 8.82121 9.44819 8.96186C9.30753 9.10251 9.22852 9.29328 9.22852 9.49219C9.22852 9.6911 9.30753 9.88187 9.44819 10.0225C9.58884 10.1632 9.7796 10.2422 9.97852 10.2422C10.1774 10.2422 10.3682 10.1632 10.5088 10.0225C10.6495 9.88187 10.7285 9.6911 10.7285 9.49219C10.7285 9.29328 10.6495 9.10251 10.5088 8.96186C10.3682 8.82121 10.1774 8.74219 9.97852 8.74219Z" fill="#00FF91" />
            </svg>

        ),
        icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.47852 1.49219C7.19785 1.49219 5.93452 1.56619 4.69185 1.71019C3.69385 1.82619 2.97852 2.68352 2.97852 3.66352V14.9922C2.97853 15.0739 2.99859 15.1544 3.03692 15.2266C3.07525 15.2988 3.13069 15.3604 3.19839 15.4062C3.26608 15.452 3.34397 15.4805 3.42523 15.4892C3.50649 15.4979 3.58865 15.4866 3.66452 15.4562L5.97852 14.5309L8.29318 15.4562C8.41217 15.5037 8.54486 15.5037 8.66385 15.4562L10.9785 14.5309L13.2925 15.4562C13.3684 15.4866 13.4505 15.4979 13.5318 15.4892C13.6131 15.4805 13.6909 15.452 13.7586 15.4062C13.8263 15.3604 13.8818 15.2988 13.9201 15.2266C13.9584 15.1544 13.9785 15.0739 13.9785 14.9922V3.66352C13.9785 2.68352 13.2632 1.82619 12.2652 1.71019C11.0082 1.56462 9.74388 1.49183 8.47852 1.49219ZM10.8318 6.34552C10.9202 6.25074 10.9683 6.12537 10.966 5.99584C10.9637 5.86631 10.9112 5.74272 10.8196 5.65111C10.728 5.5595 10.6044 5.50702 10.4749 5.50474C10.3453 5.50245 10.22 5.55054 10.1252 5.63886L6.12518 9.63886C6.07606 9.68463 6.03666 9.73983 6.00933 9.80116C5.982 9.8625 5.96731 9.92871 5.96612 9.99584C5.96494 10.063 5.97729 10.1297 6.00243 10.1919C6.02758 10.2542 6.06501 10.3107 6.11249 10.3582C6.15997 10.4057 6.21653 10.4431 6.27878 10.4683C6.34104 10.4934 6.40773 10.5058 6.47486 10.5046C6.542 10.5034 6.60821 10.4887 6.66954 10.4614C6.73087 10.434 6.78607 10.3946 6.83185 10.3455L10.8318 6.34552ZM6.22852 6.49219C6.22852 6.29328 6.30753 6.10251 6.44819 5.96186C6.58884 5.82121 6.7796 5.74219 6.97852 5.74219C7.17743 5.74219 7.36819 5.82121 7.50885 5.96186C7.6495 6.10251 7.72852 6.29328 7.72852 6.49219C7.72852 6.6911 7.6495 6.88187 7.50885 7.02252C7.36819 7.16317 7.17743 7.24219 6.97852 7.24219C6.7796 7.24219 6.58884 7.16317 6.44819 7.02252C6.30753 6.88187 6.22852 6.6911 6.22852 6.49219ZM9.97852 8.74219C9.7796 8.74219 9.58884 8.82121 9.44819 8.96186C9.30753 9.10251 9.22852 9.29328 9.22852 9.49219C9.22852 9.6911 9.30753 9.88187 9.44819 10.0225C9.58884 10.1632 9.7796 10.2422 9.97852 10.2422C10.1774 10.2422 10.3682 10.1632 10.5088 10.0225C10.6495 9.88187 10.7285 9.6911 10.7285 9.49219C10.7285 9.29328 10.6495 9.10251 10.5088 8.96186C10.3682 8.82121 10.1774 8.74219 9.97852 8.74219Z" fill="#669DD5" />
        </svg>,
        to: '/transactions'

    },
    {
        label: "Settings",
        activeIcon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.86381 1.99219C7.25247 1.99219 6.73114 2.43419 6.63047 3.03685L6.51181 3.75152C6.49847 3.83152 6.43514 3.92485 6.31381 3.98352C6.08537 4.09333 5.86563 4.22036 5.65647 4.36352C5.54581 4.44019 5.43381 4.44752 5.35647 4.41885L4.67847 4.16419C4.4013 4.06035 4.09627 4.05823 3.81768 4.15821C3.53909 4.2582 3.30502 4.45379 3.15714 4.71019L2.54247 5.77485C2.39453 6.03109 2.34228 6.3315 2.39502 6.62265C2.44775 6.91379 2.60205 7.17679 2.83047 7.36485L3.39047 7.82619C3.45381 7.87819 3.50381 7.97885 3.49314 8.11285C3.47414 8.36561 3.47414 8.61943 3.49314 8.87219C3.50314 9.00552 3.45381 9.10685 3.39114 9.15885L2.83047 9.62019C2.60205 9.80826 2.44775 10.0713 2.39502 10.3624C2.34228 10.6535 2.39453 10.9539 2.54247 11.2102L3.15714 12.2749C3.30513 12.5311 3.53924 12.7266 3.81782 12.8264C4.0964 12.9263 4.40137 12.9241 4.67847 12.8202L5.35781 12.5655C5.43447 12.5369 5.54647 12.5449 5.65781 12.6202C5.86581 12.7629 6.08514 12.8902 6.31447 13.0002C6.43581 13.0589 6.49914 13.1522 6.51247 13.2335L6.63114 13.9475C6.73181 14.5502 7.25314 14.9922 7.86447 14.9922H9.09381C9.70447 14.9922 10.2265 14.5502 10.3271 13.9475L10.4458 13.2329C10.4591 13.1529 10.5218 13.0595 10.6438 13.0002C10.8731 12.8902 11.0925 12.7629 11.3005 12.6202C11.4118 12.5442 11.5238 12.5369 11.6005 12.5655L12.2805 12.8202C12.5575 12.9237 12.8622 12.9256 13.1405 12.8256C13.4188 12.7257 13.6526 12.5303 13.8005 12.2742L14.4158 11.2095C14.5637 10.9533 14.616 10.6529 14.5633 10.3617C14.5105 10.0706 14.3562 9.80759 14.1278 9.61952L13.5678 9.15819C13.5045 9.10619 13.4545 9.00552 13.4651 8.87152C13.4841 8.61876 13.4841 8.36494 13.4651 8.11219C13.4545 7.97885 13.5045 7.87752 13.5671 7.82552L14.1271 7.36419C14.5991 6.97619 14.7211 6.30419 14.4158 5.77419L13.8011 4.70952C13.6531 4.45325 13.419 4.25779 13.1405 4.15793C12.8619 4.05807 12.5569 4.06029 12.2798 4.16419L11.5998 4.41885C11.5238 4.44752 11.4118 4.43952 11.3005 4.36352C11.0915 4.22038 10.872 4.09335 10.6438 3.98352C10.5218 3.92552 10.4591 3.83219 10.4458 3.75152L10.3265 3.03685C10.2779 2.7449 10.1272 2.47966 9.90136 2.28837C9.67552 2.09707 9.38912 1.99211 9.09314 1.99219H7.86447H7.86381ZM8.47847 10.9922C9.14151 10.9922 9.7774 10.7288 10.2462 10.26C10.7151 9.79111 10.9785 9.15523 10.9785 8.49219C10.9785 7.82915 10.7151 7.19326 10.2462 6.72442C9.7774 6.25558 9.14151 5.99219 8.47847 5.99219C7.81543 5.99219 7.17955 6.25558 6.71071 6.72442C6.24186 7.19326 5.97847 7.82915 5.97847 8.49219C5.97847 9.15523 6.24186 9.79111 6.71071 10.26C7.17955 10.7288 7.81543 10.9922 8.47847 10.9922Z" fill="#00FF91" />
            </svg>

        ),
        icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.86381 1.99219C7.25247 1.99219 6.73114 2.43419 6.63047 3.03685L6.51181 3.75152C6.49847 3.83152 6.43514 3.92485 6.31381 3.98352C6.08537 4.09333 5.86563 4.22036 5.65647 4.36352C5.54581 4.44019 5.43381 4.44752 5.35647 4.41885L4.67847 4.16419C4.4013 4.06035 4.09627 4.05823 3.81768 4.15821C3.53909 4.2582 3.30502 4.45379 3.15714 4.71019L2.54247 5.77485C2.39453 6.03109 2.34228 6.3315 2.39502 6.62265C2.44775 6.91379 2.60205 7.17679 2.83047 7.36485L3.39047 7.82619C3.45381 7.87819 3.50381 7.97885 3.49314 8.11285C3.47414 8.36561 3.47414 8.61943 3.49314 8.87219C3.50314 9.00552 3.45381 9.10685 3.39114 9.15885L2.83047 9.62019C2.60205 9.80826 2.44775 10.0713 2.39502 10.3624C2.34228 10.6535 2.39453 10.9539 2.54247 11.2102L3.15714 12.2749C3.30513 12.5311 3.53924 12.7266 3.81782 12.8264C4.0964 12.9263 4.40137 12.9241 4.67847 12.8202L5.35781 12.5655C5.43447 12.5369 5.54647 12.5449 5.65781 12.6202C5.86581 12.7629 6.08514 12.8902 6.31447 13.0002C6.43581 13.0589 6.49914 13.1522 6.51247 13.2335L6.63114 13.9475C6.73181 14.5502 7.25314 14.9922 7.86447 14.9922H9.09381C9.70447 14.9922 10.2265 14.5502 10.3271 13.9475L10.4458 13.2329C10.4591 13.1529 10.5218 13.0595 10.6438 13.0002C10.8731 12.8902 11.0925 12.7629 11.3005 12.6202C11.4118 12.5442 11.5238 12.5369 11.6005 12.5655L12.2805 12.8202C12.5575 12.9237 12.8622 12.9256 13.1405 12.8256C13.4188 12.7257 13.6526 12.5303 13.8005 12.2742L14.4158 11.2095C14.5637 10.9533 14.616 10.6529 14.5633 10.3617C14.5105 10.0706 14.3562 9.80759 14.1278 9.61952L13.5678 9.15819C13.5045 9.10619 13.4545 9.00552 13.4651 8.87152C13.4841 8.61876 13.4841 8.36494 13.4651 8.11219C13.4545 7.97885 13.5045 7.87752 13.5671 7.82552L14.1271 7.36419C14.5991 6.97619 14.7211 6.30419 14.4158 5.77419L13.8011 4.70952C13.6531 4.45325 13.419 4.25779 13.1405 4.15793C12.8619 4.05807 12.5569 4.06029 12.2798 4.16419L11.5998 4.41885C11.5238 4.44752 11.4118 4.43952 11.3005 4.36352C11.0915 4.22038 10.872 4.09335 10.6438 3.98352C10.5218 3.92552 10.4591 3.83219 10.4458 3.75152L10.3265 3.03685C10.2779 2.7449 10.1272 2.47966 9.90136 2.28837C9.67552 2.09707 9.38912 1.99211 9.09314 1.99219H7.86447H7.86381ZM8.47847 10.9922C9.14151 10.9922 9.7774 10.7288 10.2462 10.26C10.7151 9.79111 10.9785 9.15523 10.9785 8.49219C10.9785 7.82915 10.7151 7.19326 10.2462 6.72442C9.7774 6.25558 9.14151 5.99219 8.47847 5.99219C7.81543 5.99219 7.17955 6.25558 6.71071 6.72442C6.24186 7.19326 5.97847 7.82915 5.97847 8.49219C5.97847 9.15523 6.24186 9.79111 6.71071 10.26C7.17955 10.7288 7.81543 10.9922 8.47847 10.9922Z" fill="#669DD5" />
        </svg>,
        to: '/settings'

    },

];



export default navElements