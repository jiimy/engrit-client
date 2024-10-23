import React from "react";

const Close = ({ onClick, fill = "#262626" }: ImgTypes) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3876 11.9987L20.4188 3.61749C20.5367 3.47821 20.4376 3.2666 20.2554 3.2666H18.1179C17.992 3.2666 17.8715 3.32285 17.7885 3.41928L11.9894 10.3327L6.19025 3.41928C6.1099 3.32285 5.98936 3.2666 5.86079 3.2666H3.72329C3.54115 3.2666 3.44204 3.47821 3.5599 3.61749L10.5911 11.9987L3.5599 20.38C3.5335 20.411 3.51656 20.449 3.51109 20.4894C3.50563 20.5298 3.51187 20.5709 3.52908 20.6078C3.54628 20.6448 3.57372 20.676 3.60815 20.6978C3.64257 20.7196 3.68254 20.7311 3.72329 20.7309H5.86079C5.98668 20.7309 6.10722 20.6746 6.19025 20.5782L11.9894 13.6648L17.7885 20.5782C17.8688 20.6746 17.9894 20.7309 18.1179 20.7309H20.2554C20.4376 20.7309 20.5367 20.5193 20.4188 20.38L13.3876 11.9987Z" fill={fill} />
    </svg>


  );
};

export default Close;