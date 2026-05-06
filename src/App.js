import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

// *React.createElement() => Object => HTMLelement (while rendering)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Creating Heading with React.createElement",
// );

// *JSX is not HTML inside Javascript.. Its an HTML like syntax or XML like
// !JSX is transpiled before it reaches JS engine -- Using Babel
// *JSX ==> Babel ==> Transpiled to React.createElement ==> Object ==> HTMLElement (while rendering)

// *React Element
// const jsxHeading = (
//   <h1 id="heading" tabIndex="1" className="head">
//     Creating heading using JSX
//   </h1>
// );

// ?React Functional Component
// const HeadingComponent = () => {
//   return (
//     <>
//       {jsxHeading}
//       <h1 className="heading1">First Functional component</h1>
//     </>
//   );
// };

// const HeadingComponent2 = () => (
//   <div id="container">
//     <h1 className="heading2">Heading Component2</h1>
//     <HeadingComponent />
//   </div>
// );

// const number = 10000;

// const App = () => {
//   return (
//     <>
//       <Header />
//       <HeadingComponent />
//       <HeadingComponent2 />
//       {/* You can execute a react component like this. end of the dat its a function */}
//       {HeadingComponent()}
//     </>
//   );
// };
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

// *mandatory to use ( ) for JSX when we have more than 1 line
// ? all attributes inside JSX will be camelcase

// *Planning of our App

/*
? Header
?  - Logo
?  - Nav Items
? Body
?  - Search
?  - ResturantContainer
?  - ResturantCard
? Footer
?  - Copyright
?  - Link
?  - Address
?  - Contacts
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
