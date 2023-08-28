import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import theme from "./styles/theme";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ohmyu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

// context api
interface ContextProps {
  username: string;
}
export const UserContext = createContext<ContextProps | undefined>(undefined);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <UserContext.Provider value={{ username: "김영희" }}>
            <Router />
          </UserContext.Provider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
