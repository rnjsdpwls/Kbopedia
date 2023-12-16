import React, { useState, useEffect, useRef } from 'react';
import '../styles/CommunityMenu.css';
import ball from '../../../../images/ball.png';
import { Link, Navigate } from 'react-router-dom';

interface DropdownItemProps {
  text: string;
}

const isLoggedIn = localStorage.getItem('access_token') !== null;

const DropdownItem = (props: DropdownItemProps) => {
  return (
    <li className='dropdownItem'>
      <a>{props.text}</a>
    </li>
  );
};

const CommunityMenu = () => {
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
    <div
      className="community-menu-container"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to='/Community'> <h1 className='community-menu-heading'>커뮤니티</h1></Link>
      <div className={`community-dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3 className='community-dropdown-heading'>
          커뮤니티
        </h3>
        <ul>
          <DropdownItem text={'내 글 보기'} />
          <Link to='/Posting'><DropdownItem text={'글 작성'} /></Link>
        </ul>
      </div>
      <div className='community-menu-trigger'>
        <img src={ball} alt='ballBtn' />
      </div>
    </div>
  );
};

export default CommunityMenu;