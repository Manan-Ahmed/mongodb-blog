"use client"

export default function Home() {

  const handleClick = async()=>{
    let data = {
      name: 'Ahmed',
      role: 'coder'
    }
    let a = await fetch("/api/todos",{method:'POST',headers:{
      "Content-Type": "application/json"
    },
  body:JSON.stringify(data)
  })
    let res = await a.json()
    console.log(res);
    
  }


  return (
   <>
      <h1 >Hello world</h1>
      <button onClick={handleClick}>clickme</button>
   </>
  );
}
