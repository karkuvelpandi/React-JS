
let Msg = (pro) => {
    return <div>
          <h1>Iam the message component</h1>

          <pre>{JSON.stringify(pro)}</pre>
          <pre>Update={pro.one.message}</pre>
 

    </div>
};
export default Msg