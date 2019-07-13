import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{
    
    renderDish(){
        if(this.props.dish != null){
            return(
                <Card>
                    <CardImg width = "100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }

    renderComments(){
        if(this.props.dish!= null && this.props.dish.comments != null){
           
            const comments = this.props.dish.comments.map((comment)=><li key={comment.id}><p>{comment.comment}</p><p>--{comment.author} {comment.date}</p></li>);
            return (
                <div>
                     <h4>Comments</h4>
                     <ul class = "list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }
    
    render(){
        console.log(this.props);
        return (
            <div className = "container">
                <div  className="row">
                <div className = "col-12 col-md-5 m-1">
                    {this.renderDish()}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
            </div>
                
        );
    }
} 

export default DishDetail;