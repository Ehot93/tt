import React from 'react';
import './style.scss';

class Card extends React.Component {
    // qwe: ()=>{
    //     console.log("=",this.state.taskStatus);
    // }
    constructor(props){
        super(props);
        this.state = {taskStatus: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({taskStatus: e.target.checked});
    }
    render(){
        return (
            <div className="card">
                <div className="card__header">
                    <div className="card__header-title">
                        {this.props.title}
                    </div>
                    <div className="card__header-close button">
                        X
                    </div>
                </div>
                <ul className="card__list">
                    <li className="card__list-item">
                        <label>
                            <input type="checkbox" 
                                // name="temp"
                                checked={this.state.taskStatus}
                                onChange={this.handleChange}/>
                                <span className="card__list-text">
                                    {this.props.itemText}
                                    sample
                                </span>
                        </label>
                    </li>
                </ul>
                <div className="card__button">
                    <div className="waves-effect waves-light btn">
                        +
                    </div>
                </div>
            </div>
            )
    }
};
export default Card;

// const Card = ({children, className, ...rest}) => {
//     return (
//         <div className={cn('card', className)} {...rest}>
//             {children}
//         </div>
//     );
// };