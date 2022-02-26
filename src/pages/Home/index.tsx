import './styles.css';
import MainImage from 'assets/images/car-header-1.png';
import ButtonIconHome from 'components/ButtonIconHome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-image-container">
            <img src={MainImage} alt="Carro Home" />
            <div className="home-text-container">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
        </div>
        <div className="home-card-search">
          <div className="home-container-bottom">
            <div>
              <Link to="/products">
                <ButtonIconHome />
              </Link>
            </div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
