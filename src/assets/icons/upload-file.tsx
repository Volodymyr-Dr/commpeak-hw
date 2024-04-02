import { FC } from "react";
import { IIcon } from "./icon.interface";

export const UploadFile: FC<IIcon> = ({
  className,
  width = "57",
  height = "56",
  fill,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    fill={fill}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 493.695 493.695"
  >
    <g>
      <path
        fill={fill}
        d="M417.724,94.564c-0.046-0.073-0.107-0.151-0.197-0.241l-93.08-93.078C323.65,0.448,322.568,0,321.441,0H89.076
		c-7.804,0-14.152,6.348-14.152,14.15v465.393c0,7.804,6.349,14.152,14.152,14.152h315.543c7.804,0,14.152-6.349,14.152-14.152
		V97.328C418.772,96.306,418.387,95.333,417.724,94.564z M325.691,14.511l39.285,39.284l39.284,39.283h-72.917
		c-3.117,0-5.652-2.535-5.652-5.652V14.511z M404.619,485.195H89.076c-3.117,0-5.652-2.536-5.652-5.652V427.43h75.422
		c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25H83.424v-49.5h195.422c2.348,0,4.25-1.902,4.25-4.25
		c0-2.348-1.902-4.25-4.25-4.25H83.424V51.43h105.422c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25H83.424V14.15
		c0-3.115,2.535-5.65,5.652-5.65h228.115v78.926c0,7.804,6.349,14.152,14.152,14.152h78.928V438.93H262.846
		c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25h147.426v32.113C410.272,482.659,407.736,485.195,404.619,485.195z"
      />
      <path
        fill={fill}
        d="M321.761,256.968l28.465-28.465c6.945-6.944,6.945-18.245,0-25.189l-90.782-90.781c-3.364-3.365-7.837-5.218-12.595-5.218
		c-4.758,0-9.23,1.853-12.595,5.218l-90.784,90.781c-6.945,6.944-6.945,18.245,0,25.189l28.469,28.469
		c0.797,0.797,1.878,1.245,3.005,1.245c1.127,0,2.208-0.448,3.005-1.245l37.526-37.525l-0.002,91.376
		c0,9.822,7.99,17.813,17.813,17.813h27.125c9.821,0,17.812-7.99,17.812-17.813l0.001-91.382l37.528,37.527
		C317.409,258.628,320.103,258.628,321.761,256.968z M276.978,206.175c-1.215-1.216-3.044-1.579-4.631-0.922
		c-1.589,0.658-2.624,2.208-2.624,3.927l-0.001,101.643c0,5.135-4.177,9.313-9.312,9.313h-27.125c-5.135,0-9.313-4.178-9.313-9.313
		l0.002-101.637c0-1.719-1.035-3.269-2.623-3.927c-0.526-0.218-1.078-0.323-1.626-0.323c-1.106,0-2.193,0.432-3.006,1.245
		l-41.776,41.775l-25.464-25.463c-3.631-3.631-3.631-9.539,0-13.17l90.784-90.781c1.76-1.759,4.098-2.728,6.585-2.728
		c2.487,0,4.825,0.969,6.585,2.728l90.782,90.781c3.631,3.631,3.631,9.539,0,13.17l-25.46,25.459L276.978,206.175z"
      />
    </g>
  </svg>
);
