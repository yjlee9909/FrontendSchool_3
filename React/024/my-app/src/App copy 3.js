import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? '❤️' : ''  
  // let heart = String(like).match(/[369]/g) ? '👏' : '';
  // console.log(typeof(like))
  

// 3,6,9 일때 👏
  function handleClickLike() {
      // setLike(like + 1)
      // console.log(like);
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{heart ? heart : ''}</span>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;