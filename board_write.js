import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { boardActions } from '../../reduxs/actions/board_action';

const BoardWrite = () => {
  const [inputs, setInputs] = useState({
    writer: '',
    email: '',
    subject: '',
    content: '',
    filename: null,
  });

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const { num } = useParams();
  const boardList = useSelector((state) => state.board.boardList);
  const { writer, email, subject, content, filename } = inputs;

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    console.log(nextState);
    // setInputs((prev) => {
    //   return { ...prev, ...nextState };
    // });
    setInputs({ ...inputs, ...nextState });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    console.log('files:' + e.target.files[0]);
    setInputs({ ...inputs, filename: e.target.files[0] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('writer', writer);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('content', content);
    console.log('filename:', filename);
    if (filename !== null) formData.append('filename', filename);

    //답변글이면...
    if (num !== undefined) {
      const item = boardList.filter((element) =>
        element.num === num ? element : null
      );

      formData.append('num', item[0].num);
      formData.append('ref', item[0].ref);
      formData.append('re_step', item[0].re_step);
      formData.append('re_level', item[0].re_level);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    let pathRole = localStorage.getItem('authRole');
    pathRole = pathRole.substring(pathRole.indexOf('_') + 1).toLowerCase();
    console.log('pathRole:', pathRole);

    await dispatch(boardActions.getBoardWrite(formData, config));

    setInputs({
      writer: '',
      email: '',
      subject: '',
      content: '',
      filename: null,
    });
    navigator(
      `/board/list/${pv.currentPage ? pv.currentPage : { currentPage: 1 }}`
    );
  };

  /////////////////////////////////////////////////////////////
  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td width='20%' align='center'>
                글쓴이
              </td>
              <td>
                <input
                  type='text'
                  name='writer'
                  size='10'
                  maxLength='10'
                  value={writer}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                Email
              </td>
              <td>
                <input
                  type='text'
                  name='email'
                  size='30'
                  maxLength='30'
                  value={email}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                제목
              </td>
              <td>
                <input
                  type='text'
                  name='subject'
                  size='40'
                  value={subject}
                  placeholder={num !== undefined ? '답변' : null}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                내용
              </td>
              <td>
                <textarea
                  name='content'
                  rows='13'
                  cols='40'
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td width='20%' align='center'>
                첨부파일
              </td>
              <td>
                <input
                  type='file'
                  name='filename'
                  id='filepath'
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link className='btn btn-primary' to={`/board/list/${pv.currentPage}`}>
          리스트
        </Link>
        <input type='submit' className='btn btn-primary' value='등록' />
      </form>
    </>
  );
};

export default BoardWrite;
