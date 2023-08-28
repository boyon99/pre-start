import { useMediaQuery } from "react-responsive";

const Desktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? <p style={{ color: "blue" }}>{children}</p> : null;
};

const Tablet = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? <p style={{ color: "red" }}>{children}</p> : null;
};

const Mobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <p style={{ color: "orange" }}>{children}</p> : null;
};

const MediaQuery = () => {
  return (
    <>
      <h1>Device Test</h1>
      <Desktop>
        <p>Desktop or laptop</p>
      </Desktop>
      <Tablet>
        <p>Tablet</p>
      </Tablet>
      <Mobile>
        <p>Mobile</p>
      </Mobile>
    </>
  );
};

export default MediaQuery;
