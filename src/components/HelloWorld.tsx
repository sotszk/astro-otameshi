import React, { useState } from 'react';

import Styles from '@styles/hello-world.module.scss';

export default ({ name = "World" }: { name: string }) => {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1 className={Styles.heading}>Hello, {name}!</h1>
      <div>
        <input
          type="text"
          onChange={() => {
            console.log("?");
            setCount((count) => (count += 1));
          }}
        />
      </div>
      <p>{count}</p>
    </>
  );
};
