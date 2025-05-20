import React from "react";

export default function Hello() {
     // return (
     //      <div>
     //           <h1>Hello Users</h1>
     //      </div>
     // );
     return React.createElement(
          "div",
          { id: "hello", className: "demo" },//id:"hello" class => className
          React.createElement("h1", {}, "Hello Users")
     );
}

//class -> className
//for -> htmlFor