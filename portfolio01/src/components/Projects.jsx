import React from 'react'
import Projectdata from './projects/Projectdata'

const Projects = () => {
  const data = [
            {
            logo:"src/assets/Screenshot 2026-06-28 170557.png",
            project:"Portfolio"
        },
        {
            logo:"src/assets/Screenshot 2026-06-28 175839.png",
            project:"Gallery"
        },
        {
            logo:"src/assets/Screenshot 2026-06-28 183941.png",
            project:"Webpage"
        }
  ]

  return (
    <>
    <div className="pro-card">
   <h1 className='fw-bold mb-4 mt-4 text-light'>My <span style={{color:"#10c9c6",borderBottom:'2px groove #10c9c6'}}>Projects</span></h1>
{/* <div>  <h2 className='fw-bold mb-4 mt-4 text-center'>Frontend <span style={{color:"#10c9c6",borderBottom:'2px groove #10c9c6'}}>Skills</span></h2> */}
<div className=' cards d-flex justify-content-center align-items-center'>
    {data.map((val,i)=>{
      return <div key={i}> 
      <Projectdata image={val.logo} title={val.project} />
      </div>
    })}
  </div>
  {/* </div> */}
  </div>
      {/* <div className="container">
        <div className="card" style={{width: "18rem"}}>
  <img src="src/assets/imgmern.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-center fs-4 fw-bolder">Portfolio</p>
  </div>
</div>
        
      </div> */}
    </>
  )
}

export default Projects
