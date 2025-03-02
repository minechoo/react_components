import React from 'react'
import { useState, useEffect } from 'react';
import { Layout } from '../common/Layout';
import { auth } from '../../firebase';  // firebase.js에서 auth 가져오기
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { LogIn, LogOut } from 'lucide-react';

function Login() {
  // 사용자 상태와 로딩 상태 관리
  const [user, setUser] = useState(null);
  //const [loading, setLoading] = useState(true);

  //const provider = new GoogleAuthProvider();
  //const auth = getAuth();

  // 컴포넌트 마운트 시 Firebase 인증 상태 리스너 설정
  useEffect(() => {
    // 사용자 인증 상태 변경 감지
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // 로그인된 사용자 정보 저장
      } else {
        setUser(null); // 로그아웃 상태로 설정
      }
      //setLoading(false); // 로딩 상태 종료
    });

    // 컴포넌트 언마운트 시 리스너 해제
    return () => unsubscribe();
  }, []);

  // const loginWithGoogle = async() =>{
  //   try{
  //     const result =  await signInWithPopup(auth, provider)
  //     // const credential = GoogleAuthProvider.credentialFromResult(result);
  //     // const token = credential.accessToken;
  //     const user = result.user;
  //     console.log("Logged in as:", user.displayName);
      
  //   }catch(error) {
  //     // // Handle Errors here.
  //     // const errorCode = error.code;
  //     // const errorMessage = error.message;
  //     // // The email of the user's account used.
  //     // const email = error.customData.email;
  //     // // The AuthCredential type that was used.
  //     // const credential = GoogleAuthProvider.credentialFromError(error);
  //     // // ...
  //     console.error(error)
  //   };
  // }
 
  // Google 로그인 함수
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google 로그인 중 오류 발생:', error);
    }
  };

  // 로그아웃 함수
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
    }
  };

  return (
    <Layout>
      {/* <div>Login</div>
      <button className='login_btn' onClick={loginWithGoogle}>
        <img className="google_img" src={`${process.env.PUBLIC_URL}/img/goolge.jpg`} alt="" />
        <div>Google로 시작하기</div>
        </button> */}

{user ? (
          // 로그인된 상태 UI
          <div className="auth_box">
            <div className="flex items-center space-x-4">
              {user.photoURL && (
                <img 
                  src={user.photoURL} 
                  alt="프로필" 
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <p className="font-medium">{user.displayName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            
            <button
              onClick={signOut}
              className="logout_btn"
            >
              <LogOut className="mr-2 h-5 w-5" />
              로그아웃
            </button>
          </div>
        ) : (
          // 로그인되지 않은 상태 UI
          <button
            onClick={signInWithGoogle}
            className="login_btn"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Google로 로그인
          </button>
        )}
    </Layout>
  )
}

export default Login