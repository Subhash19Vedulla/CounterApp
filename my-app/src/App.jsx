import React from "react";
import WelcomeMessage from "./GreetComponent";

function App(){
    return(
        <div>
            <WelcomeMessage name={"Subhash"}/>
            <WelcomeMessage name={"Rukku"}/>
        </div>
    )
}
export default App;