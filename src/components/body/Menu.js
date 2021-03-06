import React, { Component } from 'react';
// import DISHES from '../../data/dishes';
// import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, Button, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';

const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addComment: (dishId, author, rating, comment)=> dispatch({
            type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}

class Menu extends Component {
    state = {
        
        
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
        const menu = this.props.dishes.map(item => {
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
            const comments = this.props.comments.filter(comment =>  comment.dishId === this.state.selectedDish.id)
            dishDetail = <DishDetail 
            dish={this.state.selectedDish} 
            comments = {comments}
            addComment = {this.props.addComment}
            />
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
export default connect(mapStateToProps, mapDispatchToProps) (Menu); 