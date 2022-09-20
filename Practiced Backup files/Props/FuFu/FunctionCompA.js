import FunctionCompB from "./FunctionCompB"
let FunctionCompA = () => {
    let a=100;
    let array=[1,2,3,5];
    let emp={name: "rahul",sal:10000};

    return <div>
        <h1>Im componenet A</h1>
        <h3>value={a}</h3>
        <hr />
        <FunctionCompB one={"Hello good morning"} two={a} three={array} four={emp}/>

    </div>

};

export default FunctionCompA