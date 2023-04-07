import React from 'react';
import Customer from './components/Customer';
import './App.css';


const customers = 
  [
    {id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '하니',
      birthday: '951122',
      gender: '여자',
      job: '대학생',},
    {id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '강해린',
      birthday: '951122',
      gender: '여자',
      job: '대학생',},
    {id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '민지',
      birthday: '951122',
      gender: '여자',
      job: '대학생',}
  ];

function App() {
  return (
    <div>
      {customers.map(v => {
        return <Customer
        key = {v.id}
        id = {v.id}
        image = {v.image}
        name = {v.name}
        birthday = {v.birthday}
        gender = {v.gender}
        job = {v.job}
      />
    })}
    </div>
  );
}

export default App;
