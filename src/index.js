import React from 'react';
import  ReactDOM  from 'react-dom';


//CSS
import './index.css'

const books =[
    {
        bookid:1,
        img:'https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL254_SR254,254_.jpg',
        title:'i love you zong',
        author:'amelia'

    },
    {
        bookid:2,
        img:'https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL254_SR254,254_.jpg',
        title:'i love you zong',
        author:'amelia negtion'

    },
     {
         bookid:3,
        img:'https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL254_SR254,254_.jpg',
        title:'i love you zong',
        author:'amelia'

    },
    {
        bookid:4,
        img:'https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._AC_UL254_SR254,254_.jpg',
        title:'i love you zong',
        author:'amelia negtion'

    },
]


const Page = ()=>{
    return(
        <div className='booklist'>
            {books.map((book)=>{
                
               return(
                  <Book
                  key={book.bookid}
                  {...book}
                  >
                  </Book>
               )
            })}
           
     

        </div>
    )
}




const Book= (props)=> {
    const {img,author,title ,bookid} = props;
    ;
    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
        alert('eat mangos befor ')

    };
    const comlexExample = ({bookid})=>{
        
    }
    const getId =()=>{
        const value = document.getElementById('mango').value;
        console.log(value)
      
    }
    return (
        <div className='bookist' onMouseOver={()=>{console.log("mouse oper gya ");}}>
            
            <img src={img}></img>
            <p className='img-text-wrapper ' >book Id :{bookid}</p>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <button type='button ' onClick={clickHandler} >Buttni</button>
            <button onClick={getId} >Complex </button>
            <input className='text-input' type={'text'} id={'mango'} onClick={getId}></input>
            
            
        </div>
    )
};




ReactDOM.render( <Page/> , document.getElementById('root'));
