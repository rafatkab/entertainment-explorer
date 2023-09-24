interface Props {
  page: number;
  maxPages: number;
  handleChangePage: (pageNum: number) => void;
}

const PageExplorer = ({ maxPages, page, handleChangePage }: Props) => {
  const handlePageBehaviour = (num: number) => {
    // if (num <= 3) {
    //   return [1, 2, 3, 4, 5];
    // } else if (num >= 498) {
    //   return [496, 497, 498, 499, 500];
    // } else {
    //   return [num - 2, num - 1, num, num + 1, num + 2];
    // }

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
      <button
        className="btn btn-dark border-white"
        onClick={() => handleChangePage(1)}
        disabled={page == 1 ? true : false}
      >
        {"First page"}
      </button>
      <button
        className="btn btn-dark border-white"
        onClick={() => {
          const num = page - 2;
          handleChangePage(num);
        }}
        disabled={page <= 2 ? true : false}
      >
        {"<<"}
      </button>
      <button
        className="btn btn-dark border-white"
        disabled={page <= 1 ? true : false}
        onClick={() => handleChangePage(--page)}
      >
        {"<"}
      </button>
      {handlePageBehaviour(page).map((num) => (
        <button
          key={num}
          className={
            "btn border-white" + (num == page ? " btn-info" : " btn-dark")
          }
          onClick={() => handleChangePage(num)}
        >
          {num}
        </button>
      ))}
      <button
        className="btn btn-dark border-white"
        onClick={() => handleChangePage(++page)}
        disabled={page >= maxPages ? true : false}
      >
        {">"}
      </button>
      <button
        className="btn btn-dark border-white"
        onClick={() => {
          const num = page + 2;
          handleChangePage(num);
        }}
        disabled={page >= maxPages-1 ? true : false}
      >
        {">>"}
      </button>
      <button
        className="btn btn-dark border-white"
        onClick={() => handleChangePage(500)}
        disabled={page == maxPages ? true : false}
      >
        {"Last page"}
      </button>
    </center>
  );
};

export default PageExplorer;
