## React 시작하기

### create-react-app (CRA)

#### JS 사용하기

```
npm install -g create-react-app
create-react-app [폴더명]
cd [생성한 폴더]
npm start
```

#### TS 사용하기

```console
// 이미 있는 React 프로젝트에 설치할 경우
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

```console
// React 프로젝트를 새로 생성할 경우
npx create-react-app my-app --template typescript
```

### vite

> CRA 대신 vite를 사용하는 이유
>
> > CRA를 사용하면 초기 설정을 자동으로 수행할 수 있어 간편하게 React 개발을 시작할 수 있습니다. vite의 경우 다양한 플로그인을 지원하고 있고, 기본적으로 타입스크립트를 지원하고 있습니다. 또한 필요할 때마다 분할 번들링을 하여 생성된 번들의 크기를 최적화하는 등의 장점이 있습니다. 마지막으로 CRA는 commonJS 모듈을 사용하는 반면 vite는 ES모듈을 사용하여 빠른 모듈 로딩을 가능하게 합니다.

> ES 모듈과 CommonJS 모듈의 차이
>
> > 문법:
> >
> > - ES 모듈: ES6부터 도입된 표준 ECMAScript 모듈 문법을 사용합니다. import와 export 키워드를 사용하여 모듈을 로드하고 내보냅니다.
> > - CommonJS 모듈: Node.js 환경에서 주로 사용되며, require() 함수로 모듈을 로드하고 module.exports 또는 exports 객체로 모듈을 내보냅니다.
> >
> > 브라우저 지원:
> >
> > - ES 모듈: 최신 브라우저에서 지원됩니다. <script type="module"> 속성을 사용하여 브라우저에서도 ES 모듈을 로드할 수 있습니다.
> > - CommonJS 모듈: 기본적으로 브라우저에서 직접 사용할 수 없지만, 번들링 도구를 통해 브라우저에서도 사용할 수 있는 형태로 변환될 수 있습니다.
> >
> > 동적 로딩:
> >
> > - ES 모듈: 모듈 로딩을 동적으로 처리하는 import() 함수를 지원합니다.
> > - CommonJS 모듈: 동적 로딩을 위해 require() 함수 대신에 import() 함수를 사용할 수 있는 환경도 있지만, 기본적으로는 동적 로딩이 지원되지 않습니다.
> >
> > 호이스팅:
> >
> > - ES 모듈: ES 모듈은 정적으로 분석되며, 모듈 로딩은 런타임에 동작합니다. 따라서 호이스팅과 같은 예측 불가능한 동작을 방지합니다.
> > - CommonJS 모듈: CommonJS 모듈은 동적으로 로딩되며, 런타임 시에 모듈 로딩이 이루어지므로 호이스팅과 관련한 이슈가 발생할 수 있습니다.

#### JS 사용하기

```
// npm
npm create vite@latest
npm run dev
// yarn
yarn create vite my-react-app --template react
yarn dev
```

#### TS 사용하기

```
// npm
npm create vite my-react-ts-app --template react-ts
npm run dev
// yarn
yarn create vite [프로젝트 명] --template react-ts
yarn dev
```

> npm과 yarn의 차이
>
> > 속도
> > npm과 yarn의 주요 차이점 중 하나는 패키지 설치 프로세스를 처리하는 방법입니다. npm은 패키지를 한 번에 하나씩 순차적으로 설치합니다. 그에 비해 yarn은 여러 패키지를 동시에 가져오고 설치하도록 최적화되어 있어 패키지 설치 속도 측면에서 yarn이 npm보다 빠릅니다.
> > 보안
> > yarn은 보안 측면에서 npm보다 더 안전한 것으로 알려져 있습니다. npm은 자동으로 패키지에 포함된 다른 패키지 코드를 실행합니다. 이로 인해 보안 시스템에 몇 가지 취약성이 발생하며 나중에 심각한 문제가 발생할 수 있습니다. 반면에 yarn은 yarn.lock 또는 package.json파일에 있는 파일만을 설치합니다. 보안은 yarn의 핵심 기능 중 하나이지만 최근 npm의 업데이트에서 npm의 보안 업데이트도 크게 향상되었습니다.
