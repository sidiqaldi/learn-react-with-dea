import React from "react"
import Collection from "./collection.album"
const Album = (props) => {

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Collection />
    </React.Fragment>
  )
}

export default Album