import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/list';
import Loading from './component/loading';
import Search from './component/search';


function App() {
  const ListLoading = Loading(List);
  const [appState, setAppState] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.enye.tech/v1/challenge/records";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loading: false, data: data });
      });
  }, [setAppState]);


  return (
    <div className='App'>
      <div className='header'>
        <div>
        <span>LOGO</span>
          </div>

      </div>
      <h1>Customer Information</h1>

      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} data={appState.data} />
      </div>

    </div>
  );
}
export default App;
