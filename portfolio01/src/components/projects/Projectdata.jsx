import React from 'react'

const Projectdata = (props) => {
  return (
<div className="card" style={{width: "16rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-center fs-5 fw-bold">{props.title}</p>
  </div>
</div>

)
}

export default Projectdata