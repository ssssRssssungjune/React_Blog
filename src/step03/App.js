//1.로딩페이지1
import './App.css';
import {useState,useEffect} from'react';

function App() {
  //상태변수를 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  




  useEffect(
    ()=>{

      function IncreaseCounter(){
        let _counter = loadCounter;
        _counter = _counter + 1;
        if(_counter > 10){
          setIsLoading(false);
          clearInterval(loadTimer);
          
        }
        setLoadCounter(
          _counter
        );
      }

      const loadTimer = setInterval(
        IncreaseCounter,1000
      );
      return()=>{ clearInterval(loadTimer); }
    },[loadCounter]
  )

  return (
    <div>
      {isLoading? `Loading...${loadCounter}`:'Loaded'}
    </div>
    
  );
}

export default App;
