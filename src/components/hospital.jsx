import React, { useState } from 'react';
import {  doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase'; 


function Hospital() {
  const [selectedField, setSelectedField] = useState('--Select--'); // Default field
  const [fieldValue, setFieldValue] = useState('');

  const handleUpdateData = async () => {
    try {
      const docRef = doc(db, 'hospital', '98v7HprX9vPZ6z8PdW1s'); // Replace with your actual document ID
      const dataToUpdate = { [selectedField]: fieldValue };
      await updateDoc(docRef, dataToUpdate);
      alert('Data updated successfully');
      setSelectedField("")
      setFieldValue("")
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const fieldNames = ['--Select--','january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  return (
    <div className='w-full flex flex-col px-3'>
      <h2 className='text-center text-lg font-bold mb-6'>Update Hospital Data</h2>
      <select className='w-[180px] mb-6 py-3 px-5 bg-slate-500 text-white rounded-lg'  value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
        {fieldNames.map((fieldName) => (
          <option key={fieldName} value={fieldName}>
            {fieldName}
          </option>
        ))}
      </select>
      <input
      className='py-2 px-3 border-2 w-[180px] mb-6 rounded-lg'
        type="text"
        placeholder="Field Value"
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
      <button className='py-2 px-3 bg-sky-500 rounded-2xl w-[180px]'  onClick={handleUpdateData}>Update Data</button>
    </div>
  );
}

export default Hospital;
