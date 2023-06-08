import React from 'react';
import css from "./NotFound.module.css";
import Img from "..//..//img/masha.gif";

const PageNotFound = () => {
  return (
    <div style={{ fontSize: '30px', textAlign: 'center' }}>
      <p style={{ padding: '40px' }}>
        Ooops, Something went wrong:( Please, try again later! )
      </p>
            <img src={Img} alt="poster"  />
    </div>
  );
};

export default PageNotFound;