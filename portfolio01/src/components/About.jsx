import React from 'react'

const About = () => {
  return (
    <>
      <div className="about d-flex px-5 py-5 ">
        <div className="pic px-5">
            <img src="https://cdn.pixabay.com/photo/2023/02/15/20/01/ai-generated-7792597_1280.jpg" className="img1" height="400"  />
      </div>
      
      <div className="content container">
        {/* <h1 className="text-center fw-bold mb-5">About Me</h1> */}
        <h1 className='fw-bold mb-4 mt-4'>About <span style={{color:"#10c9c6",borderBottom:'2px groove #10c9c6'}}>Me</span></h1>
            <p>Hi, I'm Anushka Agarwal, a Full Stack Developer passionate about building responsive, user-friendly, and scalable web applications. I enjoy turning ideas into functional digital experiences by working across both the front-end and back-end, with a focus on writing clean, efficient, and maintainable code.<br/><br/>

Alongside web development, I'm also learning Digital Marketing to better understand how technology and marketing work together to create impactful online experiences. This combination helps me build applications that are not only technically sound but also aligned with user engagement and business goals.<br/><br/>

I believe in continuous learning, solving real-world problems, and staying updated with the latest technologies. I'm always excited to take on new challenges, collaborate with others, and create solutions that make a difference.</p>
      </div>
      </div>
    </>
  )
}

export default About
