import React, {Component} from 'react';
import MathSection from './MathSection'
import './Title.css';

class Title extends Component {
    render() {
        return (
            <div className={'titleHolder'}>
                <h1 className={'Title'}>{this.props.title}</h1>

                <div className={'sectionContainer'}>
                    <MathSection level={10}/>
                    <MathSection level={20}/>
                    <MathSection level={30}/>
                    <MathSection level={31}/>
                </div>
                <h2 className={'Description'}>Math help designed for Alberta secondary students</h2>
                <h1 className={'Names'}>JEFF HU | RYAN LI</h1>
            </div>


        )
            ;
    }
}

export default Title;