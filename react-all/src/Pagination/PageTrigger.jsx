import React from 'react'

const PageTrigger = ({postPerPage,totalPost,paginate}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i)
    }
  return <>
     <div>
        <ul style={{display:"flex",width:"60px",justifyContent:"space-around"}}>
            {
                pageNumbers.map(number=>{
                    return <li style={{listStyle:"none",margin:"1rem"}}>
                      <a href="!#" onClick={()=>{paginate(number)}} style={{textDecoration:"none",fontSize:"2rem"}}>{number}</a>
                    </li>
                })
            }
        </ul>
     </div>
  </>
}

export default PageTrigger