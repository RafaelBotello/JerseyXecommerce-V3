import React from "../../../node_modules/react";
// import "../../lib/js/filter";
import "./style.css";

const Filters = props => {
  const { handleFilter } = props;

  let block = {
    border: "2px solid black",
    display: "block",
    margin: "0",
    borderRadius: "0",
    marginTop: "1px",
    width: "23.7vw"
  };

  return (
    <section className="col-md-3 bg-white btn-cont-hide section-style">
      <div className="bg-dark filters filter-small">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-lg bg-dark btn-dark  dropdown-toggle"
            data-toggle="dropdown"
          >
            <h2>Filters</h2>
          </button>
          <div className="dropdown-menu  filtercont bg-light">
            <h1>Soccer Jerseys</h1>
            <h3>Filters</h3>
            <button
              style={block}
              value="seriea"
              className="btn btn-white"
              onClick={handleFilter}
            >
              Serie A
            </button>

            <button
              style={block}
              value="premier"
              className="btn btn-white"
              onClick={handleFilter}
            >
              Premier
            </button>
            <button
              style={block}
              value="laliga"
              className="btn btn-white"
              onClick={handleFilter}
            >
              La Liga
            </button>
            <button
              style={block}
              value="ligamx"
              className="btn btn-white"
              onClick={handleFilter}
            >
              Liga Mx
            </button>
            <button
              style={block}
              value="national"
              className="btn btn-white"
              onClick={handleFilter}
            >
              National
            </button>
            <button
              style={block}
              value="bundesliga"
              className="btn btn-white"
              onClick={handleFilter}
            >
              Bundesliga
            </button>
            <button
              style={block}
              value="all"
              className="btn btn-white"
              onClick={handleFilter}
            >
              Show all
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="sticky fixedleft btn-cont-hide " id="myBtnContainer">
          <h1>Soccer Jerseys</h1>
          <h3>Filters</h3>
          <button
            style={block}
            value="seriea"
            className="btn btn-white"
            onClick={handleFilter}
          >
            Serie A
          </button>

          <button
            style={block}
            value="premier"
            className="btn btn-white"
            onClick={handleFilter}
          >
            Premier
          </button>
          <button
            style={block}
            value="laliga"
            className="btn btn-white"
            onClick={handleFilter}
          >
            La Liga
          </button>
          <button
            style={block}
            value="ligamx"
            className="btn btn-white"
            onClick={handleFilter}
          >
            Liga Mx
          </button>
          <button
            style={block}
            value="national"
            className="btn btn-white"
            onClick={handleFilter}
          >
            National
          </button>
          <button
            style={block}
            value="bundesliga"
            className="btn btn-white"
            onClick={handleFilter}
          >
            Bundesliga
          </button>
          <button
            style={block}
            value="all"
            className="btn btn-white"
            onClick={handleFilter}
          >
            Show all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
