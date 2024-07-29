import React from 'react'



  const LINK={
    background:"green",color:"white",width:270

    
}
function Contact() {
  return (
    <div>
    
   <h2> Contact Component</h2>

  
      <div>
        <h1 style={LINK}>contact us at <br/> 08120542121 or<br />lukako@gmail.com</h1>
        <p style={{background:"red", color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam beatae quos itaque quo iure tempore eveniet atque a odit ullam illo debitis perspiciatis quas excepturi aperiam vitae delectus repellendus corporis, voluptatibus impedit pariatur quod. Ratione pariatur, similique beatae eius voluptatum ab dolorem iusto, perferendis libero, quo ipsum asperiores ut.</p>
      </div>
      <button>Click me</button>
    </div>
    
  )

}

export default Contact