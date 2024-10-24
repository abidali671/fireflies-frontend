import ReactDOM from "react-dom";
import { cx, css } from "@emotion/css";
import { forwardRef } from "react";

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

export const Button = forwardRef(
  ({ className, active, reversed, ...props }: any, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed
            ? active
              ? "white"
              : "#aaa"
            : active
              ? "black"
              : "#ccc"};
        `,
      )}
    />
  ),
);

export const EditorValue = forwardRef(
  ({ className, value, ...props }: any, ref) => {
    const textLines = value.document.nodes
      .map((node: any) => node.text)
      .toArray()
      .join("\n");
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `,
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    );
  },
);

export const Icon = forwardRef(({ className, ...props }: any, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      "material-icons",
      className,
      css`
        font-size: 18px;
        vertical-align: text-bottom;
      `,
    )}
  />
));

export const Menu = forwardRef(({ className, ...props }: any, ref) => (
  <div
    {...props}
    data-test-id="menu"
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `,
    )}
  />
));

export const Toolbar = forwardRef(({ className, ...props }: any, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `,
    )}
  />
));

export const GlossaryTooltip = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8001 22.8002C17.7648 22.8002 22.6002 17.9648 22.6002 12.0001C22.6002 6.03532 17.7648 1.19995 11.8001 1.19995C5.83537 1.19995 1 6.03532 1 12.0001C1 17.9648 5.83537 22.8002 11.8001 22.8002Z"
        stroke="#00ADB5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.30762 9.50771C9.30762 9.01478 9.45379 8.53291 9.72765 8.12305C10.0015 7.71319 10.3908 7.39374 10.8462 7.2051C11.3016 7.01646 11.8027 6.9671 12.2862 7.06327C12.7696 7.15944 13.2137 7.39681 13.5623 7.74537C13.9109 8.09393 14.1482 8.53802 14.2444 9.02148C14.3406 9.50495 14.2912 10.0061 14.1026 10.4615C13.9139 10.9169 13.5945 11.3062 13.1846 11.58C12.7748 11.8539 12.2929 12 11.7999 12V13.6616"
        stroke="#00ADB5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 16.1541C11.5535 16.1541 11.3126 16.2271 11.1077 16.3641C10.9027 16.501 10.743 16.6956 10.6487 16.9233C10.5544 17.151 10.5297 17.4016 10.5778 17.6433C10.6259 17.8851 10.7445 18.1071 10.9188 18.2814C11.0931 18.4557 11.3152 18.5744 11.5569 18.6224C11.7986 18.6705 12.0492 18.6458 12.2769 18.5515C12.5046 18.4572 12.6992 18.2975 12.8361 18.0926C12.9731 17.8876 13.0462 17.6467 13.0462 17.4002C13.0419 17.0711 12.9092 16.7566 12.6764 16.5238C12.4436 16.291 12.1292 16.1584 11.8 16.1541Z"
        fill="#00ADB5"
      />
    </svg>
  );
};

