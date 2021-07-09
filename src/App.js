import Col from './components/Col';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default () => {
  return (
    <div className="container">
      <Navbar />
      <div class="row">
        <div class="col">
          <Col />
          <Search />
        </div>
      </div>
    </div>
  );
}