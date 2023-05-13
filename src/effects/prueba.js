let input = "cuarenta";

// check if input is a number
const check = (input) =>
  isNaN(input) ? console.log("not a number") : console.log("is a number");

check(input);



// old pagination made by me

// const [currentPage, setCurrentPage] = useState(1);
// const [postPerPage, setPostPerPage] = useState(8);

// const lastPostIndex = currentPage * postPerPage;
// const firstPostIndex = lastPostIndex - postPerPage;

// const currentPosts = location?.residents.slice(firstPostIndex, lastPostIndex);
// const totalPosts = location?.residents.length;

// the old card pagination component
{/* <Pagination
postPerPage={postPerPage}
totalPosts={totalPosts}
setCurrentPage={setCurrentPage}
currentPage={currentPage}
/> */}

// import React from "react";

// const Pagination = ({
//   totalPosts,
//   postPerPage,
//   setCurrentPage,
//   currentPage,
// }) => {
//   let pages = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
//     pages.push(i);
//   }

//   return (
//     <div className="pagination">
//       {pages.map((page, index) => {
//         return (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(page)}
//             className={page == currentPage ? "active" : ""}
//           >
//             {" "}
//             {page}{" "}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default Pagination;


