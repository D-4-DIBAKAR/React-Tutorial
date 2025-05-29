# Higher Order Components (HOC) in React

## 📌 Definition

A **Higher Order Component (HOC)** is an advanced technique in React for reusing component logic.
It’s a **function** that takes a component and returns a **new enhanced component**.

```js
const EnhancedComponent = higherOrderComponent(OriginalComponent);
```

---

## 🔁 Why Use HOC?

HOCs allow **code reuse, logic abstraction**, and **DRY (Don’t Repeat Yourself)** principles across components.

---

## 🧪 Example: `withCounter` HOC

### `withCounter.js`

```js
import React from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // ✅ Pass remaining props
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
```

---

### `ClickCounter.js`

```js
import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter); // ⬅️ Enhancing component using HOC
```

---

## 🦸‍♂️ Fun Analogy

```js
const IronMan = withSuit(TonyStark);
```

Here, `withSuit` is the HOC that adds superhero powers to the `TonyStark` component!

---

## ⚠️ Important Notes

- HOCs **don’t modify** the original component.
- Always **pass remaining props** using `{...this.props}`.
- HOCs **can be nested** or composed for added functionality.

---

## ✅ Use Cases

- Code reuse (e.g., counters, loaders)
- Conditional rendering
- Role-based access control
- Enhancing UI behavior (e.g., tooltips, modals)
