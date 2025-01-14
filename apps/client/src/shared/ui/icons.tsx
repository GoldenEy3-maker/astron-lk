export const Icons = {
  Logo: (props: React.SVGProps<SVGSVGElement>) => {
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
          fill="currentColor"
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
  Search: (props: React.SVGProps<SVGSVGElement>) => {
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
  Favorites: (props: React.SVGProps<SVGSVGElement>) => {
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
  User: (props: React.SVGProps<SVGSVGElement>) => {
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
  Danger: (props: React.SVGProps<SVGSVGElement>) => {
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
  CheckCircle: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Check: (props: React.SVGProps<SVGSVGElement>) => {
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  CheckV2: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="13"
        viewBox="0 0 18 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M1.5 7.25L6 11.75L16.5 1.25"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
  ChevronDown: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path d="M0 0.043396H8L4 3.95663L0 0.043396Z" fill="currentColor" />
      </svg>
    );
  },
  ChevronLeft: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="13"
        height="18"
        viewBox="0 0 13 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M11.5914 17.5875L1.15971 9.0443C0.914531 8.8435 0.915618 8.46818 1.16196 8.26881L11.0233 0.287706C11.4302 -0.0415805 12.0054 0.39645 11.7962 0.876232L8.49487 8.44649C8.43706 8.57906 8.43949 8.73018 8.50152 8.86083L12.3599 16.9862C12.5888 17.4683 12.0043 17.9257 11.5914 17.5875Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  ChevronRight: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="13"
        height="18"
        viewBox="0 0 13 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M1.40857 17.5875L11.8403 9.0443C12.0855 8.8435 12.0844 8.46818 11.838 8.26881L1.97668 0.287706C1.56982 -0.0415805 0.994584 0.39645 1.20381 0.876232L4.50513 8.44649C4.56294 8.57906 4.56051 8.73018 4.49848 8.86083L0.640107 16.9862C0.411175 17.4683 0.995667 17.9257 1.40857 17.5875Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  Cup: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M21.8297 24C22.1878 24 22.4847 23.7031 22.4847 23.345C22.4847 22.9869 22.1878 22.69 21.8297 22.69H19.2621C18.4498 22.5066 16.6507 21.9039 15.8734 20.1921C15.1398 18.5764 15.5152 16.4104 16.9737 13.7467C17.0349 13.7642 17.0961 13.7729 17.1572 13.7729C17.1747 13.7729 17.1921 13.7729 17.2008 13.7729C20.3449 13.5458 22.6943 11.8865 23.9956 8.97818C24.9912 6.74237 25 4.52402 25 4.42795C25 3.69432 24.3799 3.10047 23.6289 3.10047H20.5371C20.7205 1.64196 20.7117 0.73366 20.703 0.63759C20.703 0.279512 20.4061 0 20.048 0H5.75982C5.40174 0 5.11353 0.288245 5.1048 0.63759C5.1048 0.73366 5.08739 1.63323 5.27953 3.10047H2.10048C1.34066 3.10047 0.729248 3.69432 0.729248 4.42795C0.729248 4.52402 0.738012 6.74237 1.74238 8.97818C3.04368 11.8952 5.39305 13.5546 8.53715 13.7729C8.55462 13.7729 8.57202 13.7729 8.58076 13.7729C8.66809 13.7729 8.75546 13.7555 8.83407 13.7205C10.31 16.393 10.6856 18.5677 9.95199 20.1921C9.1747 21.9039 7.37557 22.5066 6.56335 22.69H3.91704C3.55896 22.69 3.26202 22.9869 3.26202 23.345C3.26202 23.7031 3.55896 24 3.91704 24H21.8209H21.8297ZM23.6375 4.41052C23.6375 4.41052 23.69 4.42796 23.6987 4.43669C23.6987 4.58516 23.6725 6.49785 22.8078 8.44544C21.786 10.7424 20.0568 12.0786 17.6812 12.4105C19.2009 9.32752 19.9607 6.51527 20.345 4.41921H23.6462L23.6375 4.41052ZM2.94762 8.44544C2.08299 6.49785 2.05677 4.58516 2.04803 4.43669C2.04803 4.43669 2.07429 4.41052 2.10923 4.41052H5.48913C5.87341 6.51532 6.63317 9.33626 8.15282 12.4192C5.73361 12.1048 3.97818 10.7686 2.93888 8.44544H2.94762ZM19.393 1.31004C19.3056 2.98689 18.7992 7.74673 15.8647 13.0655C14.1703 16.131 13.7685 18.7074 14.6855 20.7336C15.0698 21.5807 15.6288 22.2183 16.2402 22.69H9.61137C10.214 22.2183 10.7817 21.5807 11.166 20.7336C12.083 18.7074 11.6899 16.131 9.98686 13.0655C7.05236 7.7642 6.54588 2.99563 6.45855 1.31004H19.4017H19.393Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  EyeSlash: (props: React.SVGProps<SVGSVGElement>) => {
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
  ExternalLink: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M6.62507 3.58113L14.1031 3.89691M14.1031 3.89691L14.4189 11.3749M14.1031 3.89691L3.89691 14.1031"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Academy: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M9.92833 2.52143L3.53683 6.37876C1.48772 7.61546 1.48772 10.3833 3.53683 11.62L9.92833 15.4773C11.075 16.1742 12.9648 16.1742 14.1115 15.4773L20.4711 11.62C22.5096 10.3833 22.5096 7.62528 20.4711 6.38858L14.1115 2.53125C12.9648 1.82456 11.075 1.82456 9.92833 2.52143Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.01097 13L5 17.7347C5 19.0168 6.07524 20.3898 7.39185 20.7936L10.8918 21.8637C11.4953 22.0454 12.4937 22.0454 13.1082 21.8637L16.6082 20.7936C17.9248 20.3898 19 19.0168 19 17.7347V13.0505"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 15V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  ArrowDown: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M1 5.5L4 8.5M4 8.5L7 5.5M4 8.5V0.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  ArrowRightLong: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="28"
        height="17"
        viewBox="0 0 28 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M20.3333 1.24536L27 8.49991M27 8.49991L20.3333 15.7545M27 8.49991L1 8.49991"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M20.799 8.99999L1 8.99999M20.799 8.99999L13.537 16.262M20.799 8.99999L13.537 1.73801"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  ArrowUp: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M8.36847 19L8.36847 1.54141"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7.63184L8.36844 1.00028L1.73689 7.63183"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Bookmark: ({ ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M15.447 5.5H8.70113C7.21061 5.5 6 6.71761 6 8.20113V18.0609C6 19.3205 6.90271 19.8524 8.00835 19.2436L11.4232 17.3472C11.7871 17.1442 12.3749 17.1442 12.7318 17.3472L16.1467 19.2436C17.2524 19.8594 18.1551 19.3275 18.1551 18.0609V8.20113C18.1481 6.71761 16.9375 5.5 15.447 5.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Diagram: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M2 2V19C2 20.66 3.34 22 5 22H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  DocumentDownload: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M9 11V17L11 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 17L7 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Document: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  ExternalResource: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M12.9 11.0998L20.28 3.71982"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 7.32V3H16.68"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21H14.7C19.2 21 21 19.2 21 14.7V12.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Factory: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M2 22H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.95001 22L3.00002 9.96999C3.00002 9.35999 3.29001 8.78004 3.77001 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16.25V17.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 7.5H13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Graph: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M18.32 12C20.92 12 22 11 21.04 7.72C20.39 5.51 18.49 3.61 16.28 2.96C13 2 12 3.08 12 5.68V8.56C12 11 13 12 15 12H18.32Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 14.7C19.07 19.33 14.63 22.69 9.57999 21.87C5.78999 21.26 2.73999 18.21 2.11999 14.42C1.30999 9.39 4.64999 4.95 9.25999 4.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Home: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M9.02 2.84L3.63 7.04C2.73 7.74 2 9.23 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29 21.19 7.74 20.2 7.05L14.02 2.72C12.62 1.74 10.37 1.79 9.02 2.84Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17.99V14.99"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Notebook: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 17H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Notify: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  PersonalCard: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 16H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11.29C9.49964 11.29 10.31 10.4796 10.31 9.48C10.31 8.48036 9.49964 7.67 8.5 7.67C7.50037 7.67 6.69 8.48036 6.69 9.48C6.69 10.4796 7.50037 11.29 8.5 11.29Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  StatusUp: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M6.88 18.15V16.08"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 18.15V14.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.12 18.15V11.93"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.12 5.85001L16.66 6.39001C14.11 9.37001 10.69 11.48 6.88 12.43"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.19 5.85001H17.12V8.77001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  X: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M1 1.5L15 15.5M15 1.5L1 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Dzen: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <g clipPath="url(#clip0_1757_16971)">
          <path
            d="M10.7357 10.7357C9.32143 12.195 9.21857 14.0143 9.09643 18C12.8121 18 15.3771 17.9871 16.7014 16.7014C17.9871 15.3771 18 12.69 18 9.09643C14.0143 9.225 12.195 9.32143 10.7357 10.7357ZM0 9.09643C0 12.69 0.0128571 15.3771 1.29857 16.7014C2.62286 17.9871 5.18786 18 8.90357 18C8.775 14.0143 8.67857 12.195 7.26429 10.7357C5.805 9.32143 3.98571 9.21857 0 9.09643ZM8.90357 0C5.19429 0 2.62286 0.0128571 1.29857 1.29857C0.0128571 2.62286 0 5.31 0 8.90357C3.98571 8.775 5.805 8.67857 7.26429 7.26429C8.67857 5.805 8.78143 3.98571 8.90357 0ZM10.7357 7.26429C9.32143 5.805 9.21857 3.98571 9.09643 0C12.8121 0 15.3771 0.0128571 16.7014 1.29857C17.9871 2.62286 18 5.31 18 8.90357C14.0143 8.775 12.195 8.67857 10.7357 7.26429Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1757_16971">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
  Facebook: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M18 9.02256C18 4.04211 13.968 0 9 0C4.032 0 0 4.04211 0 9.02256C0 13.3895 3.096 17.0256 7.2 17.8647V11.7293H5.4V9.02256H7.2V6.76692C7.2 5.02556 8.613 3.60902 10.35 3.60902H12.6V6.31579H10.8C10.305 6.31579 9.9 6.7218 9.9 7.21804V9.02256H12.6V11.7293H9.9V18C14.445 17.5489 18 13.7053 18 9.02256Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  Instagram: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M5.22 0H12.78C15.66 0 18 2.34 18 5.22V12.78C18 14.1644 17.45 15.4922 16.4711 16.4711C15.4922 17.45 14.1644 18 12.78 18H5.22C2.34 18 0 15.66 0 12.78V5.22C0 3.83557 0.549963 2.50784 1.5289 1.5289C2.50784 0.549963 3.83557 0 5.22 0ZM5.04 1.8C4.1807 1.8 3.35659 2.14136 2.74897 2.74897C2.14136 3.35659 1.8 4.1807 1.8 5.04V12.96C1.8 14.751 3.249 16.2 5.04 16.2H12.96C13.8193 16.2 14.6434 15.8586 15.251 15.251C15.8586 14.6434 16.2 13.8193 16.2 12.96V5.04C16.2 3.249 14.751 1.8 12.96 1.8H5.04ZM13.725 3.15C14.0234 3.15 14.3095 3.26853 14.5205 3.4795C14.7315 3.69048 14.85 3.97663 14.85 4.275C14.85 4.57337 14.7315 4.85952 14.5205 5.0705C14.3095 5.28147 14.0234 5.4 13.725 5.4C13.4266 5.4 13.1405 5.28147 12.9295 5.0705C12.7185 4.85952 12.6 4.57337 12.6 4.275C12.6 3.97663 12.7185 3.69048 12.9295 3.4795C13.1405 3.26853 13.4266 3.15 13.725 3.15ZM9 4.5C10.1935 4.5 11.3381 4.97411 12.182 5.81802C13.0259 6.66193 13.5 7.80653 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5C7.80653 13.5 6.66193 13.0259 5.81802 12.182C4.97411 11.3381 4.5 10.1935 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80653 4.5 9 4.5ZM9 6.3C8.28392 6.3 7.59716 6.58446 7.09081 7.09081C6.58446 7.59716 6.3 8.28392 6.3 9C6.3 9.71608 6.58446 10.4028 7.09081 10.9092C7.59716 11.4155 8.28392 11.7 9 11.7C9.71608 11.7 10.4028 11.4155 10.9092 10.9092C11.4155 10.4028 11.7 9.71608 11.7 9C11.7 8.28392 11.4155 7.59716 10.9092 7.09081C10.4028 6.58446 9.71608 6.3 9 6.3Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  Telegram: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <g clipPath="url(#clip0_1757_16984)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0C4.02975 0 0 4.02975 0 9C0 13.9703 4.02975 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02975 13.9703 0 9 0ZM13.1715 6.12075C13.0365 7.5435 12.45 10.9972 12.1522 12.591C12.0262 13.266 11.7773 13.4917 11.5373 13.5135C11.0145 13.5615 10.6178 13.1677 10.1115 12.8363C9.3195 12.3173 8.87175 11.994 8.103 11.487C7.21425 10.9012 7.79025 10.5795 8.2965 10.0538C8.42925 9.91575 10.7318 7.821 10.7768 7.63125C10.782 7.60725 10.788 7.51875 10.7347 7.47225C10.6815 7.42575 10.6042 7.4415 10.5487 7.45425C10.4692 7.47225 9.204 8.3085 6.75225 9.963C6.393 10.2098 6.0675 10.3298 5.77575 10.3238C5.45475 10.317 4.83675 10.1423 4.377 9.99225C3.81375 9.80925 3.36525 9.71175 3.40425 9.40125C3.4245 9.23925 3.64725 9.0735 4.07325 8.904C6.69675 7.761 8.4465 7.00725 9.32175 6.64275C11.8215 5.60325 12.3405 5.4225 12.6795 5.4165C13.104 5.4105 13.206 5.76075 13.1715 6.12075Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1757_16984">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
  Vk: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <g clipPath="url(#clip0_1757_16966)">
          <path
            d="M16.737 1.263C15.474 0 13.4408 0 9.375 0H8.625C4.55925 0 2.526 0 1.263 1.263C0 2.526 0 4.55925 0 8.625V9.375C0 13.4408 0 15.4733 1.263 16.737C2.526 18.0007 4.55925 18 8.625 18H9.375C13.4408 18 15.4733 18 16.737 16.737C18 15.474 18 13.4408 18 9.375V8.625C18 4.55925 18 2.526 16.737 1.263ZM14.6273 12.75H13.3148C12.8145 12.75 12.6675 12.351 11.7773 11.4608C10.998 10.71 10.6643 10.6125 10.47 10.6125C10.2052 10.6125 10.1265 10.6875 10.1265 11.0625V12.2393C10.1265 12.5618 10.0238 12.75 9.189 12.75C7.7985 12.75 6.27 11.9055 5.18475 10.3485C3.55725 8.06775 3.1125 6.3435 3.1125 5.99625C3.1125 5.80125 3.1875 5.625 3.5625 5.625H4.87575C5.211 5.625 5.337 5.772 5.463 6.135C6.105 8.00475 7.188 9.639 7.63275 9.639C7.79925 9.639 7.87575 9.56175 7.87575 9.13875V7.206C7.827 6.3165 7.35375 6.243 7.35375 5.9265C7.35375 5.78025 7.479 5.625 7.6875 5.625H9.75075C10.029 5.625 10.1258 5.7735 10.1258 6.10725V8.7075C10.1258 8.985 10.2465 9.0825 10.3298 9.0825C10.497 9.0825 10.6357 8.985 10.9417 8.679C11.8875 7.62225 12.555 5.9955 12.555 5.9955C12.639 5.8005 12.792 5.62425 13.1265 5.62425H14.439C14.8358 5.62425 14.9198 5.82825 14.8358 6.1065C14.6685 6.8715 13.0695 9.12375 13.0695 9.12375C12.93 9.3465 12.8745 9.4575 13.0695 9.708C13.209 9.903 13.6673 10.2922 13.9733 10.6537C14.5373 11.2882 14.9625 11.823 15.081 12.192C15.1905 12.5625 15.0023 12.75 14.6273 12.75Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1757_16966">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
  Youtube: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <g clipPath="url(#clip0_1757_16976)">
          <path
            d="M17.6235 4.6395C17.4165 3.86025 16.8067 3.246 16.032 3.0375C14.6287 2.6595 9 2.6595 9 2.6595C9 2.6595 3.37125 2.6595 1.96725 3.0375C1.19325 3.246 0.5835 3.8595 0.3765 4.6395C0 6.0525 0 9 0 9C0 9 0 11.9475 0.3765 13.3605C0.5835 14.1397 1.19325 14.754 1.968 14.9625C3.37125 15.3405 9 15.3405 9 15.3405C9 15.3405 14.6288 15.3405 16.0328 14.9625C16.8068 14.754 17.4165 14.1405 17.6243 13.3605C18 11.9475 18 9 18 9C18 9 18 6.0525 17.6235 4.6395ZM7.1595 11.6768V6.32325L11.8635 9L7.1595 11.6768Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1757_16976">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
  Loader: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}>
          <path strokeDasharray={28} strokeDashoffset={28} d="M12 10l4 7h-8Z">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="28;0"></animate>
          </path>
          <path d="M12 10l4 7h-8Z" opacity={0}>
            <animate
              attributeName="d"
              begin="0.4s"
              dur="0.8s"
              keyTimes="0;0.25;1"
              repeatCount="indefinite"
              values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"></animate>
            <animate
              attributeName="opacity"
              begin="0.4s"
              dur="0.8s"
              keyTimes="0;0.1;0.75;1"
              repeatCount="indefinite"
              values="0;1;1;0"></animate>
          </path>
        </g>
      </svg>
    );
  },
  InfoCircle: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M6 11.5C8.75 11.5 11 9.25 11 6.5C11 3.75 8.75 1.5 6 1.5C3.25 1.5 1 3.75 1 6.5C1 9.25 3.25 11.5 6 11.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 4.5V7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.99707 8.5H6.00156"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Lock: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  Calendar: (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M6 1.5V3.75"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 1.5V3.75"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.625 6.8175H15.375"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.99686 10.275H9.00359"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.22049 10.275H6.22723"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.22049 12.525H6.22723"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};
