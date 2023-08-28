import { produce } from "immer";
import React, { useCallback, useContext, useEffect } from "react";
import { useRef, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";

const HomePage = React.memo(({ name }: { name: string }) => {
  const [data, setData] = useState<{ number: number }>({
    number: 1,
  });
  const [numList, setNumList] = useState<number[]>([1, 2, 3]);
  const counterEl = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setData({
      // 불변성
      ...data,
      number: data.number + 1,
    });
  };

  // 부수효과를 처리하는 훅으로 컴포넌트의 렌더링과 관련없는 작업을 수행할 수 있다.
  // 주로 API 호출, 이벤트 핸들러 등을 처리한다.
  const [changes, setCahnge] = useState<string>("frist");
  useEffect(() => {
    // 2
    setCahnge("useEffect");
  }, [changes]);

  // 함수를 메모이제이션하여 함수를 재사용할 수 있게 해준다.
  const changeOnClick = useCallback(() => {
    // 1
    setCahnge("useCallback");
  }, []);

  // immer
  const [sta, setSta] = useState({
    nu: 1,
  });

  const onClickSta = useCallback(() => {
    setSta(
      produce((draft) => {
        draft.nu += 1;
      })
    );
  }, []);

  // context api
  const getUserName = useContext(UserContext);

  // axios
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data); // .data 라고 해야 데이터에 접근
  };
  useEffect(() => {
    console.log(getUserName);
    getPosts();
  }, []);

  return (
    <div style={{ fontFamily: "ohmyu" }}>
      <h1>HomePage</h1>
      <h2>{name}</h2>
      <h2>{data.number}</h2>
      <button onClick={handleClick}>click</button>
      <h2>{numList}</h2>
      <button
        onClick={() => {
          // 불변성
          setNumList([...numList, numList.length + 1]);
          // setNumList(numList.concat(4));
        }}
      >
        리스트 추가 클릭
      </button>
      <div ref={counterEl} style={{ color: "red" }}>
        {counterEl.current !== null ? counterEl.current.textContent : null}
      </div>
      <button onClick={changeOnClick}>change</button>
      <h2>{changes}</h2>
      <h2>immer:{sta.nu}</h2>
      <button onClick={onClickSta}>immer</button>
    </div>
  );
});

export default HomePage;
