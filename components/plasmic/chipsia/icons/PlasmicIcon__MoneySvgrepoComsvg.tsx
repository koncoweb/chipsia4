// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneySvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoneySvgrepoComsvgIcon(props: MoneySvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M908.8 742.4c0 14.08-11.52 25.6-25.6 25.6H140.8c-14.08 0-25.6-11.52-25.6-25.6v-384c0-14.08 11.52-25.6 25.6-25.6h742.4c14.08 0 25.6 11.52 25.6 25.6v384z"
        }
        fill={"#B8CA43"}
      ></path>

      <path
        d={
          "M883.2 780.8H140.8c-21.76 0-38.4-16.64-38.4-38.4v-384c0-21.76 16.64-38.4 38.4-38.4h742.4c21.76 0 38.4 16.64 38.4 38.4v384c0 21.76-16.64 38.4-38.4 38.4zM140.8 345.6c-7.68 0-12.8 5.12-12.8 12.8v384c0 7.68 5.12 12.8 12.8 12.8h742.4c7.68 0 12.8-5.12 12.8-12.8v-384c0-7.68-5.12-12.8-12.8-12.8H140.8z"
        }
        fill={"#231C1C"}
      ></path>

      <path
        d={
          "M844.8 652.8V448c-28.16 0-51.2-23.04-51.2-51.2H230.4c0 28.16-23.04 51.2-51.2 51.2v204.8c28.16 0 51.2 23.04 51.2 51.2h563.2c0-28.16 23.04-51.2 51.2-51.2z"
        }
        fill={"#B8CA43"}
      ></path>

      <path
        d={
          "M806.4 716.8H217.6V704c0-21.76-16.64-38.4-38.4-38.4h-12.8V435.2h12.8c21.76 0 38.4-16.64 38.4-38.4V384h588.8v12.8c0 21.76 16.64 38.4 38.4 38.4h12.8v230.4h-12.8c-21.76 0-38.4 16.64-38.4 38.4v12.8zm-564.48-25.6h540.16c5.12-25.6 24.32-44.8 49.92-49.92V459.52c-25.6-5.12-44.8-24.32-49.92-49.92H241.92c-5.12 25.6-24.32 44.8-49.92 49.92v181.76c25.6 5.12 44.8 24.32 49.92 49.92z"
        }
        fill={"#231C1C"}
      ></path>

      <path
        d={"M345.6 550.4a179.2 166.4 90 10332.8 0 179.2 166.4 90 10-332.8 0z"}
        fill={"#E1E0A6"}
      ></path>

      <path
        d={
          "M512 742.4c-98.56 0-179.2-85.76-179.2-192s80.64-192 179.2-192 179.2 85.76 179.2 192-80.64 192-179.2 192zm0-358.4c-84.48 0-153.6 74.24-153.6 166.4S427.52 716.8 512 716.8s153.6-74.24 153.6-166.4S596.48 384 512 384z"
        }
        fill={"#231C1C"}
      ></path>

      <path d={"M499.2 371.2h25.6v358.4h-25.6z"} fill={"#231C1C"}></path>

      <path
        d={
          "M512 691.2c-21.76 0-42.24-8.96-56.32-24.32-12.8-14.08-20.48-33.28-20.48-52.48h25.6c0 12.8 5.12 25.6 14.08 34.56 10.24 10.24 23.04 16.64 37.12 16.64 28.16 0 51.2-23.04 51.2-51.2s-23.04-51.2-51.2-51.2c-42.24 0-76.8-34.56-76.8-76.8s34.56-76.8 76.8-76.8 76.8 34.56 76.8 76.8h-25.6c0-28.16-23.04-51.2-51.2-51.2s-51.2 23.04-51.2 51.2 23.04 51.2 51.2 51.2c42.24 0 76.8 34.56 76.8 76.8s-34.56 76.8-76.8 76.8z"
        }
        fill={"#231C1C"}
      ></path>
    </svg>
  );
}

export default MoneySvgrepoComsvgIcon;
/* prettier-ignore-end */
