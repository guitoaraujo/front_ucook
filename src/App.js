import Col from './components/Col';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default () => {
  return (
    <div className="app">
      <Navbar />
      <Col />
      <Search />
    </div>
  );
}