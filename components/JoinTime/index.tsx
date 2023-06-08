interface IJoinTimeProps {
  text: string;
}

export default function JoinTime(props: IJoinTimeProps) {
  return (
    <div className="rounded-[80px] bg-[#000] inline-flex px-[20px] h-[46px] leading-[46px] items-center">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.71 13.2224V6.97446C14.71 6.07564 13.9834 5.34907 13.0846 5.34907C12.1857 5.34907 11.4592 6.07564 11.4592 6.97446V15.0983L18.4963 19.1602C19.2761 19.6049 20.2689 19.3325 20.7104 18.5495C21.1489 17.776 20.8858 16.7957 20.1185 16.3447L14.71 13.2224ZM13 26C5.82197 26 0 20.1812 0 13C0 5.81884 5.82197 0 13 0C20.178 0 26 5.81884 26 13C26 20.1812 20.1812 26 13 26Z"
          fill="white"
        />
      </svg>

      <span className="ml-[10px] font-[900] text-[28px] text-[#FFF]">
        {props.text}
      </span>
    </div>
  );
}