export const GettingStartedIcon = () => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.720459"
      width="67.0968"
      height="67.0968"
      rx="20"
      fill="url(#paint0_linear_1542_9309)"
    />
    <path
      d="M51.7804 21.1726L46.4651 46.2395C46.0637 48.0084 45.0183 48.4487 43.5325 47.6158L35.4331 41.6476L31.5255 45.4067C31.0928 45.8394 30.7317 46.2005 29.8976 46.2005L30.4801 37.9526L45.4901 24.3894C46.143 23.8082 45.3479 23.4849 44.4761 24.0674L25.9196 35.7523L17.9309 33.2512C16.1935 32.709 16.1621 31.5139 18.2932 30.6798L49.5398 18.6413C50.9865 18.0991 52.2521 18.9634 51.7804 21.1738V21.1726Z"
      fill="white"
    />
    <g opacity="0.4">
      <path
        d="M50.6605 24.5282L45.3452 49.5951C44.9439 51.3639 43.8984 51.8043 42.4126 50.9714L34.3132 45.0032L30.4057 48.7623C29.9729 49.195 29.6118 49.5561 28.7777 49.5561L29.3602 41.3082L44.3702 27.745C45.0231 27.1638 44.228 26.8405 43.3562 27.423L24.7997 39.1079L16.811 36.6068C15.0736 36.0646 15.0422 34.8695 17.1733 34.0354L48.4199 21.9969C49.8667 21.4547 51.1323 22.319 50.6605 24.5294V24.5282Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1542_9309"
        x1="67.8172"
        y1="33.5484"
        x2="0.720459"
        y2="33.5484"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10507F" />
        <stop offset="1" stopColor="#00ADB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const CreatingIcon = () => (
  <svg
    width="69"
    height="68"
    viewBox="0 0 69 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.95166"
      width="67.0968"
      height="67.0968"
      rx="20"
      fill="url(#paint0_linear_1542_9320)"
    />
    <rect
      opacity="0.4"
      x="32.3879"
      y="28.2672"
      width="13.73"
      height="14.7861"
      fill="white"
    />
    <path
      d="M47.1746 24.0425H34.5007L32.267 21.8087C31.665 21.2067 30.857 20.874 30.0174 20.874H21.8269C20.0684 20.874 18.6743 22.284 18.6743 24.0425L18.6584 43.0532C18.6584 44.8117 20.0684 46.2217 21.8269 46.2217H47.1746C48.9172 46.2217 50.343 44.7959 50.343 43.0532V27.2109C50.343 25.4683 48.9172 24.0425 47.1746 24.0425ZM44.0061 36.7163H40.8377V39.8848C40.8377 40.7561 40.1248 41.469 39.2534 41.469C38.3821 41.469 37.6692 40.7561 37.6692 39.8848V36.7163H34.5007C33.6294 36.7163 32.9165 36.0034 32.9165 35.1321C32.9165 34.2608 33.6294 33.5479 34.5007 33.5479H37.6692V30.3794C37.6692 29.5081 38.3821 28.7952 39.2534 28.7952C40.1248 28.7952 40.8377 29.5081 40.8377 30.3794V33.5479H44.0061C44.8775 33.5479 45.5904 34.2608 45.5904 35.1321C45.5904 36.0034 44.8775 36.7163 44.0061 36.7163Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1542_9320"
        x1="68.0484"
        y1="33.5484"
        x2="0.95166"
        y2="33.5484"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10507F" />
        <stop offset="1" stopColor="#00ADB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const BuyingIcon = () => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.182861"
      width="67.0968"
      height="67.0968"
      rx="20"
      fill="url(#paint0_linear_1542_9330)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.4726 31.3314H46.1485C46.7019 31.3314 47.1505 31.7566 47.1505 32.2812V35.5827C47.144 36.1047 46.6992 36.5264 46.1485 36.5325H41.58C40.2459 36.5495 39.0794 35.6837 38.7768 34.4521C38.6253 33.6875 38.838 32.8985 39.358 32.2966C39.8779 31.6947 40.652 31.3414 41.4726 31.3314ZM41.677 34.8029H42.1183C42.6849 34.8029 43.1442 34.3675 43.1442 33.8305C43.1442 33.2935 42.6849 32.8581 42.1183 32.8581H41.677C41.406 32.8551 41.145 32.955 40.9523 33.1356C40.7596 33.3161 40.6511 33.5623 40.6511 33.8192C40.6511 34.3581 41.1085 34.7967 41.677 34.8029Z"
      fill="#F9F9FA"
      fillOpacity="0.4"
    />
    <path
      d="M41.4726 29.3868H47.1505C47.1505 24.9546 44.4189 22.3654 39.7907 22.3654H27.6715C23.0434 22.3654 20.3118 24.9546 20.3118 29.3302V38.8843C20.3118 43.26 23.0434 45.8492 27.6715 45.8492H39.7907C44.4189 45.8492 47.1505 43.26 47.1505 38.8843V38.4773H41.4726C38.8375 38.4773 36.7013 36.4524 36.7013 33.9547C36.7013 31.4569 38.8375 29.432 41.4726 29.432V29.3868Z"
      fill="white"
    />
    <path
      d="M34.2434 29.386H26.6689C26.1004 29.3798 25.643 28.9412 25.6431 28.4023C25.6496 27.8697 26.107 27.4412 26.6689 27.4413H34.2434C34.8099 27.4413 35.2692 27.8766 35.2692 28.4137C35.2692 28.9507 34.8099 29.386 34.2434 29.386Z"
      fill="#00ADB5"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1542_9330"
        x1="67.2796"
        y1="33.5484"
        x2="0.182861"
        y2="33.5484"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10507F" />
        <stop offset="1" stopColor="#00ADB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const SellingIcon = () => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.720459"
      y="0.516113"
      width="67.0968"
      height="67.0968"
      rx="20"
      fill="url(#paint0_linear_1542_9343)"
    />
    <rect
      opacity="0.4"
      x="16.3765"
      y="34.0645"
      width="8.94624"
      height="16.7742"
      rx="2.23656"
      fill="white"
    />
    <rect
      x="29.7957"
      y="17.2903"
      width="8.94624"
      height="33.5484"
      rx="2.23656"
      fill="white"
    />
    <rect
      opacity="0.4"
      x="43.2151"
      y="28.473"
      width="8.94624"
      height="22.3656"
      rx="2.23656"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1542_9343"
        x1="67.8172"
        y1="34.0645"
        x2="0.720459"
        y2="34.0645"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10507F" />
        <stop offset="1" stopColor="#00ADB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const PartnerIcon = () => (
  <svg
    width="69"
    height="68"
    viewBox="0 0 69 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.95166"
      y="0.516113"
      width="67.0968"
      height="67.0968"
      rx="20"
      fill="url(#paint0_linear_1542_9354)"
    />
    <path
      d="M28.5698 32.8784C30.4703 30.9778 33.7849 30.9778 35.6854 32.8784L36.8713 34.0643L39.2432 31.6924L38.0573 30.5065C36.4755 28.923 34.3686 28.0491 32.1276 28.0491C29.8866 28.0491 27.7797 28.923 26.1979 30.5065L22.6384 34.0643C21.0689 35.6389 20.1875 37.7715 20.1875 39.9948C20.1875 42.2181 21.0689 44.3507 22.6384 45.9253C23.4165 46.7046 24.3409 47.3223 25.3586 47.7432C26.3762 48.1641 27.4669 48.3797 28.5681 48.3777C29.6696 48.38 30.7607 48.1645 31.7786 47.7437C32.7965 47.3228 33.7212 46.7048 34.4995 45.9253L35.6854 44.7394L33.3135 42.3675L32.1276 43.5535C31.1823 44.4945 29.9028 45.0228 28.5689 45.0228C27.2351 45.0228 25.9556 44.4945 25.0103 43.5535C24.0684 42.6086 23.5395 41.3289 23.5395 39.9948C23.5395 38.6607 24.0684 37.381 25.0103 36.4362L28.5698 32.8784Z"
      fill="white"
    />
    <path
      opacity="0.4"
      d="M34.5001 22.2038L33.3142 23.3897L35.686 25.7616L36.872 24.5756C37.8172 23.6346 39.0968 23.1063 40.4306 23.1063C41.7644 23.1063 43.044 23.6346 43.9893 24.5756C44.9311 25.5205 45.46 26.8002 45.46 28.1343C45.46 29.4684 44.9311 30.7481 43.9893 31.6929L40.4298 35.2507C38.5293 37.1513 35.2147 37.1513 33.3142 35.2507L32.1282 34.0648L29.7563 36.4367L30.9423 37.6226C32.5241 39.2061 34.6309 40.08 36.872 40.08C39.113 40.08 41.2198 39.2061 42.8016 37.6226L46.3611 34.0648C47.9307 32.4902 48.812 30.3576 48.812 28.1343C48.812 25.911 47.9307 23.7784 46.3611 22.2038C44.7869 20.6334 42.6542 19.7515 40.4306 19.7515C38.2071 19.7515 36.0743 20.6334 34.5001 22.2038Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1542_9354"
        x1="68.0484"
        y1="34.0645"
        x2="0.95166"
        y2="34.0645"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10507F" />
        <stop offset="1" stopColor="#00ADB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const DeveloperIcon = () => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.182861"
      y="0.516113"
      width="67.0968"
      height="67.0968"
      rx="20"
      fill="url(#paint0_linear_1542_9364)"
    />
    <rect
      opacity="0.4"
      x="24.7852"
      y="25.1182"
      width="16.7742"
      height="17.8925"
      fill="white"
    />
    <path
      d="M33.7309 38.0897C34.7986 38.0897 35.8226 37.6656 36.5776 36.9106C37.3326 36.1556 37.7567 35.1316 37.7567 34.0639C37.7567 32.9962 37.3326 31.9722 36.5776 31.2172C35.8226 30.4623 34.7986 30.0381 33.7309 30.0381C32.6632 30.0381 31.6392 30.4623 30.8842 31.2172C30.1293 31.9722 29.7051 32.9962 29.7051 34.0639C29.7051 35.1316 30.1293 36.1556 30.8842 36.9106C31.6392 37.6656 32.6632 38.0897 33.7309 38.0897ZM29.7051 18.9671C29.7051 18.7002 29.5991 18.4442 29.4103 18.2555C29.2216 18.0667 28.9656 17.9607 28.6987 17.9607C28.4317 17.9607 28.1757 18.0667 27.987 18.2555C27.7982 18.4442 27.6922 18.7002 27.6922 18.9671V21.9865H26.6857C25.3511 21.9865 24.0711 22.5167 23.1274 23.4604C22.1837 24.4041 21.6535 25.6841 21.6535 27.0188V28.0252H18.6341C18.3672 28.0252 18.1112 28.1312 17.9225 28.32C17.7337 28.5087 17.6277 28.7647 17.6277 29.0317C17.6277 29.2986 17.7337 29.5546 17.9225 29.7433C18.1112 29.9321 18.3672 30.0381 18.6341 30.0381H21.6535V33.0575H18.6341C18.3672 33.0575 18.1112 33.1635 17.9225 33.3522C17.7337 33.541 17.6277 33.797 17.6277 34.0639C17.6277 34.3308 17.7337 34.5868 17.9225 34.7756C18.1112 34.9643 18.3672 35.0704 18.6341 35.0704H21.6535V38.0897H18.6341C18.3672 38.0897 18.1112 38.1958 17.9225 38.3845C17.7337 38.5733 17.6277 38.8292 17.6277 39.0962C17.6277 39.3631 17.7337 39.6191 17.9225 39.8078C18.1112 39.9966 18.3672 40.1026 18.6341 40.1026H21.6535V41.1091C21.6535 42.4437 22.1837 43.7237 23.1274 44.6674C24.0711 45.6112 25.3511 46.1413 26.6857 46.1413H27.6922V49.1607C27.6922 49.4276 27.7982 49.6836 27.987 49.8724C28.1757 50.0611 28.4317 50.1671 28.6987 50.1671C28.9656 50.1671 29.2216 50.0611 29.4103 49.8724C29.5991 49.6836 29.7051 49.4276 29.7051 49.1607V46.1413H32.7245V49.1607C32.7245 49.4276 32.8305 49.6836 33.0192 49.8724C33.208 50.0611 33.464 50.1671 33.7309 50.1671C33.9978 50.1671 34.2538 50.0611 34.4426 49.8724C34.6313 49.6836 34.7374 49.4276 34.7374 49.1607V46.1413H37.7567V49.1607C37.7567 49.4276 37.8628 49.6836 38.0515 49.8724C38.2402 50.0611 38.4962 50.1671 38.7632 50.1671C39.0301 50.1671 39.2861 50.0611 39.4748 49.8724C39.6636 49.6836 39.7696 49.4276 39.7696 49.1607V46.1413H40.7761C42.1107 46.1413 43.3907 45.6112 44.3344 44.6674C45.2781 43.7237 45.8083 42.4437 45.8083 41.1091V40.1026H48.8277C49.0946 40.1026 49.3506 39.9966 49.5394 39.8078C49.7281 39.6191 49.8341 39.3631 49.8341 39.0962C49.8341 38.8292 49.7281 38.5733 49.5394 38.3845C49.3506 38.1958 49.0946 38.0897 48.8277 38.0897H45.8083V35.0704H48.8277C49.0946 35.0704 49.3506 34.9643 49.5394 34.7756C49.7281 34.5868 49.8341 34.3308 49.8341 34.0639C49.8341 33.797 49.7281 33.541 49.5394 33.3522C49.3506 33.1635 49.0946 33.0575 48.8277 33.0575H45.8083V30.0381H48.8277C49.0946 30.0381 49.3506 29.9321 49.5394 29.7433C49.7281 29.5546 49.8341 29.2986 49.8341 29.0317C49.8341 28.7647 49.7281 28.5087 49.5394 28.32C49.3506 28.1312 49.0946 28.0252 48.8277 28.0252H45.8083V27.0188C45.8083 25.6841 45.2781 24.4041 44.3344 23.4604C43.3907 22.5167 42.1107 21.9865 40.7761 21.9865H39.7696V18.9671C39.7696 18.7002 39.6636 18.4442 39.4748 18.2555C39.2861 18.0667 39.0301 17.9607 38.7632 17.9607C38.4962 17.9607 38.2402 18.0667 38.0515 18.2555C37.8628 18.4442 37.7567 18.7002 37.7567 18.9671V21.9865H34.7374V18.9671C34.7374 18.7002 34.6313 18.4442 34.4426 18.2555C34.2538 18.0667 33.9978 17.9607 33.7309 17.9607C33.464 17.9607 33.208 18.0667 33.0192 18.2555C32.8305 18.4442 32.7245 18.7002 32.7245 18.9671V21.9865H29.7051V18.9671ZM39.7696 34.0639C39.7696 35.6655 39.1334 37.2015 38.0009 38.3339C36.8684 39.4664 35.3325 40.1026 33.7309 40.1026C32.1293 40.1026 30.5934 39.4664 29.4609 38.3339C28.3284 37.2015 27.6922 35.6655 27.6922 34.0639C27.6922 32.4624 28.3284 30.9264 29.4609 29.7939C30.5934 28.6614 32.1293 28.0252 33.7309 28.0252C35.3325 28.0252 36.8684 28.6614 38.0009 29.7939C39.1334 30.9264 39.7696 32.4624 39.7696 34.0639Z"
      fill="white"
    />
    <rect
      x="29.2583"
      y="29.5912"
      width="8.94624"
      height="8.94624"
      rx="4.47312"
      fill="#00ADB5"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1542_9364"
        x1="67.2796"
        y1="34.0645"
        x2="0.182861"
        y2="34.0645"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#10507F" />
        <stop offset="1" stopColor="#00ADB5" />
      </linearGradient>
    </defs>
  </svg>
);

