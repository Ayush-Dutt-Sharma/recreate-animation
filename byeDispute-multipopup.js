import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const redData = [
    {
      name: "Payment with suspicious email",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
            className={t}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41L20.41 19M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v7.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-11V6l-8 5l-8-5v2l8 5l8-5Z" />
          </svg>
        );
      },
    },
    {
      name: "2+ payments with same card within 15 minutes",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
            className={t}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 9V6H7v3h14m0-6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M3 19h15v2H3a2 2 0 0 1-2-2V8h2Z" />
          </svg>
        );
      },
    },
    {
        name: "Card reported stolen or lost",
        svg: (e) => {
          let { style: t } = e;
          return (
            <svg
              className={t}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 12.5c0 .3-1.3.7-2.3.7s-2.1-.7-2.1-.9c0-.3.7-1.2 2.3-1.3c.9-.1 1.9.5 2.1 1.5m4.7-1.5c-1-.1-1.9.5-2.1 1.5c0 .3 1.2.7 2.3.7c1.1 0 2.1-.7 2.1-.9s-.7-1.2-2.3-1.3m6.6 1c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2-.8c0-2-.7-2.7-3.3-2.7c-2.6 0-3.4 1.1-4.7 1.1s-2-1.1-4.7-1.1S4 9.1 4 11.2c0 3.4 1.5 5.3 3.6 5.3c1.6 0 2.8-2 4.4-2s2.7 2 4.4 2c2.1 0 3.6-1.9 3.6-5.3Z"/>
            </svg>
          );
        },
      },
      {
        name: "Dispute arises",
        svg: (e) => {
          let { style: t } = e;
          return (
            <svg
              className={t}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.2 8l-4-4H20a2 2 0 0 1 2 2v12a1.91 1.91 0 0 1-.12.68L14.2 11H20V8m.84 14.73L18.11 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 .65-1.46L1.11 3l1.28-1.27l19.72 19.73M9.11 11l-3-3H4v3Z"/>
            </svg>
          );
        },
      },
  ];
  const blueData = [
    {
      name: "Send email alert + Refund last payment",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
            className={
              t +
              " w-5 h-5 group-hover:scale-105 hover:scale-105 duration-100 !w-12 !h-12 md:!w-16 md:!h-16 hover:!scale-[1]"
            }
            viewBox="0 0 1000 1000"
          >
            <g clip-path="url(#clip0_2_24)">
              <path
                d="M520.633 41.7802C509.052 30.808 490.91 30.8185 479.342 41.8041C378.601 137.471 244.438 189.942 105.525 188.003C92.4079 187.82 80.6934 196.18 76.6023 208.644C56.943 268.537 46.9504 331.179 47 394.215C47.0057 671.054 236.321 903.556 492.518 969.536C497.424 970.799 502.57 970.8 507.477 969.537C763.683 903.605 953 671.093 953 394.25C953 329.456 942.611 267.028 923.393 208.582C919.345 196.273 907.852 187.953 894.894 187.953H887.75C745.505 187.953 616.325 132.443 520.633 41.7802Z"
                fill="#4379FF"
                stroke="#F8F9FD"
                className="stroke-primary group-hover:stroke-primary-focus fill-base-200"
                stroke-width="60"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <g clip-path="url(#clip1_2_24)">
                <path
                  d="M500.621 716C514.973 716 526.626 705.038 526.626 691.498C526.626 677.975 526.626 667.013 526.626 667.013C597.625 660.509 644.625 623.008 644.625 562.002V561.004C644.625 499.001 604.623 470.504 525.125 452.009V394.009C536.57 396.806 548.422 400.769 560.006 405.91C578.647 414.174 601.301 408.994 612.62 390.491C623.947 371.998 617.828 346.022 596.844 336.601C575.949 327.231 553.016 320.776 527.614 318V302.994C527.614 294.722 515.98 288 501.618 288C487.256 288 475.613 294.386 475.613 302.233C475.613 310.111 475.613 316.486 475.613 316.486C399.098 321.992 356.102 362.992 356.102 421.992V423C356.102 484.995 397.101 512.512 477.608 530.996V591.004C458.294 587.891 439.386 581.476 420.141 571.65C399.64 561.191 374.525 564.89 362.1 583.253C349.667 601.608 354.688 627.684 375.356 637.824C405.72 652.741 440.038 662.485 474.604 666.025V691.022C474.615 704.811 486.259 716 500.621 716ZM524.611 539.003C550.627 546.495 558.117 554.008 558.117 567.499V568.508C558.117 583.008 547.621 591.498 524.611 594.01V539.003ZM444.101 415.488V414.49C444.101 401.493 453.609 391.489 478.103 389.493V443.501C451.111 435.997 444.101 428.485 444.101 415.488Z"
                  className="fill-primary group-hover:fill-primary-focus"
                ></path>
              </g>
            </g>
          </svg>
        );
      },
    },
    {
      name: "Refund all payments (within 60 days)",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
            className={
              t +
              " w-5 h-5 group-hover:scale-105 hover:scale-105 duration-100 !w-12 !h-12 md:!w-16 md:!h-16 hover:!scale-[1]"
            }
            viewBox="0 0 1000 1000"
          >
            <g clip-path="url(#clip0_2_24)">
              <path
                d="M520.633 41.7802C509.052 30.808 490.91 30.8185 479.342 41.8041C378.601 137.471 244.438 189.942 105.525 188.003C92.4079 187.82 80.6934 196.18 76.6023 208.644C56.943 268.537 46.9504 331.179 47 394.215C47.0057 671.054 236.321 903.556 492.518 969.536C497.424 970.799 502.57 970.8 507.477 969.537C763.683 903.605 953 671.093 953 394.25C953 329.456 942.611 267.028 923.393 208.582C919.345 196.273 907.852 187.953 894.894 187.953H887.75C745.505 187.953 616.325 132.443 520.633 41.7802Z"
                fill="#4379FF"
                stroke="#F8F9FD"
                className="stroke-primary group-hover:stroke-primary-focus fill-base-200"
                stroke-width="60"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <g clip-path="url(#clip1_2_24)">
                <path
                  d="M500.621 716C514.973 716 526.626 705.038 526.626 691.498C526.626 677.975 526.626 667.013 526.626 667.013C597.625 660.509 644.625 623.008 644.625 562.002V561.004C644.625 499.001 604.623 470.504 525.125 452.009V394.009C536.57 396.806 548.422 400.769 560.006 405.91C578.647 414.174 601.301 408.994 612.62 390.491C623.947 371.998 617.828 346.022 596.844 336.601C575.949 327.231 553.016 320.776 527.614 318V302.994C527.614 294.722 515.98 288 501.618 288C487.256 288 475.613 294.386 475.613 302.233C475.613 310.111 475.613 316.486 475.613 316.486C399.098 321.992 356.102 362.992 356.102 421.992V423C356.102 484.995 397.101 512.512 477.608 530.996V591.004C458.294 587.891 439.386 581.476 420.141 571.65C399.64 561.191 374.525 564.89 362.1 583.253C349.667 601.608 354.688 627.684 375.356 637.824C405.72 652.741 440.038 662.485 474.604 666.025V691.022C474.615 704.811 486.259 716 500.621 716ZM524.611 539.003C550.627 546.495 558.117 554.008 558.117 567.499V568.508C558.117 583.008 547.621 591.498 524.611 594.01V539.003ZM444.101 415.488V414.49C444.101 401.493 453.609 391.489 478.103 389.493V443.501C451.111 435.997 444.101 428.485 444.101 415.488Z"
                  className="fill-primary group-hover:fill-primary-focus"
                ></path>
              </g>
            </g>
          </svg>
        );
      },
    },
    {
      name: "Refund last payment",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
            className={
              t +
              "w-5 h-5 group-hover:scale-105 hover:scale-105 duration-100 !w-12 !h-12 md:!w-16 md:!h-16 hover:!scale-[1]"
            }
            viewBox="0 0 1000 1000"
          >
            <g clip-path="url(#clip0_2_24)">
              <path
                d="M520.633 41.7802C509.052 30.808 490.91 30.8185 479.342 41.8041C378.601 137.471 244.438 189.942 105.525 188.003C92.4079 187.82 80.6934 196.18 76.6023 208.644C56.943 268.537 46.9504 331.179 47 394.215C47.0057 671.054 236.321 903.556 492.518 969.536C497.424 970.799 502.57 970.8 507.477 969.537C763.683 903.605 953 671.093 953 394.25C953 329.456 942.611 267.028 923.393 208.582C919.345 196.273 907.852 187.953 894.894 187.953H887.75C745.505 187.953 616.325 132.443 520.633 41.7802Z"
                fill="#4379FF"
                stroke="#F8F9FD"
                className="stroke-primary group-hover:stroke-primary-focus fill-base-200"
                stroke-width="60"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <g clip-path="url(#clip1_2_24)">
                <path
                  d="M500.621 716C514.973 716 526.626 705.038 526.626 691.498C526.626 677.975 526.626 667.013 526.626 667.013C597.625 660.509 644.625 623.008 644.625 562.002V561.004C644.625 499.001 604.623 470.504 525.125 452.009V394.009C536.57 396.806 548.422 400.769 560.006 405.91C578.647 414.174 601.301 408.994 612.62 390.491C623.947 371.998 617.828 346.022 596.844 336.601C575.949 327.231 553.016 320.776 527.614 318V302.994C527.614 294.722 515.98 288 501.618 288C487.256 288 475.613 294.386 475.613 302.233C475.613 310.111 475.613 316.486 475.613 316.486C399.098 321.992 356.102 362.992 356.102 421.992V423C356.102 484.995 397.101 512.512 477.608 530.996V591.004C458.294 587.891 439.386 581.476 420.141 571.65C399.64 561.191 374.525 564.89 362.1 583.253C349.667 601.608 354.688 627.684 375.356 637.824C405.72 652.741 440.038 662.485 474.604 666.025V691.022C474.615 704.811 486.259 716 500.621 716ZM524.611 539.003C550.627 546.495 558.117 554.008 558.117 567.499V568.508C558.117 583.008 547.621 591.498 524.611 594.01V539.003ZM444.101 415.488V414.49C444.101 401.493 453.609 391.489 478.103 389.493V443.501C451.111 435.997 444.101 428.485 444.101 415.488Z"
                  className="fill-primary group-hover:fill-primary-focus"
                ></path>
              </g>
            </g>
          </svg>
        );
      },
    },
  ];
  const stripeData = [
    {
      name: "Dispute avoided + Saved $15 fee \uD83C\uDF89",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
          className={t}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.87 28.87"
            id="stripe"
          >
            <g>
              <g>
                <rect
                  width="28.87"
                  height="28.87"
                  fill="#6772e5"
                  rx="6.48"
                  ry="6.48"
                ></rect>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M13.3 11.2c0-.69.57-1 1.49-1a9.84 9.84 0 0 1 4.37 1.13V7.24a11.6 11.6 0 0 0-4.36-.8c-3.56 0-5.94 1.86-5.94 5 0 4.86 6.68 4.07 6.68 6.17 0 .81-.71 1.07-1.68 1.07A11.06 11.06 0 0 1 9 17.25v4.19a12.19 12.19 0 0 0 4.8 1c3.65 0 6.17-1.8 6.17-5 .03-5.21-6.67-4.27-6.67-6.24z"
                ></path>
              </g>
            </g>
          </svg>
        );
      },
    },
    {
      name: "More disputes avoided \uD83C\uDF89",
      svg: (e) => {
        let { style: t } = e;
        return (
          <svg
          className={t}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.87 28.87"
            id="stripe"
          >
            <g>
              <g>
                <rect
                  width="28.87"
                  height="28.87"
                  fill="#6772e5"
                  rx="6.48"
                  ry="6.48"
                ></rect>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M13.3 11.2c0-.69.57-1 1.49-1a9.84 9.84 0 0 1 4.37 1.13V7.24a11.6 11.6 0 0 0-4.36-.8c-3.56 0-5.94 1.86-5.94 5 0 4.86 6.68 4.07 6.68 6.17 0 .81-.71 1.07-1.68 1.07A11.06 11.06 0 0 1 9 17.25v4.19a12.19 12.19 0 0 0 4.8 1c3.65 0 6.17-1.8 6.17-5 .03-5.21-6.67-4.27-6.67-6.24z"
                ></path>
              </g>
            </g>
          </svg>
        );
      },
    },
  ];
  

