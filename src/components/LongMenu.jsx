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

  return (
    <div className="dropdown-menu">
      <button onClick={() => setIsOpen(!isOpen)}>
      Roads
      </button>
      {isOpen && (
        <div className="dropdown-menu-content">
          {options.map((option) => (

            <Link to={`/progetto101/${option}`} key={option}>{option} </Link>
     
          ))}
        </div>
      )}
    </div>
  );
}