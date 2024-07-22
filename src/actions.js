export const addData = (name, email) => ({
    type: 'ADD_DATA',
    payload: { name, email }
  });
  
  export const editData = (index, name, email) => ({
    type: 'EDIT_DATA',
    payload: { index, name, email }
  });
  
  export const deleteData = (index) => {
    return {
      type: 'DELETE_DATA',
      payload: index
    };
  };