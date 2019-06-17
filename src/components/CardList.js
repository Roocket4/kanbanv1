import React from 'react';
import CardElem from './CardElem';
import CardActionButton from './CardActionButton';
import { Droppable } from 'react-beautiful-dnd';

const CardList = ({title, cards, listID}) => {
  return(
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
         {...provided.droppableProps}   
         ref={provided.innerRef} 
         style={styles.container}
         >
          <h3>{title}</h3>
          { cards.map((card, index) => <CardElem key={card.id} index={index} text={card.text} id={card.id} />)}
          <CardActionButton listID={listID}/>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8,
  }
}

export default CardList;