const ArrowLeft = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
     )
};

const ArrowRight = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 19.5 21 12m0 0-7.5-7.5M21 12H3" />
          </svg>
     )
};

const ArrowUp = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 13.5 12 6m0 0 7.5 7.5M12 6v18" />
          </svg>
     )
};

const ArrowDown = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 18m0 0 7.5-7.5M12 18V0" />
          </svg>
     )
};

const PinItem = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 16 16" fill={fill} stroke={sc} strokeWidth={sw}>
               <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282" />
          </svg>
     );
};


const ChevronLeft = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
     )
};

const ChevronRight = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 19.5 15.75 12 8.25 4.5" />
          </svg>
     )
};

const ChevronUp = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75 12 8.25 19.5 15.75" />
          </svg>
     )
};

const ChevronDown = ({ size = 24, sw = 2, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25 12 15.75 19.5 8.25" />
          </svg>
     )
};

const LongArrowRight = ({ size = 24, sw = 1.5, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
     )
};

const LongArrowLeft = ({ size = 24, sw = 1.5, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25 3 12m0 0 3.75 3.75M3 12h18" />
          </svg>
     )
};

const LongArrowUp = ({ size = 24, sw = 1.5, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
          </svg>
     );
}

const LongArrowDown = ({ size = 24, sw = 1.5, sc = 'black', fill = 'none' }) => {
     return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={sc} strokeWidth={sw}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75 12 21m0 0 3.75-3.75M12 21V3" />
          </svg>
     )
};

const Search = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
     );
};

const AdjustFilter = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
     );
};

const PlusSVG = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
     );
};

const QuestionSVG = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
     );
};

const PencilSquareSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
     );
};

const DangerSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
     );
};

const ShareSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
     );
};

const PaperSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
     );
};

const DatabaseSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17ZM9,17H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9,0a1,1,0,1,0,1,1A1,1,0,0,0,18,17Zm-3-6a1,1,0,1,0,1,1A1,1,0,0,0,15,11ZM9,11H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9-6a1,1,0,1,0,1,1A1,1,0,0,0,18,5Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm4-6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,2,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,2,17v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,22,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,22,7ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5A1,1,0,0,1,4,7V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM9,5H6A1,1,0,0,0,6,7H9A1,1,0,0,0,9,5Z"></path>
          </svg>
     );
};

const LogoutSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} xmlns="http://www.w3.org/2000/svg" fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
     );
};

const ContactUsSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} viewBox="0 0 16 16" fill={fill || "none"} stroke={sc || 'black'} strokeWidth={sw || 2} xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_981_468)">
                    <path d="M3.42868 8.00009V4.99438C3.4376 4.40356 3.56302 3.82031 3.79775 3.27804C4.03247 2.73577 4.37189 2.24515 4.79656 1.83429C5.22122 1.42343 5.72279 1.1004 6.27251 0.883706C6.82223 0.667018 7.40931 0.56093 8.0001 0.571523C8.5909 0.56093 9.17797 0.667018 9.7277 0.883706C10.2774 1.1004 10.779 1.42343 11.2036 1.83429C11.6283 2.24515 11.9677 2.73577 12.2025 3.27804C12.4372 3.82031 12.5626 4.40356 12.5715 4.99438V8.00009M10.2858 14.0001C10.892 14.0001 11.4734 13.7593 11.9021 13.3306C12.3307 12.902 12.5715 12.3206 12.5715 11.7144V9.14295M10.2858 14.0001C10.2858 14.379 10.1353 14.7423 9.8674 15.0102C9.59949 15.2782 9.23613 15.4287 8.85725 15.4287H7.14296C6.76408 15.4287 6.40072 15.2782 6.13281 15.0102C5.8649 14.7423 5.71439 14.379 5.71439 14.0001C5.71439 13.6212 5.8649 13.2579 6.13281 12.9899C6.40072 12.722 6.76408 12.5715 7.14296 12.5715H8.85725C9.23613 12.5715 9.59949 12.722 9.8674 12.9899C10.1353 13.2579 10.2858 13.6212 10.2858 14.0001ZM1.71439 6.28581H2.85725C3.0088 6.28581 3.15414 6.34601 3.26131 6.45318C3.36847 6.56034 3.42868 6.70568 3.42868 6.85724V10.2858C3.42868 10.4374 3.36847 10.5827 3.26131 10.6899C3.15414 10.797 3.0088 10.8572 2.85725 10.8572H1.71439C1.41129 10.8572 1.1206 10.7368 0.906268 10.5225C0.691941 10.3082 0.571533 10.0175 0.571533 9.71438V7.42867C0.571533 7.12556 0.691941 6.83487 0.906268 6.62054C1.1206 6.40622 1.41129 6.28581 1.71439 6.28581ZM14.2858 10.8572H13.143C12.9914 10.8572 12.8461 10.797 12.7389 10.6899C12.6317 10.5827 12.5715 10.4374 12.5715 10.2858V6.85724C12.5715 6.70568 12.6317 6.56034 12.7389 6.45318C12.8461 6.34601 12.9914 6.28581 13.143 6.28581H14.2858C14.5889 6.28581 14.8796 6.40622 15.0939 6.62054C15.3083 6.83487 15.4287 7.12556 15.4287 7.42867V9.71438C15.4287 10.0175 15.3083 10.3082 15.0939 10.5225C14.8796 10.7368 14.5889 10.8572 14.2858 10.8572Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
               </g>
               <defs>
                    <clipath id="clip0_981_468">
                         <rect width={size || w} height={size || h} fill="white" />
                    </clipath>
               </defs>
          </svg>
     );
};

const DeleteSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || "none"} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
     );
}

const StarSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
     );
}

const VerticalDotSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
     );
}

const CheckSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
     );
}

const CrossSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
     );
}

const SettingsSvg = ({ size = 28, h = 6, w = 6, sw = 1, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 1}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
     );
}

const RightArrowSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} viewBox="0 0 24 24" stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
     );
}

const VitalSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 20 13">
               <path d="M7.385 12.519C7.20767 12.519 7.04867 12.4653 6.908 12.358C6.76733 12.2507 6.664 12.114 6.598 11.948L4.53 6.769H0V5.769H5.238L7.384 11.215L11.754 0.571C11.8187 0.405 11.921 0.268334 12.061 0.161C12.201 0.0536669 12.3593 0 12.536 0C12.7133 0 12.8723 0.0533332 13.013 0.16C13.1537 0.268 13.257 0.405 13.323 0.571L15.43 5.769H19.96V6.769H14.722L12.537 1.303L8.167 11.948C8.10233 12.114 8 12.2507 7.86 12.358C7.72 12.4653 7.56167 12.519 7.385 12.519Z" fill="#019889" />
          </svg>
     );
}

const UpArrowIconSvg = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 9 13">
               <path d="M0 4.5H2.25V9H5.25V4.5H7.5V3.75L3.75 0L0 3.75V4.5Z" fill="#019889" />
               <path d="M0 12.5H9V11H0V12.5Z" fill="#019889" />
          </svg>
     );
}

const MessageBubble = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
     );
}
const SendMessage = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
     );
}

const Attachment = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
          </svg>
     );
}

const Info = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
     );
}

const Profile = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
     );
}

const Cake = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
          </svg>
     );
}

const EditProfile = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
               <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
               <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
          </svg>
     );
}


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
</svg>


const Block = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
     );
}

// 10. Location
const Location = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
     );
};

// 11. Female Gender
const FemaleGender = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path fillRule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5" />
          </svg>
     );
};


// 11. Female Gender
const MaleGender = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path fillRule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
          </svg>
     );
};

