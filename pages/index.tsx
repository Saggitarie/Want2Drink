import { ReactElement, useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import bcrypt from 'bcryptjs';

import { User, ActionTypes } from '../actions';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const CreateOneUser = gql`
  mutation CreateOneUser($username: String!, $password: String!) {
    createOneUser(data: { username: $username, password: $password }) {
      username
      password
    }
  }
`;

const FetchUsers = gql`
  query FetchUsers {
    users {
      id
      username
      password
    }
  }
`;

const IndexPage = (): ReactElement => {
  const [isSignedIn, setisSignIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [createOneUser] = useMutation(CreateOneUser);
  const { loading, error, data } = useQuery(FetchUsers);

  const router = useRouter();

  useEffect(() => {
    console.log('isSignIn' + isSignedIn);
    console.log('username ' + userName);
    console.log('password ' + password);
    console.log('users ');

    if (data) console.log(data.users);

    if (window.gapi.auth2) {
      const auth = window.gapi.auth2.getAuthInstance();
      const user = auth.currentUser.get();
      console.log(user);
    }
  }, [isSignedIn, userName, password]);

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

  function regularSignIn(): void {
    const isExist = data.users.find((el: any) => el.username === userName);
    console.log(isExist, 'isExist');

    if (!isExist) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hashedPassword) => {
          console.log('Password Hashed', hashedPassword);

          createOneUser({
            variables: { username: userName, password: hashedPassword },
          });

          router.push('/about');
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(event.target.value);
            }}
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="password" className="form__label">
            Password
          </label>
        </div>
        <button
          className="form__signin btn"
          onClick={(): void => {
            regularSignIn();
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
