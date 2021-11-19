import React, {Component} from "react";

class Card extends Component  {

     constructor(props) {
         super(props);
         console.log(props);

     }
    render () {

        return (
            <div className="card">
                <div className="card-body" style={this.props.Card}>
                    {this.props.children}
                </div>
           </div>     

        )
    }

}

export default Card;