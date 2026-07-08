import React from 'react'
import Skillsdata from './skills/Skilldata'

const Skills = () => {
  const data = [
        {
            logo:"https://cdn-icons-png.magnific.com/256/4943/4943029.png",
            skill:"HTML"
        },
        {
            logo:"https://cdn-icons-png.flaticon.com/512/732/732190.png",
            skill:"CSS"
        },
        {
            logo:"https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
            skill:"JavaScript"
        },
        {
            logo:"https://arkinfosoft.com/media/vxylqtub/group-1321316476.png",
            skill:"MERN"
        }

    ]
return(

<div className="main-card">
   <h1 className='fw-bold mb-4 mt-4 text-light'>Technical <span style={{color:"#10c9c6",borderBottom:'2px groove #10c9c6'}}>Skills</span></h1>
{/* <div>  <h2 className='fw-bold mb-4 mt-4 text-center'>Frontend <span style={{color:"#10c9c6",borderBottom:'2px groove #10c9c6'}}>Skills</span></h2> */}
<div className=' cards d-flex justify-content-center align-items-center'>
    {data.map((val,i)=>{
      return <div key={i}> 
      <Skillsdata image={val.logo} title={val.skill} />
      </div>
    })}
  </div>
  {/* </div> */}
  </div>
    )

}

export default Skills
