// ( ͡° ͜ʖ ͡°)
// pls accept this, I've worked on it for 15 hours.

import { useState } from "react";

function App() {
  const [hovering, setHovering] = useState(false);
  const doge = () => setHovering(true);
  const dog = () => setHovering(false);
  return (
    <div
      className="App"
      style={{ width: "1000px", height: "500px" }}
      onMouseEnter={doge}
      onMouseLeave={dog}
    >
      <header className="App-header">
        {!hovering ? (
          <img src="https://preview.redd.it/waa1i6arvhh81.png?width=960&crop=smart&auto=webp&s=6bdb95f2d4166ce812f3b437f0c435a742af60cb" />
        ) : (
          <img src="https://media1.giphy.com/media/sjuQhdWvCnbZIW0snC/giphy.gif?cid=790b7611cd3255af7b33087bf92da7121e65412d897d9c9e&rid=giphy.gif&ct=g" />
        )}
        <div>Me right now</div>
      </header>
    </div>
  );
}

export default App;
