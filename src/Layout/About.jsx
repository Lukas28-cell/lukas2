import React from 'react'
import { MyStyle } from '../externalStyle'

function About() {
  const myStyle={
background:"forestgreen",
fontSize:20,
color:'white',
width:450
  }
  return (
    <div><h1 style={myStyle}>About Component</h1>
        <p style={myStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sunt reprehenderit quas, est fuga similique ex maxime accusamus doloribus, dolorem tenetur ea. Nesciunt reprehenderit, laudantium odio fugiat rem earum aliquid et ipsum eum consequatur delectus, velit nisi quo optio consequuntur amet, nihil fuga cumque quae laboriosam numquam asperiores impedit tempore? Eveniet libero impedit deleniti corporis voluptate iure quod, deserunt mollitia est, dolorem quisquam earum delectus voluptatibus quis aliquid quas repudiandae totam laborum nesciunt tenetur aliquam saepe voluptas! Aliquam itaque autem eius optio, cumque, aliquid repellat expedita consequuntur tempora voluptatum accusamus consequatur distinctio quis accusantium praesentium adipisci magnam incidunt deleniti perferendis!</p>
    </div> 
  )
}

export default About