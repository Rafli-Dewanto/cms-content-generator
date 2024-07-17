import React from "react";

interface Props extends React.HTMLAttributes<SVGElement> {
  direction: "vertical" | "horizontal";
  size?: number;
}

const TripleDots: React.FC<Props> = props => {
  const { direction = "vertical", size, ...rest } = props;

  switch (direction) {
    case "vertical":
      return (
        <svg
          {...rest}
          width={`${size ? `${size}px` : "20px"}`}
          height={`${size ? `${size}px` : "20px"}`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          className="bi bi-three-dots-vertical"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      );
    case "horizontal":
      return (
        <svg
          {...rest}
          fill="#000000"
          height={`${size ? `${size}px` : "20px"}`}
          width={`${size ? `${size}px` : "20px"}`}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.055 32.055"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
		C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
		s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
		c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
            />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default TripleDots;
