import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, Button, ModalBody, ModalFooter } from 'reactstrap';

class Menu extends Component {
    state = {
        
        dishes: DISHES,
        comments:COMMENTS,
        selectedDish: null,
        modalOpen: false
    }
    

    onDishSelect = dish => {
        // console.log(dish);
        this.setState({ selectedDish: dish,
            modalOpen: !this.state.modalOpen
         })
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
  

    render() {
        document.title = "Rajmohol || Menu"
        const menu = this.state.dishes.map(item => {
            return (
                <div key={item.id}>
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)} />
                </div>

            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.state.comments.filter(comment =>  comment.dishId === this.state.selectedDish.id)
            dishDetail = <DishDetail dish={this.state.selectedDish} comments = {comments}/>
        }

        return (
            <div className='container'>
                <div className='row'>
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            <h3 onClick={this.toggleModal} className='close'>+</h3>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}
export default Menu;