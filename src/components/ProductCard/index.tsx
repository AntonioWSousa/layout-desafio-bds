import './styles.css';

import ProductImg from 'assets/images/car-card-1.png';
import ButtonIconCatalog from 'components/ButtonIconCatalog';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <div className="card-product-container-icon">
          <img src={ProductImg} alt="Audi TT Quattro Sport" />
        </div>
        <div className="card-product-content">
          <h6>Audi TT Quattro Sport</h6>
          <p>Novidade em nossa loja. Venha conhecer.</p>
        </div>
      </div>
      <ButtonIconCatalog />
    </div>
  );
};

export default ProductCard;
