import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

import Styles from '@styles/hello-world.module.scss';

const place = import.meta.env.PUBLIC_PLACE;

export default ({ name = "World" }: { name: string }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    new Typed("#hello-typed", {
      strings: ["hello", "I use", "typed.js"],
    });
  }, []);

  return (
    <>
      <h1 className={Styles.heading}>Hello, {name}!</h1>
      <div id="hello-typed"></div>
      <p>Public Place: {place ? place : "設定されていません"}</p>
      <div>
        <input
          type="text"
          onChange={() => {
            setCount((count) => (count += 1));
          }}
        />
      </div>
      <p>{count}</p>
    </>
  );
};
