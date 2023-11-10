import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
  return (
    <nav className="bg-blue-500 p-10 cursor-pointer ">
      <ul className="flex space-x-10  cursor-pointer">
        <li  onClick={()=>{
			navigate("/brewery/search");
		}}>
          Brewery Search
        </li>
        <li onClick={()=>{
			navigate("/brewery/:id");
		}}>
        Brewery Details
        </li>
        <li onClick={()=>{
			navigate("/add-review/:id");
		}}>
          Add Review
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;