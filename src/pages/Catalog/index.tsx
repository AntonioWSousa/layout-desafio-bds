import ProductCard from 'components/ProductCard/index';
import ButtonIconSearch from 'components/ButtonIconSearch';

const Catalog = () => {
  return (
    <>
      <div>
        <div className="container my-4">
          <div className="row">
            <div className="search-card">
              <div className="button-search">
                <ButtonIconSearch />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
