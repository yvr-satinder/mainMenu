import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './css/bootstrap.css';
//<style>
//@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Gurmukhi:wght@100&display=swap');
//</style>

import reportWebVitals from './reportWebVitals';


const NavBar =()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <a class="navbar-brand" href='#'><img src="data:image/png;base64,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" width="30" height="30" class="d-inline-block align-top" alt=""></img>
    <a >Addhat</a>
    </a>

  
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Accounts
        </a>
        
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Entry
        </a>
        
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reports
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
      
      
      

</nav>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
  <NavBar />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
