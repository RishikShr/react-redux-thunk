import React from 'react'
import {connect} from 'react-redux'
import './App.css';
import {anotherName,addWish} from './action/myaction' 
//Component access data from store 
function App(props) {
  
  const mywish = props.mywish.map(item =>{
    return  <h2 key={Math.random}>{item}</h2>
  })
  return (
    <div className="App">
      <h1>i am app component</h1>
      <h1>i am {props.myname}</h1>
        {mywish} 
      <button onClick={()=>{props.changeName()}}>Change it</button>
      <button onClick={()=>{props.addWish()}}>Wish Change it</button>
     
    </div>
  );
}

const mapStateToProps = (state)=>{  // state from store
  return {
    myname : state.name,  //from reducer
    mywish : state.wish
   }
}

const mapDispatchProps = (dispatch) =>{  //action
  return {
    changeName:()=>{dispatch(anotherName())},  //anothername is action
    addWish:()=>{dispatch(addWish())}
  }
}

export default connect(mapStateToProps,mapDispatchProps)(App);
