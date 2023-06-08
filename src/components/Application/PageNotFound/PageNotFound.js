import React from 'react';
import css from "./PageNotFound.module.css";
import Img from "..//..//img/masha.gif";

const PageNotFound = () => {
  return (
    <div className={css.notFound} style={{ fontSize: '30px' }}>
      <p style={{ padding: '40px' }}>
        Ooops, Something went wrong:( Please, try again later! )
      </p>
        <img src={Img} alt="poster"  />
    </div>
  );
};

export default PageNotFound;