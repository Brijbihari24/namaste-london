const heading = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { id: "heading" }, "this is h1 heading tag"),
            React.createElement("h2", { id: "heading 2" }, "this is h2 heading tag")
        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", { id: "heading" }, "this is h1 heading tag"),
            React.createElement("h2", { id: "heading 2" }, "this is h2 heading tag")
        ]
    ),
]



);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);