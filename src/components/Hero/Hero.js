import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/users/userSlice';
import ReactPaginate from 'react-paginate';

const Hero = () => {

  const setUsers = useSelector(getAllUsers);

  const users = Array.from(setUsers).slice(0,28);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const cardUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map(user => {
    return(
      <div className="w-full h-[365px] bg-white mx-3 flex flex-col items-center" key={user.login.uuid}>
        <div className="p-1"><h3>ID: <span className="text-teal-500">{user.id.value}</span> </h3></div>
        <div className="w-full h-px mb-2 bg-gray-300"></div>
        <div className="mb-4"><img className="h-24 w-24 rounded-full shadow-sm" src={user.picture.large} alt="" />
        </div>
        <div className="w-full px-4">
          <h3 className="text-sm font-medium text-slate-700">Name</h3>
          <p className="mb-1 text-slate-500">{user.name.first+" "+user.name.last}</p>
          <h3 className="text-sm font-medium text-slate-700">Telephone</h3>
          <p  className="mb-1 text-slate-500">{user.phone}</p>
          <h3 className="text-sm font-medium text-slate-700">Birthday</h3>
          <p className="mb-1 text-slate-500">{user.dob.date.slice(0, 10)}</p>
          <h3 className="text-sm font-medium text-slate-700">Email</h3>
          <p className="text-slate-500">{user.email}</p>
        </div>
      </div>
    );
  });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  };

  

  return (
    
      <div className="lg:w-5/6 mt-20 w-full">
        <div className="flex justify-center pt-8 mb-4">
          <div className="w-full lg:h-20 h-72 bg-white mx-3 flex lg:items-center px-8 lg:justify-between">
            <div>
              <h2 className="uppercase font-bold text-teal-400 text-xl">Personnel List</h2>
              <p className="text-base font-normal text-gray-500">List of all personels</p>
            </div>
            <div className="space-x-4">
              <button className="h-10 w-40 bg-transparent ring-2 ring-gray-300"> 
              <svg className="inline-block w-4 mr-2 text-teal-500 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-gray-500">Find Personnels</span>
              </button>
              <button className="h-11 w-40 bg-teal-500 bg-opacity-70"> 
                <span className="uppercase inline-block font-semibold">Add Personnel</span>
              </button>
              
            </div>
          </div>
        </div>
      
          <div className="flex justify-center">
            {cardUsers}
            
          </div>
          <div className="flex justify-center">
          <ReactPaginate 
              previousLabel={"< Previous"}
              nextLabel={"Next >"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons flex w-full h-12 items-center justify-center space-x-3 text-slate-800 font-semibold text-sm"}
              previousLinkClassName={"previousButtons hover:text-teal-500"}
              nextLinkClassName={"nextButton hover:text-teal-500"}
              disabledClassName={"paginationDisabled text-slate-400"}
              activeClassName={"paginationActive text-teal-400"}
            />
          </div>
      </div>
    
  )
}

export default Hero