import imageName from '../../image.png';

const Segmentation=()=>{
    return(
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
    )
}

export default Segmentation;