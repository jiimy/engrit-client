import React from "react";

const User = ({ onClick, fill = 'black' }: ImgTypes) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 18.1111C22.949 18.1111 26.5556 14.5045 26.5556 10.0556C26.5556 5.6066 22.949 2 18.5 2C14.051 2 10.4444 5.6066 10.4444 10.0556C10.4444 14.5045 14.051 18.1111 18.5 18.1111ZM31.3889 34.2222C31.2006 34.2222 31.0198 34.1899 30.8519 34.1305V34.2222H6.14815V34.1305C5.98017 34.1899 5.79942 34.2222 5.61111 34.2222C4.72132 34.2222 4 33.5009 4 32.6111V29.3889C4 27.2524 4.84871 25.2035 6.35942 23.6928C7.87013 22.182 9.91909 21.3333 12.0556 21.3333H24.9444C27.0809 21.3333 29.1299 22.182 30.6406 23.6928C32.1513 25.2035 33 27.2524 33 29.3889V32.6111C33 33.5009 32.2787 34.2222 31.3889 34.2222Z"
        fill={fill}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export default User;
