//1.로딩페이지
import './App.css';
import {useState,useEffect} from'react';

function App() {
  //상태변수를 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  function IncreaseCounter(loadTimer) {
    let _counter = loadCounter;
    _counter = _counter + 1;
  
    if (_counter > 10) {
      setIsLoading(false);
      clearImmediate(loadTimer);
    } else {
      setLoadCounter(_counter);
      setIsLoading(true);
    }
  }
  useEffect(
    ()=>{
      const loadTimer = setInterval(
        IncreaseCounter,1000
      );
      return()=>{ clearInterval(loadTimer); }
    }
  )

  return (
    <div>
      {isLoading? `Loading...${loadCounter}`:'Loaded'}
    </div>
    
  );
}

export default App;