// 12. AmbiguousGender
const AmbiguousGender = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path d="M346.19,359.61c-9.122-2.21-18.381,3.43-20.591,12.587c-5.504,22.81-17.237,43.691-33.92,60.373     c-24.175,24.175-56.311,37.495-90.505,37.495s-66.338-13.321-90.513-37.495c-24.175-24.175-37.487-56.32-37.487-90.505     c0-34.193,13.312-66.338,37.487-90.513s56.32-37.495,90.513-37.495s66.33,13.321,90.505,37.495     c8.388,8.388,15.548,17.826,21.265,28.058c4.617,8.226,15.036,11.153,23.228,6.554c8.226-4.608,11.17-15.01,6.562-23.236     c-7.262-12.962-16.307-24.909-26.923-35.507c-30.609-30.626-71.33-47.497-114.637-47.497c-37.717,0-73.446,12.817-102.272,36.343     l-24.269-24.269l17.801-17.801c6.665-6.665,6.665-17.468,0-24.132c-6.673-6.664-17.468-6.664-24.132,0l-17.801,17.801     l-9.267-9.267c-6.673-6.664-17.468-6.664-24.132,0c-6.673,6.665-6.673,17.468,0,24.132l9.267,9.267L8.569,209.798     c-6.673,6.665-6.673,17.468,0,24.132c3.328,3.337,7.697,5.001,12.066,5.001c4.361,0,8.73-1.664,12.066-5.001l17.801-17.801     l24.354,24.363c-23.168,28.706-35.814,64.154-35.814,101.572c0,43.307,16.862,84.019,47.488,114.637     c30.618,30.626,71.339,47.497,114.645,47.497c43.307,0,84.028-16.87,114.637-47.488c21.137-21.128,35.994-47.582,42.974-76.501     C360.987,371.036,355.355,361.82,346.19,359.61z" />
               <path d="M483.568,0h-59.733c-9.421,0-17.067,7.646-17.067,17.067c0,9.421,7.646,17.067,17.067,17.067h17.929l-27.034,27.034     c-29.474-25.651-66.688-39.782-106.146-39.782c-43.307,0-84.028,16.862-114.645,47.488     c-23.697,23.697-39.27,53.615-45.047,86.519c-1.63,9.284,4.574,18.133,13.858,19.763c9.353,1.647,18.133-4.582,19.763-13.858     c4.557-25.967,16.845-49.579,35.558-68.292c24.183-24.175,56.32-37.487,90.513-37.487c34.193,0,66.338,13.312,90.513,37.487     c49.903,49.911,49.903,131.115,0,181.026c-24.175,24.175-56.32,37.487-90.513,37.487c-34.193,0-66.33-13.312-90.513-37.487     c-8.883-8.883-16.375-18.944-22.281-29.901c-4.454-8.303-14.797-11.418-23.117-6.946c-8.294,4.471-11.401,14.822-6.929,23.117     c7.467,13.892,16.956,26.633,28.194,37.862c30.618,30.626,71.339,47.488,114.645,47.488s84.028-16.862,114.645-47.488     c30.626-30.618,47.479-71.339,47.479-114.645c0-35.635-11.58-69.427-32.691-97.374l28.484-28.484V76.8     c0,9.421,7.646,17.067,17.067,17.067c9.421,0,17.067-7.646,17.067-17.067V17.067C500.635,7.646,492.989,0,483.568,0z" />

          </svg>
     );
};

// 13. Trash
const Trash = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
     );
};

// 14. Pencil
const Pencil = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.125 2.125 0 0 1 3.001 3.001L7.5 19.85H4v-3.5L16.862 3.487z" />
          </svg>
     );
};

// 15. Heart
const Heart = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-9-7.5-9-11.25 0-2.485 2.015-4.5 4.5-4.5 1.657 0 3.063.966 3.75 2.362C11.437 6.216 12.843 5.25 14.5 5.25c2.485 0 4.5 2.015 4.5 4.5 0 3.75-4.582 6.832-9 11.25z" />
          </svg>
     );
};

// 16. Star
const Star = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-5.878 3.09L7.5 12.5 2.5 8.5l6.061-.88L12 2.5l3.439 5.12 6.061.88-5 4 1.378 8.34z" />
          </svg>
     );
};

// 17. Bell
const Bell = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405a2.032 2.032 0 0 1-.595-1.42V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 1 0-3 0v.68C6.64 5.36 5 7.93 5 11v3.175c0 .527-.21 1.036-.595 1.42L3 17h5m7 0a3 3 0 1 1-6 0h6z" />
          </svg>
     );
};

// 18. Folder
const Folder = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5v12a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5H12l-1.5-1.5H4.5A1.5 1.5 0 0 0 3 7.5z" />
          </svg>
     );
};

// 19. Download
const Download = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75v6.75h15v-6.75M12 3v12m0 0-3-3m3 3 3-3" />
          </svg>
     );
};

// 20. Upload
const Upload = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75v-6.75h15v6.75M12 21V9m0 0 3 3m-3-3-3 3" />
          </svg>
     );
};

// 21. Camera
const Camera = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5a2.25 2.25 0 0 1 2.25-2.25h2.25l1.5-1.5h6l1.5 1.5h2.25A2.25 2.25 0 0 1 21 7.5v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18V7.5zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
     );
};

