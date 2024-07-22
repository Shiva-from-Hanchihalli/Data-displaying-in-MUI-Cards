const initialState = {
    data: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DATA':
        return {
          ...state,
          data: [...state.data, { name: action.payload.name, email: action.payload.email }]
        };
      case 'EDIT_DATA':
        const newDataForEdit = [...state.data];
        newDataForEdit[action.payload.index] = {
          name: action.payload.name,
          email: action.payload.email
        };
        return {
          ...state,
          data: newDataForEdit
        };
      case 'DELETE_DATA':
        const newDataForDelete = state.data.filter((_, index) => index !== action.payload);
        return {
          ...state,
          data: newDataForDelete
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  