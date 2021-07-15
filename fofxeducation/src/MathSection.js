import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './MathSection.css'

class MathSection extends Component {
    render() {
        return (
            <div>
                <Link style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textDecoration: "none",
                    width: '100%',
                    height: '100%',


                    // "display": "flex",
                    // "flexDirection": "column",
                    // "justifyContent": "center",
                    // "textAlign": "center",
                    // "margin": "0",
                    // "backgroundColor": "transparent",
                    // "textDecoration": "none",
                    // "WebkitTransition": "background-color .2s ease-out",
                    // "MozTransition": "background-color .2s ease-out",
                    // "OTransition": "background-color .2s ease-out",
                    // "MsTransition": "background-color .2s ease-out",
                    // "transition": "background-color .2s ease-out",
                    // "height": "100%",
                    // "width": "25%",
                    fontFamily: "Source Sans Pro', 'sans-serif'",
                    fontSize: '3vmin',
                    color: 'white',
                    fontWeight: '200',
                    // "boxSizing": "border-box",
                    // "MozBoxSizing": "border-box",
                    // "WebkitBoxSizing": "border-box",
                    // "border": "1px solid white"
                }} to={`/math${this.props.level}`}>Math {this.props.level}</Link>
            </div>
        )
    }
}

const Math = ({match}) => {
    return (
        <div>
            {console.log('hi')}
            <h1>hi</h1>
            {match.params.mathlevel}
        </div>
    )
}

export default MathSection