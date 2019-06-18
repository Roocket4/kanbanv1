import React from 'react';
import CardElem from './CardElem';
import CardActionButton from './CardActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const CardList = ({title, cards, listID}) => {
  return(
    <Droppable droppableId={String(listID)}>
      {provided => (
        <ListContainer
         {...provided.droppableProps}   
         ref={provided.innerRef} 
         >
          <h3>{title}</h3>
          { cards.map((card, index) => <CardElem key={card.id} index={index} text={card.text} id={card.id} />)}
          <CardActionButton listID={listID}/>
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

export default CardList;