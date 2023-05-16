import React from "react";

const Pagination = ({ pages, next, prev, setUrl }) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    setUrl(next);
  };
  const handlePrev = () => {
    prev && setUrl(prev);
  };

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={handlePrev}>
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button key={number} className="pagination__btn">
          {number}
        </button>
      ))}
      <button className="pagination__btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