// 21. Audio
const Audio = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
     );
};
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
</svg>

// 21. Video
const Video = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
     );
};

// 21. Image
const Image = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
     );
};

// 22. Play
const Play = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l16-9-16-9z" />
          </svg>
     );
};

// 23. Pause
const Pause = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 4.5h4.5v15H6v-15zM13.5 4.5H18v15h-4.5v-15z" />
          </svg>
     );
};

// 24. Refresh
const Refresh = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
     );
};

// 25. Lock
const Lock = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
     );
};

// 26. Unlock
const Unlock = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.5a4.5 4.5 0 1 0-9 0v3h-1.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-1.5z" />
          </svg>
     );
};

// 27. Chat
const Chat = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25c0-1.035.84-1.875 1.875-1.875h14.25c1.035 0 1.875.84 1.875 1.875v7.5c0 1.035-.84 1.875-1.875 1.875H6.75L3 21V8.25z" />
          </svg>
     );
};

// 28. PaperClip
const PaperClip = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75v-6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6" />
          </svg>
     );
};

// 29. Clipboard
const Clipboard = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3h7.5a.75.75 0 0 1 .75.75v1.5h-9v-1.5a.75.75 0 0 1 .75-.75zM6 6.75v14.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V6.75H6z" />
          </svg>
     );
};

// 30. Calendar
const Calendar = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
     );
};

// 30. Calendar
const Message = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
     );
};

// 31. Email
const Email = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
     );
};

// 32. Phone
const Phone = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
     );
};

// 32. Grid Globe 
const GridGlobe = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
     );
};

// 33. Setting 
const Setting = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
     );
};


// 34. Address 
const Address = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 1024 1024">
               <path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill={sc || 'black'} />
          </svg>
     );
}

// 35. City 
const City = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
          </svg>
     );
}

// 36. Country 
const Country = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
          </svg>
     );
}

// 37. State 
const State = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 470 470" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 470 470">
               <G>
                    <path d="m470,310.715v-151.539c0-3.32-2.184-6.246-5.366-7.19l-70.113-20.802c5.427-13.275 8.81-26.451 8.81-38.684 0-51.004-41.495-92.5-92.5-92.5s-92.5,41.495-92.5,92.5c0,12.233 3.383,25.409 8.81,38.684l-67.979,20.169-149.529-44.368c-2.268-0.671-4.722-0.235-6.619,1.18s-3.014,3.644-3.014,6.011v151.728c0,0.018 0,0.037 0,0.055v151.541c0,3.32 2.183,6.246 5.367,7.19l151.549,44.967c0.044,0.013 0.113,0.033 0.113,0.033 0.024,0.007 0.049,0.009 0.073,0.016 0.279,0.08 0.565,0.141 0.857,0.188 0.078,0.013 0.156,0.026 0.235,0.036 0.314,0.041 0.632,0.068 0.956,0.069 0.348,0 0.667-0.028 0.982-0.069 0.078-0.01 0.155-0.023 0.233-0.036 0.292-0.047 0.579-0.109 0.859-0.188 0.024-0.007 0.049-0.009 0.073-0.016l.069-.021c0.044-0.013 146.427-43.445 146.427-43.445 0.93,0.413 1.956,0.647 3.039,0.647s2.11-0.234 3.039-0.647l146.496,43.465c0.701,0.208 1.419,0.31 2.134,0.31 1.598,0 3.175-0.511 4.486-1.49 1.896-1.416 3.014-3.644 3.014-6.01v-151.724c-0.001-0.02-0.001-0.04-0.001-0.06zm-15-145.941v136.016l-136.669-40.55v-21.332c9.78-10.071 48.188-50.995 69.876-93.951l66.793,19.817zm-144.169-149.774c42.733,0 77.5,34.766 77.5,77.5 0,12.181-4.075,25.748-10.412,39.485-0.314,0.502-0.572,1.047-0.765,1.633-18.072,38.149-53.029,77.25-66.325,91.396-13.288-14.131-48.213-53.178-66.292-91.314-0.203-0.642-0.486-1.237-0.833-1.78-6.314-13.712-10.373-27.254-10.373-39.421-8.52651e-14-42.733 34.767-77.499 77.5-77.499zm-7.5,223.907v21.332l-136.669,40.55v-136.015l66.793-19.817c21.689,42.956 60.096,83.88 69.876,93.95zm-288.331,36.979l51.818,15.375c0.712,0.211 1.43,0.312 2.136,0.312 3.235,0 6.22-2.109 7.187-5.369 1.179-3.971-1.085-8.145-5.057-9.323l-56.084-16.641v-136.016l136.662,40.55v136.016l-51.817-15.375c-3.97-1.18-8.145,1.085-9.323,5.057-1.179,3.971 1.085,8.145 5.057,9.323l56.084,16.641v136.016l-136.663-40.55v-136.016zm303.331,136.016v-54.297c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v54.297l-136.669,40.549v-136.015l136.669-40.55v51.719c0,4.142 3.357,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-51.719l136.669,40.55v136.016l-136.669-40.55z" fill="" />
                    <path d="m310.831,145c28.948,0 52.5-23.551 52.5-52.5 0-28.948-23.552-52.5-52.5-52.5s-52.5,23.551-52.5,52.5c0,28.948 23.552,52.5 52.5,52.5zm0-90c20.678,0 37.5,16.822 37.5,37.5 0,20.678-16.822,37.5-37.5,37.5s-37.5-16.822-37.5-37.5c0-20.678 16.822-37.5 37.5-37.5z" fill="" />
               </G>
          </svg>
     );
}

