import React, { Fragment } from 'react'

const FilterLocationItem = () => {
    return (
        <Fragment>
            <li
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ border: "0px", paddingTop: "1px", paddingBottom: "1px" }}
          >
            <input type="checkbox" />
            Sub Location 1
            <span className="badge badge-primary badge-pill">2</span>
          </li>
        </Fragment>
    )
}

export default FilterLocationItem
