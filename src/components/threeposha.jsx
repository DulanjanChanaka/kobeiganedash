import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../firebase/firebase'
import { DataGrid } from '@mui/x-data-grid';
import ThreepForm from './threepForm';
const Threeposha = () => {
    
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const dataCollection = await getDocs(collection(db,'threeposha'))
                const postData = dataCollection.docs.map((doc)=>{
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                    
                })  
                setData(postData)
            } catch (error) {
                console.error('Error fetching item posts:', error); 
            }
        }
        fetchData()

    },[])

    const handleDelete = async (row) => {
        try {
            const docRef = doc(db, 'threeposha', row.id)
            await deleteDoc(docRef);
            console.log('Row deleted successfully:', row);
        } catch (error) {
            console.error('Error deleting row:', error);
        }
    }

    const columns = [
        {field:'title', headerName:'title', width:200,resizable: true, className: "column"},
        { field: 'message', headerName: 'message', width: 400, resizable: true, className: "column" },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 100,
            renderCell: (params) => (
              <button className='px-2 py-1 rounded-lg bg-red-600' onClick={() => handleDelete(params.row)}>Delete</button>
            ),
          },
    ]
  return (
    <div>
        <div >
            <ThreepForm/>
      <div className='px-3' >
        <DataGrid
        
          rows={data}
          columns={columns}
          pageSize={5}
        />
      </div>
    </div>
    </div>
  )
}

export default Threeposha