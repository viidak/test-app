import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";

function App() {
    return (
        <div className="container">
            <Button color="primary">Press me</Button>
        </div>
    );
}

export default App;

if (document.getElementById("reactapp")) {
    ReactDOM.render(<App />, document.getElementById("reactapp"));
}
