import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay ,CardTitle } from 'reactstrap';
import './menu.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


class Menu extends Component {

    constructor(props) {
        super(props);

     
    }
    
    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}>
                <Link to={`/menu/${dish.id}`} >
                  <CardImg id="images" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                  </Link>
                </Card>
              </div>
            );
     
        });

        return (
            <div className="container">
               <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12">

                    
                    
                  </div>
                  
                </div>
            </div>
        );
    }
}
export default Menu;