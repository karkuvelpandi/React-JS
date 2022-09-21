import ClassB from "./ClassB"
let FunctionA=()=>{
    let a=20000;
    let array=[1,2,3,4];
    let obj={name:"pandi",sal:100000}
return <div>
    <h1>Hello Im function components</h1>
    <hr/>
<ClassB wish="good morning" a={a} array={array} Object={obj} />
</div>
};

export default FunctionA 