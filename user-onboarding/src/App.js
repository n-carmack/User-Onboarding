import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";
import * as yup from 'yup';
import axios from 'axios';
import Form from './Form';
import schema from './Validation/formSchema';

const formStartingValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const formStartingErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(formStartingValues);
  const [formErrors, setFormErrors] = useState(formStartingErrors);
  const [users, setUsers] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res=> {
      setUsers([res.data, ...users]);
    })
    .catch(err=> console.error(err));
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err=> setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      </header>
      {users.map(user => {
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      })}
    </div>
  );
}

export default App;
