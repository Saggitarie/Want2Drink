import { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { User } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '../actions';

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  return {
    props: {}, // will be passed to the page component as props
  };
};

const IndexPage = (): ReactElement => {
  function lineLogin(): void {
    dispatch({
      type: ActionTypes.signIn,
      payload: {
        id: 1,
        name: 'Kohki Shiga',
      },
    });
  }

  const app = useSelector<User, User['name']>((state) => state.name);
  console.log('Have access to store' + app);
  console.log(app);

  const dispatch = useDispatch();
  return (
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
          <button className="form__auth--line btn" onClick={lineLogin}>
            LINE
          </button>
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
};

export default IndexPage;
