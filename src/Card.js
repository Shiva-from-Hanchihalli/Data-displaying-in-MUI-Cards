import React from 'react';
import { Card as MUICard, CardContent, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ data, handleEdit, handleDelete }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((item, index) => (
        <MUICard key={index} className="card" sx={{ marginBottom: '20px', width: { xs: '100%', sm: '48%', md: '30%' }, backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginRight: '20px' }}>
          <CardContent sx={{ textAlign: 'center', flex: '1' }}>
            <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
               {item.name}
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginBottom: '10px' }}>
               {item.email}
            </Typography>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '5px' }}>
            <Button
              color="primary"
              onClick={() => handleEdit(index)}
              startIcon={<EditIcon />}
            />
            <Button
              color="primary"
              onClick={() => handleDelete(index)}
              endIcon={<DeleteIcon />}
            />
          </div>
        </MUICard>
      ))}
    </div>
  );
};

export default Card;
