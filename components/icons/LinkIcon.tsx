import * as React from "react";
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21.6667 10.0003L25 6.66699C26.6667 5.00033 30 5.00033 31.6667 6.66699L33.3334 8.33366C35 10.0003 35 13.3337 33.3334 15.0003L25 23.3337C23.3334 25.0003 20 25.0003 18.3334 23.3337M18.3334 30.0003L15 33.3337C13.3334 35.0003 10 35.0003 8.33335 33.3337L6.66669 31.667C5.00002 30.0003 5.00002 26.667 6.66669 25.0003L15 16.667C16.6667 15.0003 20 15.0003 21.6667 16.667"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default LinkIcon;
