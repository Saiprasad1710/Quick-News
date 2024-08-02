
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
const App = ()=> { 

  const apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "38974c31f01e4afc8b53b96d28f706ad";

  const [progress,setProgress] = useState(0);
  // state = {
  //   progress:0
  // }

  // const setProgress = (progress)=>{
  //   setState({progress:progress});
  // }


  //  c = "This is sai"
    return (
      <div>
        {/* Hello this is first class based component {c} */}
        <Router>

        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        
          <Routes>
            <Route exact path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} category={'general'}/>}> </Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} category={'sports'}/>}> </Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} category={'entertainment'}/>}> </Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} category={'health'}/>}> </Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} category={'science'}/>}> </Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={9} category={'business'}/>}> </Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} category={'technology'}/>}> </Route>
     
          </Routes>
        </Router>
        
        
      </div>
    )
  
}

export default App
