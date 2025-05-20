import React from "react";

export default function Hello() {
     // return (
     //      <div>
     //           <h1>Hello Users</h1>
     //      </div>
     // );
     return React.createElement(
          "div",
          {},
          React.createElement("h1", {}, "Hello Users")
     );
}