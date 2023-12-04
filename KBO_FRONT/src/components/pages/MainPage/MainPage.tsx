import GlobalFooter from '../../Footer/GlobalFooter';
import MainField from './components/MainField';
import MainInfo from './components/MainInfo';
import TodayTerm from './components/TodayTerm';

function MainPage() {
  return (
    <div>
      <MainField />
      <MainInfo />
      <TodayTerm />
      <GlobalFooter />
    </div>
  );
}

export default MainPage;
