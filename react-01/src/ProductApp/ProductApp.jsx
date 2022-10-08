import { Axios } from 'axios'
import React from 'react'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'
let ProductApp = () => {

    let getData = () => {
        Axios.get('s')
         .then((response)=>{
        
        }).catch(()=>{  })
    }
    return <>
        <h1>Product APP</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {<ProductList />}
                </div>
                <div className="col-md-4">
                    {<ProductDetails />}
                </div>
            </div>
        </div>
    </>
}
export default ProductApp