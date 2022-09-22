import React from "react"

class Cart extends React.Component {
    state={
        product_Name:"Hp Pavilion",
        product_Price:60000,
        image:"https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/computer/t/8/u/14-ec1008au-thin-and-light-laptop-hp-original-imagdsx9wk6ftfxa.jpeg?q=70",
        qty: 1,
    }
incrementHandler=()=>{
this.setState({
   qty:this.state.qty+1
})
};
stopHandler=()=>{
this.setState({qty:1})
};
decremenetHandler=()=>{
    this.setState({
        qty:this.state.qty-1
     })
     if(this.state.qty<=1){
        return this.stopHandler()
     }
};

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="bg-success">
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr><td>{this.state.product_Name}</td>
                            <td><img src={this.state.image} height="100"/></td>
                            <td>{this.state.product_Price}</td>
                            <td><button onClick={this.decremenetHandler}>-</button>{this.state.qty}<button onClick={this.incrementHandler}>+</button></td>
                            <td>{this.state.qty*this.state.product_Price}</td>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    }
}
export default Cart