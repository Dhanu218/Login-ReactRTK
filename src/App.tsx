import React,{useState} from 'react';
// import './App.css';
import { FormState, useForm, useFormState } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import { userAdded } from './features/counter/counterSlice';
import Counter from './features/counter/Counter';
import AddForm from './features/counter/AddForm';


function App() {
  

  return (
    <div className="App">
      <AddForm/>
      <Counter/>
    </div>
  );
}

export default App;


