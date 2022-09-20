// import FunctionCompA from "./FunctionCompA"
let FunctionCompB = (prop) => {
    return <div>
        <h1>Im componenet B</h1>
        <h2>testing</h2>

        <pre>{JSON.stringify(prop)}</pre>
        <h1>Employee name={prop.four.name}</h1>
{/* <FunctionCompA/> */}                     



    </div>
};
//tried to inter connect both not getting the output // Read commented lines carefully
export default FunctionCompB