import styled, { keyframes } from "styled-components";

// 반응형
const Container = styled.div`
  @media (max-width: 1024px) {
    font-size: 20px;
    color: blue;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    color: red;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    color: green;
  }
`;

// props 사용
const Box = styled.div<{ color: string; isclicked: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${({ isclicked }) => (isclicked ? "#465738" : "#85c4b3")};
  color: ${(props) => props.color || "yellow"};
`;
// keyframes 사용
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
// themeProvider 사용
const Prove = styled.div`
  width: auto;
  height: 30px;
  background-color: ${(props) => props.theme.color.main};
  font-size: ${(props) => props.theme.size.medium};
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
`;

const StyledComponent = () => {
  return (
    <div>
      <h1>StyledComponent</h1>
      <Container>안녕하세요..!</Container>
      <Box color="yellow" isclicked={true}>
        Box
      </Box>
      <Box color="gray" isclicked={false}>
        Box
      </Box>
      <Prove>ThemeProvider</Prove>
    </div>
  );
};

export default StyledComponent;
