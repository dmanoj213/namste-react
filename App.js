
// const heading = React.createElement("h1",{id : "root"},"Hello Vadhi from React")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// console.log(heading);

// root.render(heading)

// {/* <div id="parent1">

//     </div id="child1">
//        <h1>I am an h1 tag</h1>
//        <h2>I am an h2 tag</h2>
//     </div>

// </div>

// <div id="parent2">

// </div id="child2">
//    <h1>I am an h1 tag</h1>
//    <h2>I am an h2 tag</h2>
// </div>

// </div>
//  */}

// when you want to crate the structure of the above

const heading = React.createElement("div",{id:"parent1"},
    React.createElement("div",{id: "child1"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")]))

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);