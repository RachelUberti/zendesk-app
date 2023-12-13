import React from "react";


//We need to have the ability to pass a URL down (this URL is optional (e.g. if statement)
const Row = ({name, value, url, bold}) => {

  return (
    <p className="row">
      {bold ? <b><span>{name}: </span></b> : <span>{name}: </span>}
      {url ? <a href={url}>{value}</a> : <span>{value}</span>}
    </p>
  )
}

export default Row