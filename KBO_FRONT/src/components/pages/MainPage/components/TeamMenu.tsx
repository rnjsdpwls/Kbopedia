import React, { useState, useEffect, useRef } from 'react';
import '../styles/TeamMenu.css';
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

const TeamMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  let menuRef = useRef<HTMLDivElement>(null);

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
    <>
      <div className="team-menu-container" ref={menuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <h1 className='team-menu-heading'>구단</h1>
        <div className={`team-dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <h3 className='team-dropdown-heading'>
            구단
          </h3>
          <ul>
            <DropdownItem text={'두산 베어스'} />
            <DropdownItem text={'롯데 자이언츠'} />
            <DropdownItem text={'KIA 타이거즈'} />
            <DropdownItem text={'삼성 라이온즈'} />
            <DropdownItem text={'한화 이글스'} />
            <DropdownItem text={'KT 위즈'} />
            <DropdownItem text={'LG 트윈스'} />
          </ul>
        </div>
        <div className="team-menu-trigger" >
          <img src={ball} alt='ballBtn' />
        </div>
      </div >
    </>
  );
};

export default TeamMenu;