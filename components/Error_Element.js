import { useRouteError } from "react-router-dom";

const Error_Element = () =>
{
    const err = useRouteError();
    console.log(err)
    return (<div>
        <h1>Ooooops......</h1>
        <h2>Something went wrong</h2>
        <h3>{err.status},{err.statusText}</h3>
        
         

    </div>)
    
}

export default Error_Element;
