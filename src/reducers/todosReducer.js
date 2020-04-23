export const todosActions = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case todosActions.ADD_TODO:
      console.log("state=", state, action);
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
        },
      ];

    case todosActions.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;
