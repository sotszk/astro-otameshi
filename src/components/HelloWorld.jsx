import React, { useState } from 'react';

export default ({ name = 'World' }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, {name}!</h1>
      <div>
        <input type="text" onChange={() => {
          console.log('?');
          setCount(count => count += 1)
        }} />
      </div>
      <p>{count}</p>
    </>
  )
}
