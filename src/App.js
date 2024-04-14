import React, { useEffect, useState } from 'react'
import './App.css'
import ContactCard from './ContactCard'
const App = () => {
  // const contacts = [
  //   {
  //     avatarUrl: 'http://via.placeholder.com/150',
  //     name: "Jenny Han" ,
  //     email : "jenny.han@notreal.com",
  //     age : 25
  //   },
  //   {
  //     avatarUrl: 'http://via.placeholder.com/150',
  //     name: "Paul Jones" ,
  //     email : "paul.jones@notreal.com", 
  //     age : 33
  //   },
  //   {
  //     avatarUrl: 'http://via.placeholder.com/150',
  //     name: "Peter Pan" ,
  //     email : "peter.pan@neverland.com" ,
  //     age : 100
  //   },
  //   {
  //     avatarUrl: 'http://via.placeholder.com/150',
  //     name: "Tan Vuong Doanh Chịnh" ,
  //     email : "Tan.vuong@neverland.com" ,
  //     age : 10000
  //   }
  //   // Thêm dấu phẩy sau } => }, và {...} viết thêm thẻ khác nếu muốn làm 5+ thẻ
  // ];

  const [results, setResults] = useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=9")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
});
  }, [])
  

  return(
    <div>
      {results.map((result, index) => {
        return(
          <ContactCard key={index}
          avatarUrl = {result.picture.large}
          name = {result.name.first} 
          email = {result.email} 
          age = {result.dob.age}/>
        )
      })}
      
      {/* <ContactCard
      avatarUrl = 'http://via.placeholder.com/150'
      name = "Jenny Han" 
      email = "jenny.han@notreal.com" 
      age = {25}/>
      <ContactCard
      avatarUrl = 'http://via.placeholder.com/150'
      name = "Paul Jones" 
      email = "paul.jones@notreal.com" 
      age = {25}/>
      <ContactCard
      avatarUrl = 'http://via.placeholder.com/150'
      name = "Peter Pan" 
      email = "peter.pan@neverland.com" 
      age = {100}/> */}
    </div>
  );
};
export default App;