// 38. Atsymbol
const Atsymbol = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
          </svg>
     );
}

// 38. Atsymbol
const Mic = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
          </svg>
     );
}

// 38. Flight
const Flight = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
               <path className="stone_een" d="M10.774,23.619l-1.625,5.691C9.06,29.164,9,28.992,9,28.794v-5.57l13.09-12.793L10.774,23.619z  M10.017,29.786c0.243-0.002,0.489-0.084,0.69-0.285l3.638-3.639l-2.772-1.386L10.017,29.786z M28.835,2.009L3.802,14.326 c-2.226,1.095-2.236,4.266-0.017,5.375l4.89,2.445L27.464,3.79c0.204-0.199,0.516-0.234,0.759-0.086 c0.326,0.2,0.396,0.644,0.147,0.935l-16.3,18.976l8.84,4.4c1.746,0.873,3.848-0.128,4.27-2.034l5.071-22.858 C30.435,2.304,29.588,1.639,28.835,2.009z" />
          </svg>
     );
}

// 38. Clock
const Clock = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
     );
}

// 38. Forward
const Forward = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
               <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
          </svg>
     );
}

// 38. Copy
const Copy = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
          </svg>
     );
}

// 38. Shrink
const Shrink = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
          </svg>
     );
}

// 38. Expand
const Expand = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
     );
}

// 38. OpenFolder
const OpenFolder = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
          </svg>
     );
}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
</svg>

// 38. Speaker
const Speaker = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
     );
}

// 38. Mute
const Mute = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
     );
}

// 38. MusicalNotes
const MusicalNotes = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 16 16">
               <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
               <path fillRule="evenodd" d="M9 3v10H8V3z" />
               <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
          </svg>
     );
}

// 38. MusicalTunes
const MusicalTunes = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} >
               <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
          </svg>
     );
}

// 38. Schedule
const Schedule = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2}>
               <path d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10" stroke={sc || 'black'} strokeWidth={sw || 2} strokeLinecap="round" strokeLinejoin="round" />
               <path d="M8 2V4" stroke={sc || 'black'} strokeWidth={sw || 2} strokeLinecap="round" strokeLinejoin="round" />
               <path d="M15 2V4" stroke={sc || 'black'} strokeWidth={sw || 2} strokeLinecap="round" strokeLinejoin="round" />
               <path d="M2 8H21" stroke={sc || 'black'} strokeWidth={sw || 2} strokeLinecap="round" strokeLinejoin="round" />
               <path d="M18.5 15.6429L17 17.1429" stroke={sc || 'black'} strokeWidth={sw || 2} strokeLinecap="round" strokeLinejoin="round" />
               <circle cx={17} cy={17} r={5} stroke={sc || 'black'} strokeWidth={sw || 2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
     );
}


