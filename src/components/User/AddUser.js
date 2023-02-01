import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import { useState } from "react";
const AddUser=(props)=>{

const [name,setName]=useState('');
const [age,setAge]=useState('');

const addUserHandler = (event) => {
  event.preventDefault();
  if (name.trim().length === 0 || age.trim().length === 0) {
    return;
  }
  if (+age < 1) {
    return;
  }
  props.onAddUser(name, age);
  setName('');
  setAge('');
};

const setNameHandler=(event)=>{
   setName(event.target.value)
}
const setAgeHandler=(event)=>{
    setAge(event.target.value)
}
return (
    <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"value={name}  onChange={setNameHandler}/>
        <label htmlFor="age" >Age (Years)</label>
        <input id="age" type="number"value={age} onChange={setAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
      </Card>
)
}
export default AddUser;