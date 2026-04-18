// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //<---- Attributes , like id and things
//   "First project using  React", //--> Children that goes inside the h1 tag. Could be anything
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //This is responsible to convert the react createElement into an actual h1 tag and push it into root div in index.html

/*
 *<div id="parent">
 *    <div id="child">
 *        <h1 id='heading1'>Heading 1</h1>
 *        <h2 id="heading2">heading 2<h2>
 *   </div>
 *</div>
 *
 */

// const heading1 = React.createElement("h1", { id: "heading1" }, "Heading 1");
// const heading2 = React.createElement("h2", {}, "Checking H2 tag");
// const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
// const parent = React.createElement("div", { id: "parent" }, child);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "header" }, "Nested div structure"),
//     React.createElement("h2", { id: "heading2" }, "Second Heading"),
//   ]),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
 *<div id="parent">
 *    <div id="child">
 *        <h1 id='heading1'>Heading 1</h1>
 *        <h2 id="heading2">heading 2<h2>
 *   </div>
 *  <div id="child2">
 *        <h1 id='heading3'>Heading 1</h1>
 *        <h2 id="heading4">heading 2<h2>
 *   </div>
 *</div>
 *
 */

const heading1 = React.createElement("h1", { id: "heading1" }, "Heading1");
const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "This is heading 2",
);
const child1 = React.createElement("div", { id: "child1" }, [
  heading1,
  heading2,
]);

const heading3 = React.createElement(
  "h1",
  { id: "heading3" },
  "This is heading3",
);
const heading4 = React.createElement(
  "h2",
  { id: "heading4" },
  "This is heading4",
);
const child2 = React.createElement("div", { id: "child2" }, [
  heading3,
  heading4,
]);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "heading1" }, "Initial Heading1"),
//     React.createElement("h2", { id: "heading2" }, "This is heading2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading3" }, "Initial Heading3"),
//     React.createElement("h2", { id: "heading4" }, "This is heading4"),
//   ]),
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
