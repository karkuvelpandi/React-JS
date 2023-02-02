import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import jsPDF from "jspdf" ;
import ReactDOMServer from "react-dom/server";
const Download = () => {
let [data,setData]=useState([])

// let getPdf=()=>{                           //this function for JSX ONLY
//    var doc=new jsPDF('p','pt','a4')
//    doc.html(document.querySelector('#content'),{
//     callback:function(pdf){
//       pdf.save('myPdf.pdf');
//     }
//    })
// }
const exportPDF = () => {       //this function is for only TSX
  let element=(<div style={{display: "flex",flexWrap:"wrap"}}>Sample Text</div>)
  const doc = new jsPDF();
  doc.html(ReactDOMServer.renderToString(element), {
    callback: function (doc) {
      doc.save('sample.pdf');
    }
  });
}
useEffect(()=>{
   Axios.get('https://dummyjson.com/carts').then((response)=>{
      setData(response.data.carts)
   }).catch((err)=>{
     console.log(err);
   })
},[])




  return <>
<div id='content'>
    <h1>Hello imad</h1>
    {
        data.map((dat)=>{
          return <>
            <h2></h2>
          </>
        })
    }
</div>


  <button onClick={exportPDF}>Download</button>
  
  </>
  
}

export default Download