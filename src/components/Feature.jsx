import "./Feature.css";
import PropTypes from "prop-types";

function Feature({ data }) {
  return (
    <div className="FeatureBox">
      <span className="FeatureBox-Number">{data.id}</span>
      <h2 className="FeatureBox-Title">{data.title}</h2>
      <p className="FeatureBox-Desc">{data.desc}</p>
    </div>
  );
}

Feature.propTypes = {
  data: PropTypes.object,
};

export default Feature;