const defaultDataState = {
  redData: 0,
  blueData: 0,
  stripeData: 0,
};

function App() {
  const [dataState, setDataState] = useState(defaultDataState);

  const handleDataState = () => {
    let newRed =
      dataState["redData"] + 1 >= redData.length ? 0 : dataState["redData"] + 1;
    let newBlue =
      dataState["blueData"] + 1 >= blueData.length
        ? 0
        : dataState["blueData"] + 1;
    let newStripe =
      dataState["stripeData"] + 1 >= stripeData.length
        ? 0
        : dataState["stripeData"] + 1;

    setDataState({
      redData: newRed,
      blueData: newBlue,
      stripeData: newStripe,
    });
  };

  return <Main dataState={dataState} handleDataState={handleDataState} />;
}

export default App;

function Main({ dataState, handleDataState }) {
  return (
    <div style={{marginTop:'100px'}}>
    <div className="relative w-full max-w-lg flex flex-col gap-16 md:gap-24 items-center mx-auto">
      <div key={Math.random()}className="relative rounded-lg bg-base-100 max-md:py-1.5 p-2 pl-14 flex gap-10 items-center w-full animate-popup border-2 md:border-[3px] border-red-100 z-30">
        <div className="absolute left-0 -translate-x-1/3">
          <Icon>
            {redData[dataState["redData"]].svg({
              style: "w-6 h-6 md:w-8 md:h-8 fill-red-600",
            })}
          </Icon>
        </div>
        <div>
          <p className="font-semibold text-red-500 text-base md:text-xl">
            {redData[dataState["redData"]].name}
          </p>
        </div>
      </div>
      <div  key={Math.random()} className="relative w-full z-20">
        <Line color="stroke-red-100" style={"animate-opacity-short"} />
        <div className="relative rounded-lg bg-base-100 max-md:py-1.5 p-2 pl-14 flex gap-10 items-center w-full animate-popup-short border-2 md:border-[3px] border-primary/30 z-10">
          <div className="absolute left-0 -translate-x-1/3">
            {blueData[dataState["blueData"]].svg({
              style: "!w-12 !h-12 md:!w-16 md:!h-16 hover:!scale-[1]",
            })}
          </div>
          <div>
            <p className="font-semibold text-primary text-base md:text-xl">
              {blueData[dataState["blueData"]].name}
            </p>
          </div>
        </div>
      </div>
      <div key={Math.random()} className="relative w-full">
        <Line color="stroke-primary/30" style={"animate-opacity-long"} />
        <div className="relative rounded-lg bg-base-100 max-md:py-1.5 p-2 pl-14 flex gap-10 items-center w-full animate-popup-long border-2 md:border-[3px] z-10">
          <div className="absolute left-0 -translate-x-1/3">
            {stripeData[dataState["stripeData"]].svg({
              style: "w-12 h-12 md:w-16 md:h-16 ",
            })}
          </div>
          <div>
            <p className="font-semibold text-base md:text-xl">
              {stripeData[dataState["stripeData"]].name}
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <button className="btn  btn-sm" onClick={handleDataState}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 animate-wiggle"
            >
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clipRule="evenodd"
              />
            </svg>
            New trigger
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
function Icon({ children }) {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 inline-flex items-center justify-center rounded-full bg-red-100">
      {children}
    </div>
  );
}

function Line({ color, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      className={
        style +
        ` h-24 md:h-36 absolute top-3.5 -translate-y-full left-1/2 
      -translate-x-1/2 `
      }
    >
      <g
        strokeWidth="20"
        className={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="62 62"
        transform="rotate(45, 400, 400)"
      >
        <line
          x1="167.5"
          y1="167.5"
          x2="632.5"
          y2="632.5"
          markerEnd="url(#SvgjsMarker1641)"
        />
      </g>
    </svg>
  );
}
