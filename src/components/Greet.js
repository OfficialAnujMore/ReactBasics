import React from "react";

// Functional Components
// Use functional component as much as possible.
// Mainly used for UI

// function Greet() {
//   return <h1>Hello Anuj</h1>;
// }

// Props are immutable

// Name export
export const Greet = (props) => {

  const {name,surname} = props
  //   console.log(props);

  return (
    <div>
      <h1>
        Hello {name} {surname}
      </h1>

    </div>
  );
};

// export default Greet;
