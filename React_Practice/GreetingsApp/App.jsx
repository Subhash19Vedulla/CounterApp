import React from "react";
import ReactDOM from "react-dom/client";
import WelcomeMessage from "./GreetComponent";

function App(){
    return(
        <div>
            <WelcomeMessage name={"Subhash"}/>
            <WelcomeMessage name={"Rukku"}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)