import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import CardList from './CardList';
import CardActionButton from './CardActionButton';
import { sort } from '../actions';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderStyle = styled.h1`
  background: #333;
  color: #fff;
  textAlign: center;
  padding: 15px;
  box-shadow: -3px 3px 0px #dfe3e6;
  text-shadow:-4px 2px 4px #000000;
  border-top-left-radius:8px;
  border-top-right-radius:8px;
  border-bottom-left-radius:8px;
  border-bottom-right-radius:8px;
`;

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
    ));
  };

  render() {
    const { lists } = this.props;
    return( 
      <DragDropContext onDragEnd={this.onDragEnd}>
          <HeaderStyle>Whiteboard App</HeaderStyle>
            <ListContainer>
              {lists.map(list => <CardList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> )}
              <CardActionButton list />
            </ListContainer>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
})
export default connect(mapStateToProps)(App);
