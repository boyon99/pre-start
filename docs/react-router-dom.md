1. 설치하기

```
npm i react-router-dom
```

2. src/index.js 파일에 적용하기

```jsx
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

3. routes/Router.tsx 파일 생성하기

```tsx
// CRA의 경우
import { Route, Routes } from "react-router-dom";
import App from "../App";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default Router;
```

```tsx
// VITE의 경우
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<ResponsivePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
```

3-1. ProtectedRouter.tsx 파일 생성하기 (로그인 등 생성해야 하는 경우)

특정 route를 보호하기 위함으로 로그인 여부를 체크하는 라우터나 컴포넌트를 미리 만드는 식으로 구현한다.
