import React from 'react'
// import { AiOutlineGithub } from 'react-icons/ai';

function Project({ name, image }) {
  return (
    <div className='project'>
      <div style={{backgroundImage: `url(${image})`}} className='backgroundImage' />
      <h1 className='name'> {name} </h1>
      {/* <a href='https://github.com/YockaFlocka/tindog'> <AiOutlineGithub /> </a>  */}
    </div>
  )
}

export default Project;