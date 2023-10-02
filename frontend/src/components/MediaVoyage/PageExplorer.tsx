import { Link, useParams } from "react-router-dom";

interface Props {
  searchString : string | undefined;
  maxPages: number;
}

const PageExplorer = ({ searchString, maxPages }: Props) => {
  let {page} = useParams();
  let pageNum = parseInt(page != undefined ? page : "1")

  const handlePageBehaviour = (num: number) => {
    if (maxPages <= 5) {
      return Array(3).map((val, index) => index+1)
    }
    else {
      if (num <= 3) {
        return [1, 2, 3, 4, 5]
      }
      else if (num >= maxPages-2) {
        return [maxPages-4, maxPages-3, maxPages-2, maxPages-1, maxPages]
      }
      else {
        return [num-2, num-1, num, num+1, num+2]
      }
    }
  };

  return (
    <center className="m-4">
      <Link to={`/${searchString}/1`}>
      <button
        className="btn btn-dark border-white"
        disabled={pageNum == 1 ? true : false}
      >
        {"First page"}
      </button>
      </Link>
      <Link to={`/${searchString}/${pageNum-2}`}>
      <button
        className="btn btn-dark border-white"
        disabled={pageNum <= 2 ? true : false}
      >
        {"<<"}
      </button>
      </Link>
      <Link to={`/${searchString}/${--pageNum}`}>
      <button
        className="btn btn-dark border-white"
        disabled={pageNum <= 1 ? true : false}
      >
        {"<"}
      </button>
      </Link>
      {handlePageBehaviour(pageNum).map((num) => (
        <Link to={`/${searchString}/${num}`}>
        <button
          key={num}
          className={
            "btn border-white" + (num == pageNum+1 ? " btn-info" : " btn-dark")
          }
        >
          {num}
        </button>
        </Link>
      ))}
      <Link to={`/${searchString}/${++pageNum}`}>
      <button
        className="btn btn-dark border-white"
        disabled={pageNum >= maxPages ? true : false}
      >
        {">"}
      </button>
      </Link>
      <Link to={`/${searchString}/${pageNum+2}`}>
      <button
        className="btn btn-dark border-white"
        disabled={pageNum >= maxPages-1 ? true : false}
      >
        {">>"}
      </button>
      </Link>
      <Link to={`/${searchString}/${maxPages}`}>
      <button
        className="btn btn-dark border-white"
        disabled={pageNum == maxPages ? true : false}
      >
        {"Last page"}
      </button>
      </Link>
    </center>
  );
};

export default PageExplorer;
