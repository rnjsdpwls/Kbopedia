import { Route, Routes } from 'react-router-dom';
import Bears from './Bears';
import Heroes from './Heroes';
import Dinos from './Dinos';
import Landers from './Landers';
import Twins from './Twins';
import Tigers from './Tigers';
import Giants from './Giants';
import Lions from './Lions';
import Eagles from './Eagles';
import Wiz from './Wiz';

export default function TeamBoardRoutes() {
  return (
    <Routes>
      <Route path="/Heroes" element={<Heroes />} />
      <Route path="/Bears" element={<Bears />} />
      <Route path="/Dinos" element={<Dinos />} />
      <Route path="/Landers" element={<Landers />} />
      <Route path="/Twins" element={<Twins />} />
      <Route path="/Tigers" element={<Tigers />} />
      <Route path="/Giants" element={<Giants />} />
      <Route path="/Lions" element={<Lions />} />
      <Route path="/Eagles" element={<Eagles />} />
      <Route path="/Wiz" element={<Wiz />} />
    </Routes>
  );
};

