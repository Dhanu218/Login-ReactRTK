// import React, { useState } from 'react';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { useSelector } from 'react-redux';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectAllCounts} from "./counterSlice";
// import styles from './Counter.module.css';

const Counter=() =>{
  const counters = useSelector(selectAllCounts);
  // const dispatch = useAppDispatch();
  
const renderedPosts = counters.map((count: { id: Key; firstName: string; lastName: string; mail: string | number; referred: string; referralCode: string; })=>(
  <article key={count.id}>
    <h3>{count.firstName}{count.lastName}</h3>
    <p>{count.mail}<br></br>
        {count.referred}=='No'?'No Referral Code...':{count.referralCode}
    </p>
  </article>
))
  return (
    <section>
      <h2>Users</h2>
      {renderedPosts}
    </section>
  );
}
export default Counter 