// 38. Fonts
const Fonts = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path d="m22.106 0h-20.211c-1.047 0-1.895.849-1.895 1.895v4.924c0 .016-.001.034-.001.053 0 1.047.849 1.895 1.895 1.895s1.895-.849 1.895-1.895c0-.019 0-.037-.001-.056v.003-3.03h6.315v16.422h-2.925c-1.024.03-1.842.867-1.842 1.895s.819 1.865 1.84 1.895h.003 9.642c1.024-.03 1.842-.867 1.842-1.895s-.819-1.865-1.84-1.895h-.003-2.926v-16.422h6.315v3.03c.03 1.024.867 1.842 1.895 1.842s1.865-.819 1.895-1.84v-.003-4.924c0-1.046-.848-1.895-1.894-1.895z" />
          </svg>
     );
}

// 38. Fonts
const Blocked = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
     );
}

const Bubble = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 78 78">
               <path fillRule="evenodd" clipRule="evenodd" d="M39.0001 68.64C57.9545 68.64 73.3201 53.2744 73.3201 34.32C73.3201 15.3656 57.9545 0 39.0001 0C20.0456 0 4.68005 15.3656 4.68005 34.32C4.68005 43.2429 8.08524 51.3705 13.667 57.4741C14.3863 58.2607 14.8201 59.2749 14.8201 60.3408V73.1872C14.8201 76.1365 17.9031 78.0717 20.5591 76.7894L37.4153 68.6519C37.4251 68.6472 37.4249 68.6332 37.415 68.6288C37.4022 68.623 37.4068 68.6037 37.4208 68.6043C37.9443 68.628 38.4708 68.64 39.0001 68.64Z" fill={fill || 'none'} />
          </svg>
     );
}

const Hook = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width="66" height="30" viewBox="0 0 104 66" fill="none">
               <path d="M78.8706 52.8758C109.931 80.6947 112.559 128.426 84.7401 159.486C56.9211 190.547 9.18992 193.175 -21.8706 165.356C-52.9311 137.537 -55.559 89.8057 -27.7401 58.7452C-14.3975 43.8479 3.52554 35.4912 21.993 33.8972C26.2912 33.5262 29.8346 30.0852 29.8264 25.771L29.8232 24.0796C29.8192 22.0116 28.4959 20.2262 26.936 18.8686C22.4553 14.969 21.9843 8.17534 25.8839 3.69462C29.7836 -0.786106 36.5772 -1.25715 41.0579 2.64251C45.5387 6.54217 46.0097 13.3358 42.11 17.8165C41.7779 18.1981 41.4248 18.5507 41.054 18.8739C38.4051 21.1823 35.5739 24.0018 35.5806 27.5154C35.5875 31.1615 38.3736 34.169 41.9619 34.8156C55.255 37.2111 68.0706 43.2029 78.8706 52.8758Z" fill="#C24914" />
          </svg>
     );
}

const PropleGroup = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
     );
}

const DynamicCalender = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     const today = new Date().getDate();
     return (
          <svg width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 100 100">
               <rect x="5" y="10" width="90" height="85" rx="10" fill="#fff" stroke="#333" />
               <rect x="5" y="10" width="90" height="25" rx="10" fill="black" />
               <circle cx="25" cy="10" r="4" fill="#333" />
               <circle cx="75" cy="10" r="4" fill="#333" />
               <text x="50" y="80" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#333">
                    {today}
               </text>
          </svg>
     );
}

const OpenDoor = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 492.5 492.5">
               <g>
                    <path d="M184.646,0v21.72H99.704v433.358h31.403V53.123h53.539V492.5l208.15-37.422v-61.235V37.5L184.646,0z M222.938,263.129   c-6.997,0-12.67-7.381-12.67-16.486c0-9.104,5.673-16.485,12.67-16.485s12.67,7.381,12.67,16.485   C235.608,255.748,229.935,263.129,222.938,263.129z" />
               </g>
          </svg>
     );
}

