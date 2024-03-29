import { Link } from 'react-router-dom';

const TableRow = (props) => {
  const { board } = props;

  return (
    <tr>
      <td>{board.num}</td>
      <td>
        {board.re_level > 0 ? (
          <>
            <img
              alt='level'
              src='/images/level.gif'
              width={20 * board.re_level}
              height='15'
            />
            <img alt='re' src='/images/re.gif' />
          </>
        ) : null}
        <Link to={`/board/view/${board.num}`}>{board.subject}</Link>
      </td>
      <td>{board.writer}</td>
      <td>{board.readcount}</td>
    </tr>
  );
};

export default TableRow;
