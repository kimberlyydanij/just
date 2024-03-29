import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Role } from '../commonApi/commonConst';

// 필요 정보1. 메뉴의 대한 정보(추구 Context를 통해 관리(?))
const category = [
  {
    idx: 1,
    name: '관리자 메인',
    path: '/member',
    role: [Role.MEMBER, Role.MANAGER, Role.ADMIN],
    sub: [
      {
        idx: 2,
        name: '회원관리',
        path: '/board', // sub은 부모의 path가 prefix로 붙는다. 그래서 회원관리 최종 url은 http://localhost:3000/admin/register가 된다.
        role: [Role.MEMBER],
        sub: [],
      },
    ],
  },
];

const ProtectRoute = () => {
  // 현재 Url정보를 갖고 오기 위해서 useLocation Hooks사용
  const location = useLocation();

  // 필요정보2. 로그인한 사용자의 정보
  const username = localStorage.getItem('loginMember');
  const authRole = localStorage.getItem('authRole');

  /**
   * 전체 메뉴에 대한 정보를 새로운 menu라는 상수를 선언해 sub이란 key에 넣어 주었다.
   * sub이라는 key에 넣어준 이유는 sub에 넣어주지 않을경우 2depth부터는 sub에서 꺼내와야하는 문제가 있기 때문이다.
   * 해당 방법은 꼼수일수도....있다.......
   */

  const menu = { ...category[0], sub: [...category] };

  console.log('menu:', menu);
  /**
   * 현재 URL정보를 split를 이용해 문자열 배열로 정의
   * location.pathname을 할경우 /admin/member 이런식으로 맨앞에 '/'가 붙는다 그렇기 때문에 substring이용해 맨앞에 '/'를 없애 주었다.
   * admin/member로 접속할 경우 location.pathname.substring(1).split("/");를 하면 pathArr에는 ['admin', 'member']가 할당되게 된다.
   */

  console.log('location:' + location.pathname);
  let pathArr = location.pathname.substring(1).split('/');
  console.log('pathArr:', pathArr);

  // 권한 체크(menu : 비교할 메뉴, pathArr:url을'/' split한 문자열 배열, index : pathArr에 값을 꺼내올 index)
  const roleCheck = (menu, pathArr, index = 0) => {
    /**
     * 여기서 43Line에서 sub에 전체 메뉴를 넣어준 이유가 나온다.
     * sub에 넣어주지 않을 경우 1depth를 비교 할때는 menu에서 비교 해야하고 2depth부터는 menu.sub에서 비교가 이루어져야한다.
     * 그렇게되면 해당 로직이 좀더 복잡해 질 것 같아 43라인같은 방법을 사용했다.
     */
    let result = menu.sub.filter((item) => {
      console.log('item:' + item.path);
      return (
        item.role.includes(authRole) && item.path.includes(`/${pathArr[index]}`)
      );
    });

    /**
     * url길이를 비교해 한번더 호출될지를 결정한다.
     * url이 http://localhost:3000/admin일 경우는 pathArr의 length가 1이기 때문에 해당 if문은 false가 되고 roleCheck함수는 끝난다.
     * url이 http://localhost:3000/admin/member일 경우는 pathArr의 length가 2이기 때문에 해당 if문은 처음에 true가 되고 roleCheck함수를 한번더 호출한다.
     */
    if (++index < pathArr.length) {
      return roleCheck(result[0], pathArr, index);
    }
    return result;
  };
  // roleCheck함수에 최종 반환 되는건 접근가능한 menu 항목이다.
  let result = roleCheck(menu, pathArr);

  console.log('result:', result);

  /**
   * roleCheck에서 최종 반환 되는 항목은 접근가능한 menu항목이기 때문에,
   * result변수의 length가 0일경우는 접근간으한 메뉴가 아니라는 뜻으로 된다.
   */
  if (result.length === 0) {
    alert('해당 페이지 접근 권한이 없습니다! 관리자 메인페이지로 이동합니다.');
    return <Navigate to='/admin' />;
  }

  // 접근 가능한 페이지일 경우 해당 페이지를 보여준다.
  return <Outlet />;
};

export default ProtectRoute;
