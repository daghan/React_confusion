import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from 'reactstrap';
import { DISHES } from '../shared/dishes';


class DishDetail extends Component {

    constructor(props) {
        super(props)

        
        this.state = {
            dish : this.props.dish
        }
    }


    componentDidMount() {
        console.log("Mounted");
    }

    componentWillUnmount() {
        console.log("will unmount");
    }


    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag="h4">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }


    renderComments(comments){
        if (comments === null ){
            return(<div></div>);
        }
        else{
            var commentsText = comments.map((comment) => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author + " , " + 
                                new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                .format(new Date(Date.parse(comment.date)))} </li>
                    </ul>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    {commentsText}
                </div>
            );
        }
    }

    
    render() {
        if ((this.props.dish === null) || (this.props.dish === undefined)){
            return(<div></div>);
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                           {this.renderDish(this.props.dish)} 
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DishDetail;