import { CONSTANTS } from '../actions';

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

export const sort = (
  droppableIdStart, 
  droppableIdEnd, 
  droppablelndexStart, 
  droppablelndexEnd, 
  draggableId,
  ) => {
    return {
      type: CONSTANTS.DRAG_HAPPEND,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppablelndexStart,
        droppablelndexEnd,
        draggableId,
      }
    }
}