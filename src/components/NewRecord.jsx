import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
const NewRecord = () => {
  const { id } = useParams(':id');
  console.log(id);

  const records = useSelector((state) => state.user.movements);
  return <h4>New Record</h4>;
};

export default NewRecord;
