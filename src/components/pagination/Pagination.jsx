import React from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ setPage, numOfPages, page }) => {
  // const handlePageChange = () => {
  //   setPage(page + 1);
  //   window.scroll(0, 0);
  // };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        background: "yellow",
      }}
    >
      <Pagination
        color="primary"
        count={numOfPages}
        onChange={(e) => setPage(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
