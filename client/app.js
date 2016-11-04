import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ul style={{listStyle: 'none'}}>
    <li>
      <select>
        <option>Select a Course</option>
        <option value="12345">Intros to Intros</option>
        <option value="23456">Intermediate Intermediaries</option>
        <option value="34567">Advanced Advancements</option>
      </select>
    </li>
    <li>
      <select>
        <option>Enter Rating</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </li>
    <li><button type="Submit">Submit</button></li>
  </ul>,
  document.getElementById('main')
);