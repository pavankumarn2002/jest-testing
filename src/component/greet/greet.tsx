import React from 'react'
type GreetProps={
    name?:String
}
export default function Greet(props:GreetProps) {
  return (
    <div>Greet {props.name}</div>
  )
}
