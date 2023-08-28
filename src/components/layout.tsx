import { NavLink, Outlet } from "react-router-dom";

const NavLinkStyle = ({ text, link }: { text: string; link: string }) => {
  return (
    <NavLink
      to={link}
      style={({ isActive }) => (isActive ? { color: "green" } : undefined)}
    >
      {text}
      <br />
    </NavLink>
  );
};

const Layout = () => {
  return (
    <>
      <NavLinkStyle text="Home" link="/" />
      <NavLinkStyle
        text="반응형 웹 - react-responsive 라이브러리 사용하기"
        link="/responsive/mediaquery"
      />
      <NavLinkStyle
        text="반응형 웹 - styled-component 사용하기"
        link="/responsive/styledcomponent"
      />
      <NavLinkStyle
        text="스타일 작업 - sass 사용하기"
        link="/responsive/sasss"
      />
      <NavLinkStyle text="Counter" link="/counter" />
      <Outlet />
    </>
  );
};

export default Layout;
