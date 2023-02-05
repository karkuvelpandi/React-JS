import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import PageTrigger from './PageTrigger'
const Pagination = () => {
    let [posts, setPosts] = useState([])
    let [loading, setLoading] = useState()
    let [currentPage, setCurrentPage] = useState(1)
    let [postperPage, setPostperPage] = useState(10)


    useEffect(() => {
        Axios.get('https://dummyjson.com/posts').then((response) => {
            setPosts(response.data.posts)
        }).catch((error) => {
            console.log(error);
        })
    })
   
    if(loading){
        return <h1>Loading ...</h1>
    }

    //get current post 
    const indexOfLastPost=currentPage*postperPage
    const indexOFirstPost=indexOfLastPost-postperPage;
    const currentPost=posts.slice(indexOFirstPost,indexOfLastPost);

    //change page
    let paginate=(pageNumber)=>{
         setCurrentPage(pageNumber)
    }

    return <>
        <div className='container'>

            {
               posts.length > 0 ? <>
                    {
                        currentPost.map((single) => {
                            return <div className="card" key={single.id}>
                                <h1>{single.id}</h1>
                                <h1>{single.title}</h1>

                            </div>
                        })
                    }
                </> : null
            }
            <PageTrigger postPerPage={ postperPage} totalPost={posts.length} paginate={paginate}/>
        </div>

    </>
}

export default Pagination