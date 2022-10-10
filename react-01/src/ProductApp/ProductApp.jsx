import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'


let ProductApp = () => {

    let [data, setData] = useState({ persons: {}, profiles: {} })

    let selprofile = (user) => {
        console.log(user)
        setData({...data,profiles:user})
    };

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/karkuvelpandi/49cedc34071f93328bbe0017ec862adb/raw/85ab14572b25fcbb6176683a26c5aa22e41cc480/User%2520%257BObject%257D-Detail-Dummy%2520data')
            .then((response) => {
                setData({ persons: response.data })
            }).catch(() => { })
    }, [])


    return <>
        <h1>Product APP</h1>
        <pre>{JSON.stringify(data.persons)}</pre>
        <pre>{JSON.stringify(data.profiles)}</pre>


        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    
                    {<ProductList userData={data.persons} selprofile={selprofile} />}
                    
                    
                </div>
                <div className="col-md-4">
                    {/* {Object.keys(data.profiles).length>0?<> */}
                        {<ProductDetails userData={data.profiles} />}
                    {/* </>:null} */}
                    
                </div>
            </div>
        </div>
    </>
}
export default ProductApp