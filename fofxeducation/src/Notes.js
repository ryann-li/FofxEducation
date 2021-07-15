import React, {Component} from 'react'
import Youtube from 'react-youtube'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class Notes extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.match.url)}
                {/*<Youtube videoId={'RkC0l4iekYo'}/>*/}
                <h1>Fixing issues</h1>
            </div>
        )
    }
}

export default Notes