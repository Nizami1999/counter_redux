import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div class="container">
      <div class="jumbotron text-center">
        <div class="result">
          <span class="display-1">{counter}</span>
        </div>
        <button class="btn btn-primary" onClick={inc}>
          +
        </button>
        <button class="btn btn-primary mx-2" onClick={dec}>
          -
        </button>
        <button class="btn btn-success" onClick={rnd}>
          + Random value
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, actions)(Counter);