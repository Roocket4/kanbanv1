import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import CardList from './CardList';
import CardActionButton from './CardActionButton';

class App extends Component {
  onDragEnd = () => {

  }

  render() {
    const { lists } = this.props;
    return( 
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h1>Whiteboard App</h1>
            <div style={styles.listsContainer}>
            {lists.map(list => <CardList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> )}
            <CardActionButton list />
            </div>
        </div>
      </DragDropContext>
    )
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
})
export default connect(mapStateToProps)(App);