const NoNetwork = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill = '' }) => {
     return (
          <svg width={w || size} height={h || size} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 77 94">
               <path d="M10.8902 33.5374C10.8902 36.7238 11.4498 39.8651 12.569 42.9615C13.6903 46.0556 15.4075 48.9282 17.7204 51.579C18.0452 51.9302 18.2284 52.3241 18.2701 52.7608C18.3118 53.1974 18.1648 53.5837 17.8291 53.9194C17.4933 54.2552 17.095 54.3868 16.6342 54.3144C16.1734 54.242 15.7827 54.028 15.4624 53.6725C12.8532 50.7166 10.9286 47.5292 9.68877 44.1103C8.44671 40.6913 7.82568 37.167 7.82568 33.5374C7.82568 29.9078 8.44671 26.3835 9.68877 22.9646C10.9308 19.5456 12.8554 16.3582 15.4624 13.4023C15.7849 13.0512 16.1755 12.8372 16.6342 12.7604C17.0928 12.6858 17.4911 12.8175 17.8291 13.1554C18.1648 13.4912 18.3118 13.8774 18.2701 14.3141C18.2284 14.7508 18.0452 15.1458 17.7204 15.4991C15.4075 18.1456 13.6914 21.017 12.5723 24.1134C11.4509 27.2097 10.8902 30.3511 10.8902 33.5374ZM21.7527 33.5374C21.7527 35.3808 22.0523 37.2 22.6514 38.995C23.2504 40.7879 24.205 42.4611 25.5151 44.0148C25.7828 44.3659 25.9277 44.7455 25.9496 45.1537C25.9715 45.5641 25.8135 45.9371 25.4756 46.2729C25.1377 46.6086 24.7646 46.7644 24.3564 46.7403C23.9483 46.7162 23.6015 46.5274 23.3163 46.1741C21.7802 44.3242 20.6248 42.3031 19.8501 40.1109C19.0755 37.9186 18.6882 35.7275 18.6882 33.5374C18.6882 31.3474 19.0755 29.1562 19.8501 26.964C20.6248 24.7717 21.7802 22.7517 23.3163 20.904C23.5994 20.5529 23.9461 20.3642 24.3564 20.3378C24.7646 20.3093 25.1377 20.4629 25.4756 20.7987C25.8135 21.1344 25.9683 21.5184 25.9397 21.9508C25.9112 22.3831 25.7411 22.7748 25.4295 23.1259C24.2182 24.6225 23.3031 26.265 22.6843 28.0535C22.0632 29.8398 21.7527 31.6678 21.7527 33.5374ZM30.8739 61.0097L29.1392 66.4673C29.0054 66.8184 28.8013 67.0927 28.527 67.2902C28.2527 67.4921 27.9345 67.593 27.5724 67.593C26.9799 67.593 26.53 67.379 26.2228 66.9511C25.9156 66.5232 25.8421 66.0196 26.0023 65.4403L34.8898 38.8238C33.9264 38.2664 33.1847 37.4984 32.6646 36.5197C32.1445 35.5409 31.8834 34.5469 31.8812 33.5374C31.8812 31.7819 32.4978 30.2885 33.7311 29.0575C34.9644 27.8264 36.4577 27.2097 38.2111 27.2075C39.9644 27.2054 41.4588 27.822 42.6943 29.0575C43.9298 30.2929 44.5453 31.7863 44.5409 33.5374C44.5409 34.5469 44.3017 35.5201 43.8233 36.4571C43.345 37.3942 42.5824 38.1831 41.5356 38.8238L50.4231 65.4403C50.5833 65.9647 50.512 66.4552 50.2092 66.9116C49.9064 67.3681 49.4609 67.5952 48.8728 67.593C48.5085 67.593 48.1969 67.4964 47.9379 67.3033C47.679 67.1102 47.4815 66.8315 47.3454 66.4673L45.5679 61.0097H30.8739ZM31.9997 57.718H44.4224L38.2111 38.9818L31.9997 57.718ZM54.6694 33.5374C54.6694 31.8192 54.3589 30.0318 53.7378 28.1753C53.119 26.3188 52.1754 24.6137 50.907 23.06C50.6393 22.7089 50.4945 22.3293 50.4725 21.9211C50.4506 21.5108 50.6086 21.1377 50.9465 20.802C51.2845 20.4662 51.6608 20.3104 52.0756 20.3345C52.4903 20.3587 52.8337 20.5474 53.1059 20.9007C54.6288 22.7506 55.7743 24.7816 56.5424 26.9936C57.3104 29.2056 57.7076 31.4077 57.7339 33.6C57.7339 35.79 57.3565 37.9713 56.6016 40.1438C55.8467 42.3163 54.6815 44.3264 53.1059 46.1741C52.8228 46.523 52.4771 46.7107 52.069 46.737C51.6586 46.7655 51.2856 46.6119 50.9498 46.2762C50.6141 45.9404 50.4583 45.5564 50.4824 45.1241C50.5065 44.6918 50.6766 44.3012 50.9926 43.9523C52.2039 42.4534 53.119 40.8098 53.7378 39.0213C54.3589 37.2351 54.6694 35.4071 54.6694 33.5374ZM63.8531 24.1134C62.7318 21.0192 61.0146 18.1467 58.7017 15.4958C58.3769 15.1447 58.1937 14.7519 58.152 14.3174C58.1103 13.8829 58.2573 13.4956 58.5931 13.1554C58.9288 12.8153 59.3271 12.6836 59.7879 12.7604C60.2488 12.8372 60.6405 13.0512 60.9631 13.4023C63.5701 16.3582 65.4946 19.5467 66.7366 22.9679C67.9765 26.3846 68.5964 29.9078 68.5964 33.5374C68.5964 37.167 67.9963 40.6913 66.7959 44.1103C65.5955 47.5292 63.6567 50.7166 60.9795 53.6725C60.6438 54.0237 60.2488 54.2409 59.7945 54.3243C59.3403 54.4077 58.9398 54.2727 58.5931 53.9194C58.2573 53.5837 58.1103 53.1974 58.152 52.7608C58.1937 52.3241 58.3769 51.9291 58.7017 51.5758C61.0146 48.9271 62.7318 46.0556 63.8531 42.9615C64.9723 39.8651 65.5319 36.7238 65.5319 33.5374C65.5319 30.3511 64.9723 27.2097 63.8531 24.1134Z" fill="black" />
               <rect x="44.3884" y="57.8559" width="3.27146" height="38" rx="1.63573" transform="rotate(-18.818 44.3884 57.8559)" fill="black" />
               <rect x="28.9313" y="56.7392" width="3.27146" height="38" rx="1.63573" transform="rotate(18.5765 28.9313 56.7392)" fill="black" />
               <rect x="74.5602" width="2" height="118" transform="rotate(39.1881 74.5602 0)" fill="black" />
          </svg>
     );
}


