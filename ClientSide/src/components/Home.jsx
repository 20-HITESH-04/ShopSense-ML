import imageName from '../../grocery-1232944_640.jpg';
const Home = () => {
    return (
      <div style={{ backgroundColor: '#000000', textAlign: 'center', padding: '20px', color: 'white' }}>
        <h1>Welcome to SHOPSENSE</h1>
        
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={imageName}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
               <span style={{ color: 'white' }}>Shop Management System with AI/ML Profit Prediction</span>
            </h1>
            <p className="lead" style={{ color: 'white' }}>
              Enhance your shop management with AI and ML-powered profit prediction. Quickly design and customize responsive
              mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass
              variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  