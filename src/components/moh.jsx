import React, { useState } from 'react';
import {  doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase'; 


function Moh() {
  const [selectedField, setSelectedField] = useState('--Select--'); // Default field
  const [fieldValue, setFieldValue] = useState('');
const [ids , setIds] = useState("")
  const handleUpdateData = async () => {
    try {
      const docRef = doc(db, 'moh', ids); // Replace with your actual document ID
      const dataToUpdate = { [selectedField]: fieldValue };
      await updateDoc(docRef, dataToUpdate);
      alert('Data updated successfully');
      setSelectedField("")
      setFieldValue("")
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const fieldNames = ['--Select Month--','january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  return (
    <div className='w-full flex flex-col px-3'>
      <h2 className='text-center text-lg font-bold mb-6'>Update MOH Clinics</h2>
      <select className='w-[180px] mb-6 py-3 px-5 bg-slate-500 text-white rounded-lg' value={ids} onChange={(e) => setIds(e.target.value)}>
      <option key={1}>
          --Select--
          </option>
      
          <option key={2} value='2month'>
          2 Month
          </option>

          <option key={3} value='allinj'>
          All injection
          </option>

          <option key={4} value='familyplan'>
          Family plan
          </option>

          <option key={5} value='wellwoman'>
          Well woman
          </option>
       
      </select>
      <select className='w-[180px] mb-6 py-3 px-5 bg-slate-400 text-white rounded-lg' value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
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

export default Moh;
