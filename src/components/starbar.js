import React, { Component } from 'react';
import SingleStar from './star';

class StarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 5,
        }
    }

    handleHover(num) {
        this.setState({
            rating: num
        })
    }


    clickToChangeRating(num) {
        console.log(num)
        this.setState({
            rating: num
        })
        this.props.handleClick(this.state.rating)
    }

    render() {
        return (
            <div className="star-container">
                <div className="stars">
                    <SingleStar value="1" onHover={(event) => this.handleHover(event)} rating={this.state.rating} handleClick={(event) => this.clickToChangeRating(event)}/>
                    <SingleStar value="2" onHover={(event) => this.handleHover(event)} rating={this.state.rating} handleClick={(event) => this.clickToChangeRating(event)}/>
                    <SingleStar value="3" onHover={(event) => this.handleHover(event)} rating={this.state.rating} handleClick={(event) => this.clickToChangeRating(event)}/>
                    <SingleStar value="4" onHover={(event) => this.handleHover(event)} rating={this.state.rating} handleClick={(event) => this.clickToChangeRating(event)}/>
                    <SingleStar value="5" onHover={(event) => this.handleHover(event)} rating={this.state.rating} handleClick={(event) => this.clickToChangeRating(event)}/> 
                </div>
                <p> Rating: {this.state.rating} </p>
            </div>
        )
    }
}

export default StarComponent;