import React, { Component } from "react";
class Welcome extends React.Component {
     render() {
          const { name } = this.props //Destructuring props within render ()
          return (
               <>
                    <h1>Hello From Components/Welcome {name}</h1>
               </>
          );
     }
}
export default Welcome