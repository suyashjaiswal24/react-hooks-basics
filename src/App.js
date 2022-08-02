import React from 'react';
import {useState, useEffect, useContext} from 'react';


function App(){
  //Progression 01
  const [age1,setAge1] = useState(19)
  const handleClick = () => setAge1(age1+1)

  //Progression 02
  const [age2,setAge2] = useState(19)
  const [siblingsNum, setSiblingsNum] = useState(10)
  const handleClick_2 = () => setAge2(age2+1)
  const handleSiblingsNum_2 = ()=>{
    setSiblingsNum(siblingsNum+1)
  }

  //Progression 03
  const [state, setState] = useState({age3: 19,
    siblingsNum3: 10})
  
      const handleClick_3 = val => 
        setState({
          ...state, [val] : state[val]+1
        })
      const {age3, siblingsNum3} = state

   //Progression 04
    const [count,setCount] = useState(0)

   //Progression 05
   const [age5,setAge5] = useState(0)
   const handleClick_5 = () => setAge5(age5 +1)
    useEffect(() =>{
      document.title = 'You are '+age5+' years';
    }) 
    
    //Progression 06      
    let ThemeContext = React.createContext('light');
    let theme = useContext(ThemeContext);

  return(<>
    <h1>Progression: 1</h1>
    <div>
      Today I am {age1} Years of Age
    </div>
    <button onClick={handleClick}>Get Older!</button>
    
    <hr/>
     <h1>Progression: 2</h1>
     
     <h2>Today I'm {age2} years of age.</h2>
     <h3>I have {siblingsNum} siblings</h3>
     <div>
       <button onClick={handleClick_2}>Get older!</button>
       <button onClick={handleSiblingsNum_2}>More siblings!</button>
     </div>
     <hr/>

     <h1>Progression: 3</h1>
    
    <h2>Today I'm {age3} years of age.</h2>
    <h3>I have {siblingsNum3} siblings</h3>
    <div>
      <button onClick={handleClick_3.bind(null,'age3')}>Get older!</button>
      <button onClick={handleClick_3.bind(null,'siblingsNum3')}>More siblings!</button>
    </div>
    
    <hr/>
    <h1>Progression: 4</h1>
    <h3>Count value is: {count}</h3>
    <div>
      <button onClick={()=>setCount(0)}>Reset!</button>
      <button onClick={()=>setCount(count+1)}>Plus(+)</button>
      <button onClick={()=>setCount(count-1)}>Minus(-)</button>
    
    </div>
    
    <hr/>
    <h1>Progression: 5</h1>
    <div>
      <p>Look at the Title of the current tab</p>
      <button onClick={handleClick_5}>Update Title!!</button>
    </div>

    <hr/>
    <h1>Progression: 6</h1>
    <div
        style={{
            background:theme ==='dark' ? 'black':'orange',
            color: theme === 'light' ? 'white' : 'gray',
            width: '100%',
            minHeight: '100px',
            textAlign: 'left'
    }}>
      <br></br>The theme here is {theme}</div>
    
     </>
  )
}

export default App