import React, { useEffect } from 'react'

const fetchData = async () =>{
  await  fetch("https://localhost:8080/api/user").then((res)=>{
    
  })
    
}

export default  async function page() {
    
  return (
    <div>page</div>
  )
}
