import React from "react"
import { Link } from "gatsby"
import { Button } from "reactstrap"

const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <div className="bottom-container">
      {!isFirst && (
        <Link to={prevPage}>
          <Button size="lg" className="float-left">
            {" << ใหม่กว่านี้"}
          </Button>
        </Link>
      )}

      {!isLast && (
        <Link to={nextPage}>
          <Button size="lg" className="float-right">
            {"เก่ากว่านี้ >> "}
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Pagination
