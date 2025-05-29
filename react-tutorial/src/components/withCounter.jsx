import React from "react";

// const updatedComponent = (OriginalComponent) => {
//      class NewComponent extends React.Component {
//           constructor(props) {
//                super(props);
//                this.state = {
//                     count: 0,
//                };
//           }
//           incrementCount = () => {
//                this.setState((prevState) => {
//                     return {
//                          count: prevState.count + 1,
//                     };
//                });
//           };
//           render() {
//                return (
//                     <OriginalComponent name="Rakesh"
//                          count={this.state.count}
//                          incrementCount={this.incrementCount}
//                     />
//                );
//           }
//      }
//      return NewComponent;
// };

// export default updatedComponent;

const withCounter = (WrappedComponent, incrementNumber) => {
     class WithCounter extends React.Component {
          constructor(props) {
               super(props)

               this.state = {
                    count: 0
               }
          }
          incrementCount = () => {
               this.setState((prevState) => {
                    return {
                         count: prevState.count + incrementNumber
                    }
               })
          }
          render() {
               console.log("Render:", this.props.name);

               return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
          }
     }

     return WithCounter;
}
export default withCounter
