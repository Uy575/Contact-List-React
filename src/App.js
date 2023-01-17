import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contactcard from './component/Contact-card';
import Contactdetail from './component/Contact-detail';
import Editable from './component/Editable';
import Fieldsforaddcontact from './component/Fields-for-add-contact';
import Norecord from './component/No-record';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
       <Route path='/norecord' element = { <Norecord/>}></Route>
       <Route path='/norecord/:addcontact' element = { <Fieldsforaddcontact/>}></Route>
       <Route path='/' element = {<Contactcard/>}></Route>
       <Route path='/contactdetail/:id' element = {<Contactdetail/>}></Route>
       <Route path='/addcontact' element = {<Fieldsforaddcontact/>}></Route>
       <Route path='contactdetail/:id/editable' element = {<Editable/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
