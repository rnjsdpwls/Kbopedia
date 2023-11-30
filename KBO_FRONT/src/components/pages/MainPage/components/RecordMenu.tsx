import { useState, useEffect, useRef } from 'react';
import '../styles/RecordMenu.css';
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

const RecordMenu = () => {
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
    <div className="record-menu-container" ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <h1 className='record-menu-heading'>기록•순위</h1>
      <div className={`record-dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3 className='record-dropdown-heading'>
          기록•순위
        </h3>
        <ul>
          <Link to="/GameResultsTable"><DropdownItem text={'팀 순위'} /></Link>
          <DropdownItem text={'선수 순위'} />
          <DropdownItem text={'역대 기록'} />
        </ul>
      </div>
      <div className="record-menu-trigger">
        <img src={ball} alt='ballBtn' />
      </div>
    </div >
  );
};

export default RecordMenu;
