import React from 'react'
import CartGame from './CartGame'

export default class Cart extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="cart">
                Cart
                <CartGame/>
            </div>
        )
    }
}