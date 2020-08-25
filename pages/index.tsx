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
      <h1>Sign In</h1>
      <div className="form__auth">
        <div className="form__auth--line">LINE</div>
        <div className="form__auth--google">Google Sign In</div>
      </div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="UserName"
          id="username"
        />
        <label htmlFor="username" className="form_label">
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
        <label htmlFor="password" className="form_label">
          Password
        </label>
      </div>
      <div>Sign In</div>
    </div>
  </div>
);

export default IndexPage;
