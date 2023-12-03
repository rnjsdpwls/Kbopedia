import React, { useState, useEffect, useRef } from 'react';
import '../styles/DictMenu.css';
import ball from '../../../../images/ball.png';
import { Link } from 'react-router-dom';

interface DropdownItemProps {
  text: string;
}

const DropdownItem = (props: DropdownItemProps) => {
  return (
    <li className='dropdownItem'>
      <a>{props.text}</a>
    </li>
  );
};

const DictMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dict-menu-container" ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <h1 className='dict-menu-heading'>용어•규칙</h1>
      <div className={`dict-dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3 className='dict-dropdown-heading'>
          용어•규칙
        </h3>
        <ul>
          <Link to="/Dict"> <DropdownItem text={'KBO 리그 기초 정보'} /></Link>
          <Link to="/Quiz"> <DropdownItem text={'야구 퀴즈'} /></Link>
        </ul>
      </div>
      <div className="dict-menu-trigger" >
        <img src={ball} alt='ballBtn' />
      </div>
    </div>
  );
};

export default DictMenu;
