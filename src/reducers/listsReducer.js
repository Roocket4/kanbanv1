import { CONSTANTS } from '../actions';


let listID = 2;
let cardID = 5;

const initialState = [];

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      }
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      }
      cardID += 1;
      const newState = state.map(list => {
        if(list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else { 
           return list;
      }
     });

     return newState;

     case CONSTANTS.DRAG_HAPPEND: {
        const {  droppableIdStart,
          droppableIdEnd,
          droppablelndexStart,
          droppablelndexEnd,
         } = action.payload;
        const newState = [...state];

        if(droppableIdStart === droppableIdEnd) {
          const list = state.find(list => droppableIdStart === list.id);
          const card = list.cards.splice(droppablelndexStart, 1);
          list.cards.splice(droppablelndexEnd, 0, ...card);
        }

        if(droppableIdStart !== droppableIdEnd){
          const listStart = state.find(list => droppableIdStart === list.id);
          
          const card = listStart.cards.splice(droppablelndexStart, 1);

          const listEnd = state.find(list => droppableIdEnd === list.id);

          listEnd.cards.splice(droppablelndexEnd, 0, ...card);
        }

        return newState;
      };

    default: 
      return state;
  }
};

export default listsReducer;