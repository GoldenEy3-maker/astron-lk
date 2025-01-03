export const Icons = {
  Logo: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M2.48779 1.48781H1.48779V2.48781V41.5122V42.5122H2.48779H41.5122H42.5122V41.5122V2.48781V1.48781H41.5122H2.48779Z"
          fill="#137EC1"
          stroke="white"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.47332 34.5834L6.91234 32.6468H6.89429L6.28942 34.5834H7.47283H7.47332ZM5.95624 30.5429H7.84063L10.1201 36.8283H8.12112L7.85771 35.9307H5.86844L5.58844 36.8283H3.65088L5.95624 30.5429ZM11.8645 34.7156C11.8645 34.8742 11.8904 35.0151 11.9343 35.1293C12.0748 35.5078 12.4953 35.5878 12.8548 35.5878C13.1704 35.5878 13.6523 35.4815 13.6523 35.0151C13.6523 34.6932 13.3806 34.6054 12.3026 34.2932C11.3123 34.0151 10.1806 33.742 10.1806 32.4737C10.1806 31.0229 11.4172 30.3956 12.706 30.3956C14.0645 30.3956 15.265 30.9166 15.3182 32.4483H13.4948C13.5299 32.2107 13.4245 32.0532 13.2665 31.9473C13.1089 31.8327 12.8899 31.7888 12.6972 31.7888C12.4338 31.7888 12.0045 31.86 12.0045 32.2117C12.0387 32.6605 12.9314 32.7581 13.8192 33.0049C14.7021 33.2517 15.5801 33.6654 15.5801 34.8185C15.5801 36.4561 14.0777 36.9844 12.6875 36.9844C11.9753 36.9844 9.95088 36.7288 9.93137 34.722H11.8601M17.4197 32.1561H15.6684V30.5449H21.1036V32.1561H19.3504V36.8293H17.4216V32.1551M23.5231 33.2907H24.5309C24.8904 33.2907 25.3811 33.2288 25.3811 32.6654C25.3811 32.2693 25.1665 32.041 24.4299 32.041H23.5275V33.2907H23.5231ZM21.5943 30.5444H25.2675C26.3631 30.5444 27.3099 31.1512 27.3099 32.3395C27.3099 32.9912 27.0114 33.6776 26.3719 33.9151C26.8972 34.1181 27.2221 34.699 27.2919 35.4824C27.3182 35.7898 27.327 36.5361 27.5026 36.8288H25.5738C25.4772 36.5117 25.4421 36.1849 25.4158 35.8581C25.3636 35.259 25.3109 34.6346 24.5484 34.6346H23.5231V36.8293H21.5943V30.5429V30.5444ZM30.8597 35.4127C31.3504 35.4127 32.1045 35.0859 32.1045 33.6868C32.1045 32.2868 31.3504 31.9615 30.8597 31.9615C30.3689 31.9615 29.6148 32.2883 29.6148 33.6883C29.6148 35.0883 30.3689 35.4137 30.8597 35.4137V35.4127ZM30.8597 30.3946C32.7621 30.3946 34.0328 31.7654 34.0328 33.6873C34.0328 35.6044 32.7616 36.9761 30.8597 36.9761C28.9572 36.9761 27.6865 35.6024 27.6865 33.6834C27.6865 31.7644 28.9572 30.3917 30.8597 30.3917V30.3946ZM34.6372 30.541H36.6099L38.4333 33.9039H38.4504V30.5415H40.2748V36.8293H38.3982L36.4782 33.3951H36.4606V36.8283H34.6372V30.5429M4.01966 28.5707L22.1709 7.09756L39.9075 28.5707H32.9836L32.7494 20.0195L22.0445 16.2195L11.1519 20.2098L10.986 28.5707"
          fill="white"
        />
      </svg>
    );
  },
  Search: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M22 22L20 20M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Favorites: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M12.89 5.88H5.10999C3.39999 5.88 2 7.27999 2 8.98999V20.35C2 21.8 3.04 22.42 4.31 21.71L8.23999 19.52C8.65999 19.29 9.34 19.29 9.75 19.52L13.68 21.71C14.95 22.42 15.99 21.8 15.99 20.35V8.98999C16 7.27999 14.6 5.88 12.89 5.88Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8.98999V20.35C16 21.8 14.96 22.41 13.69 21.71L9.76001 19.52C9.34001 19.29 8.65999 19.29 8.23999 19.52L4.31 21.71C3.04 22.41 2 21.8 2 20.35V8.98999C2 7.27999 3.39999 5.88 5.10999 5.88H12.89C14.6 5.88 16 7.27999 16 8.98999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  User: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M11.9998 3.25068C14.1234 3.25068 16.3755 5.03938 16.3755 6.37444V9.49948C16.3755 10.7023 15.8752 13.0035 14.5336 14.06C14.3654 14.1924 14.2339 14.3658 14.1519 14.5636C14.0699 14.7614 14.0401 14.977 14.0653 15.1896C14.1165 15.6227 14.3895 15.9969 14.7853 16.1789L20.2275 18.7596C20.27 18.779 20.749 18.8593 20.749 19.5284L20.7496 20.7491L3.25062 20.75V19.4809C3.25062 18.9838 3.62363 18.8277 3.77277 18.759L9.26432 16.1673C9.65828 15.9866 9.93 15.6139 9.98284 15.184C10.036 14.7541 9.86246 14.3273 9.52448 14.0562C8.22537 13.0132 7.62006 10.7204 7.62006 9.49948V6.37444C7.62035 5.06816 9.89498 3.25068 11.9998 3.25068ZM11.9998 2C9.23839 2 6.36944 4.30466 6.36944 6.37446V9.4995C6.36944 10.8649 6.99257 13.6276 8.74159 15.0314L3.24971 17.6234C3.24971 17.6234 2 18.1802 2 18.8734V20.75C2 21.4406 2.55966 22 3.24969 22H20.7499C21.4406 22 22 21.4406 22 20.75V18.8734C22 18.1386 20.7499 17.6234 20.7499 17.6234L15.3078 15.0427C17.0402 13.6792 17.6265 11.0006 17.6265 9.49948V6.37444C17.6265 4.30462 14.7609 2.00002 11.9998 2.00002V2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.2"
        />
      </svg>
    );
  },
  Danger: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M12 9V14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9999 21.41H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999V21.41Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9946 17H12.0036"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Check: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M0.833496 2.90476L4.01977 6L9.16683 1"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  EyeSlash: (props: React.ComponentProps<"svg">) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M10.8974 7.1025L7.10244 10.8975C6.61494 10.41 6.31494 9.7425 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C9.74244 6.315 10.4099 6.615 10.8974 7.1025Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3649 4.3275C12.0524 3.3375 10.5524 2.7975 8.99988 2.7975C6.35238 2.7975 3.88488 4.3575 2.16738 7.0575C1.49238 8.115 1.49238 9.8925 2.16738 10.95C2.75988 11.88 3.44988 12.6825 4.19988 13.3275"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.31494 14.6475C7.16994 15.0075 8.07744 15.2025 8.99994 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.885 16.5074 8.10749 15.8324 7.04999C15.5849 6.65999 15.3149 6.29249 15.0374 5.94749"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6326 9.52499C11.4376 10.5825 10.5751 11.445 9.51758 11.64"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.1025 10.8975L1.5 16.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 1.5L10.8975 7.1025"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};