export const CaretDown = (props: { className: string }) => (
  <svg
    className={props.className}
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="#00ADB5"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShareIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1560_3481)">
      <path
        d="M12.25 10.72C11.7433 10.72 11.29 10.92 10.9433 11.2334L6.19 8.46671C6.22333 8.31337 6.25 8.16004 6.25 8.00004C6.25 7.84004 6.22333 7.68671 6.19 7.53337L10.89 4.79337C11.25 5.12671 11.7233 5.33337 12.25 5.33337C13.3567 5.33337 14.25 4.44004 14.25 3.33337C14.25 2.22671 13.3567 1.33337 12.25 1.33337C11.1433 1.33337 10.25 2.22671 10.25 3.33337C10.25 3.49337 10.2767 3.64671 10.31 3.80004L5.61 6.54004C5.25 6.20671 4.77667 6.00004 4.25 6.00004C3.14333 6.00004 2.25 6.89337 2.25 8.00004C2.25 9.10671 3.14333 10 4.25 10C4.77667 10 5.25 9.79337 5.61 9.46004L10.3567 12.2334C10.3233 12.3734 10.3033 12.52 10.3033 12.6667C10.3033 13.74 11.1767 14.6134 12.25 14.6134C13.3233 14.6134 14.1967 13.74 14.1967 12.6667C14.1967 11.5934 13.3233 10.72 12.25 10.72Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1560_3481">
        <rect width="16" height="16" fill="white" transform="translate(0.25)" />
      </clipPath>
    </defs>
  </svg>
);

