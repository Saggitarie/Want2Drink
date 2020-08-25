import { ReactElement } from 'react';
import Head from 'next/head';

const IndexPage = (): ReactElement => (
  <div className="form">
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="form--left">
      <h2 className="form--left__title">Want2Drink</h2>
      <img className="form--left__img" src="/party.jpg" alt="Party" />
    </div>
    <div className="form--right">
      <h1 className="form--right__title">Sign In To Drink</h1>
      <div className="form__auth">
        <div className="form__auth--line btn">LINE</div>
        <div className="form__auth--google btn">Google Sign In</div>
      </div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="UserName"
          id="username"
        />
        <label htmlFor="username" className="form__label">
          User Name
        </label>
      </div>
      <div className="form__group">
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          id="password"
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </div>
      <div className="form__signin btn">Sign In</div>
    </div>
  </div>
);

export default IndexPage;
