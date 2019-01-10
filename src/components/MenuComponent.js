import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }


    render() {
        const menu = this.props.dishes.map((item) => {
            return (
              <div key={item.id+100} className="col-12 col-md-5 m-1">
                <Card key={item.id} onClick={() => this.props.myFavFunction(item.id)}>
                  <CardImg width="100%" src={item.image} alt={item.name} />
                  <CardImgOverlay>
                      <CardTitle>{item.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });


        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;