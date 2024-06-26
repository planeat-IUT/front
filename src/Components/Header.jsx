
export default function Header({links}) {

    const Navigation = () => {

    };

    return (
        <header className="header">
            <div className="div-header">
                <div className="div-logo-link">
                    <div className="div-logo">
                        <a href="/">
                            <svg width="31" height="38" viewBox="0 0 31 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1390_22)">
                                    <path
                                        d="M28.9909 9.94V23.24C28.9361 23.17 28.8996 23.12 28.8449 23.07C28.6989 22.91 28.5529 22.77 28.407 22.65C27.4673 21.83 26.3086 21.35 25.0586 21.35C22.5497 21.35 20.4148 23.28 19.6758 25.95C19.0371 25.66 18.3438 25.51 17.6139 25.51C14.3021 25.51 11.6106 28.72 11.6106 32.68C11.6106 34.64 12.2584 36.41 13.335 37.7H5.17856C2.87032 37.7 1 35.49 1 32.76V9.94C1 7.21 2.87032 5 5.17856 5H24.8123C27.1206 5 28.9909 7.21 28.9909 9.94Z"
                                        fill="#FFFDED"/>
                                    <path
                                        d="M5.50847 5H24.4915C26.9739 5 29 7.43154 29 10.4352V14H1V10.4352C1 7.43154 3.02608 5 5.50847 5Z"
                                        fill="#AEF196"/>
                                    <path
                                        d="M28.9908 23.2401V23.7101C28.9908 23.7101 28.9544 23.7201 28.9361 23.7201C26.1169 24.1501 23.8361 26.5801 23.0879 29.7701C23.0606 29.8901 23.0332 30.0001 23.0241 30.1201C22.5497 29.9901 22.0479 29.9101 21.5461 29.8901C21.4092 29.8701 21.2724 29.8701 21.1355 29.8701C20.6155 29.8701 20.1137 29.9201 19.621 30.0301C16.2727 30.7201 13.7455 33.7001 13.7455 37.2701C13.7455 37.4101 13.7455 37.5601 13.7637 37.7001H13.3349C12.2584 36.4101 11.6106 34.6401 11.6106 32.6801C11.6106 28.7201 14.302 25.5101 17.6139 25.5101C18.289 25.5101 18.9276 25.6401 19.5298 25.8901C19.6119 25.9201 19.7031 25.8701 19.7305 25.7801C20.5151 23.2001 22.6135 21.3601 25.0677 21.3601C26.3177 21.3601 27.4763 21.8401 28.4161 22.6601C28.5712 22.7801 28.708 22.9201 28.854 23.0801C28.9087 23.1301 28.9452 23.1801 29 23.2501L28.9908 23.2401Z"
                                        fill="#FFF3C7"/>
                                    <path
                                        d="M10.94 2.96C10.94 4.59 10.06 7.33 8.97 7.33C7.88 7.33 7 4.6 7 2.96C7 1.32 7.88 0 8.97 0C10.06 0 10.94 1.32 10.94 2.96Z"
                                        fill="#534B36"/>
                                    <path
                                        d="M23.94 2.96C23.94 4.59 23.06 7.33 21.97 7.33C20.88 7.33 20 4.6 20 2.96C20 1.32 20.88 0 21.97 0C23.06 0 23.94 1.32 23.94 2.96Z"
                                        fill="#534B36"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1390_22">
                                        <rect width="30.68" height="37.9" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <span>Plan'eat</span>
                    </div>
                    <div className="div-link">
                        <ul className="header-menu">
                            {links.map((link, index) => (
                                <li key={index} className="liste-header" onClick={Navigation()}>
                                    <a className="header-lien" href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="div-search-login">
                    <div className="div-search">
                        <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.2824 18.7486C23.0374 16.3537 23.8235 13.3844 23.4833 10.4349C23.1432 7.48534 21.7018 4.77299 19.4477 2.84048C17.1936 0.907979 14.293 -0.102158 11.3261 0.0121616C8.35915 0.126482 5.54481 1.35683 3.44609 3.45706C1.34736 5.55728 0.119032 8.3725 0.00683493 11.3395C-0.105362 14.3065 0.906851 17.2064 2.84097 19.4591C4.77508 21.7119 7.48846 23.1512 10.4383 23.4893C13.3881 23.8274 16.3567 23.0392 18.7504 21.2824H18.7485C18.8029 21.3549 18.8609 21.4238 18.9262 21.4909L25.9043 28.469C26.2441 28.8091 26.7052 29.0003 27.186 29.0004C27.6668 29.0006 28.128 28.8098 28.4681 28.4699C28.8082 28.13 28.9993 27.669 28.9995 27.1882C28.9997 26.7074 28.8088 26.2462 28.469 25.9061L21.4909 18.928C21.4261 18.8624 21.3564 18.8036 21.2824 18.7486ZM21.75 11.7813C21.75 13.0904 21.4922 14.3867 20.9912 15.5962C20.4902 16.8057 19.7559 17.9046 18.8303 18.8303C17.9046 19.756 16.8056 20.4903 15.5962 20.9912C14.3867 21.4922 13.0904 21.7501 11.7813 21.7501C10.4722 21.7501 9.17588 21.4922 7.96641 20.9912C6.75695 20.4903 5.658 19.756 4.73232 18.8303C3.80664 17.9046 3.07234 16.8057 2.57137 15.5962C2.07039 14.3867 1.81254 13.0904 1.81254 11.7813C1.81254 9.13743 2.86282 6.60184 4.73232 4.73234C6.60182 2.86284 9.13741 1.81256 11.7813 1.81256C14.4252 1.81256 16.9608 2.86284 18.8303 4.73234C20.6998 6.60184 21.75 9.13743 21.75 11.7813Z"
                                fill="#6E6E6E"/>
                        </svg>
                        <input className="input-search"/>

                    </div>
                    <div className="div-login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path
                                d="M6.75 31.5C6.75 31.5 4.5 31.5 4.5 29.25C4.5 27 6.75 20.25 18 20.25C29.25 20.25 31.5 27 31.5 29.25C31.5 31.5 29.25 31.5 29.25 31.5H6.75ZM18 18C19.7902 18 21.5071 17.2888 22.773 16.023C24.0388 14.7571 24.75 13.0402 24.75 11.25C24.75 9.45979 24.0388 7.7429 22.773 6.47703C21.5071 5.21116 19.7902 4.5 18 4.5C16.2098 4.5 14.4929 5.21116 13.227 6.47703C11.9612 7.7429 11.25 9.45979 11.25 11.25C11.25 13.0402 11.9612 14.7571 13.227 16.023C14.4929 17.2888 16.2098 18 18 18Z"
                                fill="#9CF196"/>
                        </svg>
                        <a className="header-login" href="/">se connecter</a>
                    </div>
                </div>
            </div>
        </header>
    );
}