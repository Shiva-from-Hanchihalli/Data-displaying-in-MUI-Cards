
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, editData, deleteData } from './actions';
import Card from './Card';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      dispatch(addData(name, email));
    } else {
      dispatch(editData(editIndex, name, email));
      setEditIndex(-1);
    }
    setName('');
    setEmail('');
  };

  const handleEdit = (index) => {
    setName(data[index].name);
    setEmail(data[index].email);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteData(index));
  };

  return (
    <div>
      <h1>Add data</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', padding: '10px',gap:'10px' }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">{editIndex === -1 ? 'Create' : 'Update'}</button>
      </form>
      <h1>Cards</h1>
      <Card data={data} handleEdit={handleEdit} handleDelete={handleDelete} /> 
    </div>
  );
};

export default App;
