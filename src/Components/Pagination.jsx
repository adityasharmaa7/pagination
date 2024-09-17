import React, { useEffect, useState } from 'react'
import Table from './Table';
import './Pagination.css'
function Pagination() {

    const[tableData,seTableData] = useState([]);
    const[currentPageNumber,setCurrentPageNumber] = useState(1);
    const[dataToDisplay,setDataToDisplay] = useState([]);
    const valuesPerPage = 10;
    const totalPages = Math.round(tableData.length / valuesPerPage);
    
    const fetchTableData = async() => {
        try {
            const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
            if(!response.ok){
                alert("failed to fetch data");
            }
            const data = await response.json();
            seTableData(data);
        } catch (error) {
            setError(error.message);
            alert("failed to fetch data");
        }
    }

    const next = () => {
        if(currentPageNumber === totalPages) return;
        setCurrentPageNumber((prev) => prev + 1)
    }

    const previous = () => {
        if(currentPageNumber === 1) return;
        setCurrentPageNumber((prev)=> prev - 1);
    }

    useEffect(()=>{
        fetchTableData();   
    },[]);

    useEffect(()=>{
        const start = (currentPageNumber -1) * valuesPerPage;
        const end = currentPageNumber * valuesPerPage;
        setDataToDisplay(tableData.slice(start,end));
    },[currentPageNumber,tableData]);
  return (
    <div className='pagination'> 
    <h1>Employee Data Table</h1>
        <div className='table'>
            <Table dataToDisplay={dataToDisplay}/>
        </div>
        <div className='buttons'>
            <button onClick={previous}>Previous</button>
            <span>{currentPageNumber}</span>
            <button onClick={next}>Next</button>
        </div>
      
    </div>
  )
}

export default Pagination;
