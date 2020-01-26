import React from 'react';
import './App.css';

const App=()=>{
  return(
    <PersonList></PersonList>
  );
};



const PersonList=()=>{
  const people=[
    {
      img:1,name:"zhang",job:"teacher"
    },
    {
      img:2,name:"wu",job:"developer"
    },
    {
      img:3,name:"liu",job:"sales man"
    }
  ];
  const peoplelist=people.map((elem)=>{return (<Person person={elem} key={elem["img"]}></Person>)});
  return(
    <div>
        {peoplelist}
    </div>

    //这种方法写比较繁琐但是可以传children
    // <div>
    //   <Person person={people[0]}>a great person</Person>
    //   <Person person={people[1]}></Person>
    //   <Person person={people[2]}></Person>
    // </div>


  );
};

const Person=(props)=>{
  // console.log(props);
  const{img,name,job}=props.person;
  const{children}=props;
  //记住这个地址并不是App.js 文件相对与1.jpg的路径。而是index.html相对与1.jpg的路径
  
  const url=`./Picture/${img}.jpg`;

  return(
    <div className="person">
      <img src={url} alt=""></img>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};



export default App;
