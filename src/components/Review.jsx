import "./Review.css";
import PropTypes from "prop-types";

function Review({ data }) {
  return (
    <div className="ReviewBox">
      <img src={data.img} alt={data.name} className="ReviewBox-Img" />
      <h1 className="ReviewBox-Name">{data.name}</h1>
      <p className="ReviewBox-Review">{data.review}</p>
    </div>
  );
}

Review.propTypes = {
  data: PropTypes.object,
};

export default Review;
