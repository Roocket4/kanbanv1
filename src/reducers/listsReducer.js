import { CONSTANTS } from '../actions';


let listID = 2;
let cardID = 4;

const initialState = [
  {
    title: 'First Time',
    id: `list-${0}`,
    cards: [{
        id: `card-${0}`,
        text: "we created something something",
      },
      {
        id: `card-${1}`,
        text: "blaa blaaa blllllllllllla boiii",
      }
    ]
  },
  {
    title: 'This Time',
    id: `list-${1}`,
    cards: [{
        id: `card-${2}`,
        text: "cardorama",
      },
      {
        id: `card-${3}`,
        text: "banana",
      }
    ]
  }
];

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

    default: 
      return state;
  }
};

export default listsReducer;