import React, { Component } from 'react'
//
 
export default class Logger extends Component {
    componentWillMount(){
        console.time('cost')
    }
    componentDidMount(){
        console.timeEnd('cost')
    }
    render() {
        return (
            <div>
                Logger
            </div>
        )
    }
}