export const BackButton = () => (
  <div className="hover:cursor-pointer" onClick={() => window.history.back()}>
    <svg
      width="18"
      height="30"
      viewBox="0 0 18 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2268 25.3466L6.88011 14.9999L17.2268 4.65328C18.2668 3.61328 18.2668 1.93328 17.2268 0.893281C16.1868 -0.146719 14.5068 -0.146719 13.4668 0.893281L1.22678 13.1333C0.186777 14.1733 0.186777 15.8533 1.22678 16.8933L13.4668 29.1333C14.5068 30.1733 16.1868 30.1733 17.2268 29.1333C18.2401 28.0933 18.2668 26.3866 17.2268 25.3466Z"
        fill="#5A616C"
      />
    </svg>
  </div>
);

export const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2086_13705)">
      <path
        d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
        stroke="#0A0A0B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.3335 10H2.66683C2.31321 10 1.97407 9.85953 1.72402 9.60949C1.47397 9.35944 1.3335 9.0203 1.3335 8.66668V2.66668C1.3335 2.31305 1.47397 1.97392 1.72402 1.72387C1.97407 1.47382 2.31321 1.33334 2.66683 1.33334H8.66683C9.02045 1.33334 9.35959 1.47382 9.60964 1.72387C9.85969 1.97392 10.0002 2.31305 10.0002 2.66668V3.33334"
        stroke="#0A0A0B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2086_13705">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