const Signal = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (

          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
     );
}

const Wifi = ({ size = 6, h = 6, w = 6, sw = 2, sc, fill }) => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size || w} height={size || h} fill={fill || 'none'} stroke={sc || 'black'} strokeWidth={sw || 2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
          </svg>
     );
}





export const SvgIcons = {
     NoNetwork,
     OpenDoor,
     DynamicCalender,
     PropleGroup,
     Hook,
     Bubble,
     Blocked,
     Fonts,
     Schedule,
     Mic,
     Speaker,
     Mute,
     Camera,
     Audio,
     Video,
     Image,
     AdjustFilter,

     ArrowLeft,
     ArrowRight,
     ArrowUp,
     ArrowDown,
     PinItem,

     ChevronLeft,
     ChevronRight,
     ChevronUp,
     ChevronDown,

     LongArrowRight,
     LongArrowLeft,
     LongArrowUp,
     LongArrowDown,

     Email,
     Phone,
     GridGlobe,
     Setting,
     Location,
     AmbiguousGender,
     MaleGender,
     FemaleGender,
     Cake,

     Address,
     City,
     State,
     Country,
     Block,

     Atsymbol,
     Profile,
     EditProfile,

     Attachment,
     CheckSvg,
     ContactUsSvg,
     DatabaseSvg,
     Search,
     MusicalNotes,
     MusicalTunes,
     PlusSVG,
     QuestionSVG,
     PencilSquareSvg,
     DangerSvg,
     ShareSvg,
     PaperSvg,
     LogoutSvg,
     DeleteSvg,
     StarSvg,
     VerticalDotSvg,
     CrossSvg,
     SettingsSvg,
     RightArrowSvg,
     VitalSvg,
     UpArrowIconSvg,
     Message,
     MessageBubble,
     SendMessage,
     Flight,
     Info,
     Lock,
     Unlock,
     Clock,
     Trash,
     Pencil,
     Heart,
     Star,
     Bell,
     Folder,
     OpenFolder,
     Download,
     Upload,
     Play,
     Pause,
     Refresh,
     Chat,
     PaperClip,
     Clipboard,
     Calendar,
     Forward,
     Copy,
     Shrink,
     Expand,
     Signal,
     Wifi
};
