import React from 'react'
import Select from 'react-dropdown-select'

const About = () => {
  const options = [
    {
      value: 1,
      label: 'Leanne Graham'
    },
    {
      value: 2,
      label: 'Ervin Howell'
    }
  ];
  return (
    <div className='container m5' style={{height:"1000px",marginTop:"150px"}}>
      <Select options={options} onChange={(values) => {console.log(values)}} />
    </div>

  )
}

export default About