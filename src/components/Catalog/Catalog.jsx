import React from 'react'
import Hero from './Hero'
import Games from './Games'

export default class Catalog extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="catalog">
                <Hero/>
                <Games/>
            </div>
        )
    }
}