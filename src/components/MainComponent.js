import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './dishDetail';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        selectedDish: null
    };
  }

onDishSelect(dishId){
  this.setState({selectedDish: dishId});
}
  render() {
    
    const HomePage = () => {
      return(
        <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return (
      <div>
        <Header/>
        
        
        <Switch>
          <Route exact path = '/home' component = {HomePage}/>
          <Route exact path  = '/menu' component = {() => 
            <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/> }/>
          <Route exact path = "/contactus" component = {Contact}/>
          <Route exact path = "/aboutus" component = {() => <About leaders = {this.state.leaders}/> }/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Redirect to = "/home"/>
          </Switch>
          
          {/* <DishDetail dish= {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>      */}
        <Footer/>
        
      </div>
    );
  }
}

export default Main;