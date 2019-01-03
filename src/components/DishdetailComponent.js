import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from 'reactstrap';


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

    // Implement a function named renderComments() that takes the comments array as a parameter and 
    // lays out each comment as shown in the image below. You should use the Bootstrap list-unstyled class on the list.
    // Each comment should be displayed on two lines, the first one showing the comment, and the second line showing the 
    // comment author's name and the date.

    renderComments(comments){
        if (comments === null ){
            return(<div></div>);
        }
        else{
            var commentsText = comments.map((comment) => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author + " , " +  new Date(comment.date).toDateString()}</li>
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
        if (this.props.dish === null){
            return(<div></div>);
        } else {
            return (
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div> 
            );
        }
    }
}

export default DishDetail;