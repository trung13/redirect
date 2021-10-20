import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {

  const [people, setPeople]=useState(data);

  const [index,setIndex]=useState(0);

  useEffect( () =>{
     let yoyo = setInterval(()=>{
       index===(data.length-1) ? setIndex(0) : setIndex(index+1);
     }, 2000)
     return ()=> clearInterval(yoyo);
   }, [index])  

  return (
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>OOPS...!
          </h2>
          <p>Please wait till we redirect you into a new open-coding</p>
        </div>

        <div className="section-center">
          {people.map((person,perIndex)=>{
            const {id,image,name,title,quote}=person;
            
            let articlePos = '';

            if (perIndex === index){
              articlePos = "activeSlide";
            } else if (perIndex < index){
              articlePos = "lastSlide";
            } else {
              articlePos = "nextSlide";
            }


            return (
              <article className={articlePos} classkey={id}>
                <img src={image} alt={name} className="person-img"/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
              )
          })}

        <button onClick={()=>{ index===0 ? setIndex(data.length-1) : setIndex(index-1)}} className="prev">
          <FiChevronLeft />
        </button>

        <button onClick={()=>{ index===(data.length-1) ? setIndex(0) : setIndex(index+1)}} className="next">
          <FiChevronRight />
        </button>

        </div>

        

      </section>
  )
  
  
}

export default App;
