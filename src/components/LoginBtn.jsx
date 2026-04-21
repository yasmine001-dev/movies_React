import styled from "styled-components";

const LoginBtn = () => {
  return (
    <StyledWrapper>
      <button className="animated-button">
        <svg
          viewBox="0 0 24 24"
          className="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">Log in</span>
        <span className="circle" />
        <svg
          viewBox="0 0 24 24"
          className="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
 .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; /* تضمن توسيط المحتوى */
    gap: 8px;                /* مسافة معقولة بين النص والسهم */
    padding: 6px 20px;       /* عرض متناسق مش ضيق أوي ولا واسع أوي */
    border: 2px solid transparent;
    font-size: 12px;         /* كبرت الخط سنة عشان يبقى مقروء */
    background-color: #121212;
    border-radius: 100px;
    font-weight: 700;        /* تقلت الخط شوية ليناسب الستايل */
    color: #ffc107;
    box-shadow: 0 0 0 1.5px #ffc107;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;     /* أهم سطر: يمنع SIGN IN إنها تتقسم لسطرين */
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .animated-button svg {
    position: absolute;
    width: 18px;
    fill: #ffc107;
    z-index: 9;
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 8px;
  }

  .animated-button .arr-2 {
    left: -30%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #248820;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-6px);
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 8px transparent;
    color: #121212;
    background-color: #248820;
    // border-radius: 10px;
  }

  .animated-button:hover .arr-1 {
    right: -30%;
  }

  .animated-button:hover .arr-2 {
    left: 8px;
  }

  .animated-button:hover .text {
    transform: translateX(6px);
  }

  .animated-button:hover svg {
    fill: #121212;
  }

  .animated-button:active {
    scale: 0.94;
    box-shadow: 0 0 0 2px #248820;
  }

  .animated-button:hover .circle {
    width: 120px;
    height: 120px;
    opacity: 1;
  }
`;

export default LoginBtn;
