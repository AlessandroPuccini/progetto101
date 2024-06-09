import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/DropdownMenu.css';

const options = [
  'MAN',
  'WOMAN',
  'CATALOG',
  'ABOUT',
  'CONTACTS',
];


export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="dropdown-menu" onClick={handleToggle}>
      <button>
      Explore
      </button>
      {isOpen && (
        <div className="dropdown-menu-content open">
          {options.map((option) => (

            <Link to={`/progetto101/${option}`} key={option}>{option} </Link>
     
          ))}
        </div>
      )}
    </div>
  );
}