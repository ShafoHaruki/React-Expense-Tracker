//Reducer is a way to change the state and send it down the components
//Bare minimum for an AppReducer
//Good to have some understanding of Redux
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
