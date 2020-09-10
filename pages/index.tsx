import { ReactElement, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { User, ActionTypes } from '../actions';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const IndexPage = (): ReactElement => {
  const [isSignedIn, setisSignIn] = useState(false);

  useEffect(() => {
    console.log('isSignIn' + isSignedIn);
    if (window.gapi.auth2) {
      const auth = window.gapi.auth2.getAuthInstance();
      const user = auth.currentUser.get();
      console.log(user);
    }
  }, [isSignedIn]);

  function lineLogin(): void {
    if (Window && typeof globalThis !== undefined) {
      window.liff
        .init({
          liffId: process.env.LIFF_CLIENTID,
        })
        .then((res: any) => {
          window.liff.login();
          console.log(window.liff.login);
        });
    }
    dispatch({
      type: ActionTypes.signIn,
      payload: {
        id: 1,
        name: 'Kohki Shiga',
      },
    });
  }

  function googleLogin(): void {
    let GoogleAuth: any;
    if (Window && typeof globalThis !== undefined) {
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
            clientId: process.env.GOOGLE_CLIENTID, //"clientID"は個人で取得する
            scope: 'email',
          })
          .then(() => {
            const auth = window.gapi.auth2.getAuthInstance();

            window.gapi.auth2.getAuthInstance().signIn();

            console.log('isSignIn??');
            console.log(auth.isSignedIn.get());

            setisSignIn(!isSignedIn);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
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
        <script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
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
          <button className="form__auth--google btn" onClick={googleLogin}>
            Google Sign In
          </button>
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
