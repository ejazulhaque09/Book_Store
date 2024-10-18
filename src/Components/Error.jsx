import { useRouteError } from "react-router-dom";
function Error(){
    const err = useRouteError();
    return(
        <>
        <h1>Oops! </h1>
        <h2>Please enter correct path</h2>
        <h3>{err.status}</h3>
        <h3>{err.data}</h3>
        </>
    )
}
export default Error;