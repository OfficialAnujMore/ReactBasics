import React from "react";


// JSX 
const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello Anuj</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    {id:'hello', className:'dummy_hello'},
    React.createElement("h1", null, "Hello Anuj !!")
  );
};

export default Hello;
