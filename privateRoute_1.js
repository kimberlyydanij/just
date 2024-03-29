import { Navigate, Outlet } from 'react-router-dom';

// 페이지별 접근 권한 설정
const PrivateRoute = ({ isAuth }) => {
  const authorization = localStorage.getItem('Authorization');
  /**
   * 로그인 했는지 여부
   * 로그인 했을 경우 : true 라는 텍스트 반환
   * 로그인 안했을 경우 : null or false(로그아웃 버튼 눌렀을경우 false로 설정) 반환
   */
  if (isAuth) {
    // 인증이 반드시 필요한 페이지

    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return authorization === null || isAuth === 'false' ? (
      <Navigate to='/' />
    ) : (
      <Outlet />
    );
  } else {
    // 인증이 반드시 필요 없는 페이지

    // 인증을 안했을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
    return authorization === null || isAuth === 'false' ? (
      <Outlet />
    ) : (
      <Navigate to='/' />
    );
  }
};

export default PrivateRoute;
