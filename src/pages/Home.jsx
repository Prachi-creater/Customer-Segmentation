import React,{useState} from 'react'

export default function Home(){
    const [isTrue,setcount] = useState(
    
    )
    const  handleClick = ()=> {
        var values = 
        {
            'xvalues':[2,5,6],
            'yvalues':[3,6,8]
        }
           setcount(values)
    }
return(
    console.log(isTrue),
    <>
    {
        isTrue ? <h1>{isTrue}</h1> : ""
    }
    <button onClick={handleClick}>Show</button>
    </>
)
}