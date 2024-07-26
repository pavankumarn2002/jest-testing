import React, { useEffect, useState } from 'react'
import { SkillsProps } from './skills.types'
export default function Skills(props:SkillsProps) {
    const {skills}=props
    const[isLogedIn,setIsLogedIn]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLogedIn(true)
        },500)
    })
  return (
    <div className="container">
        <ul>
            {
                skills?.map((skill,index)=>{
                    return <li key={index}>{skill}</li>
                })
            }
            {
                isLogedIn?(<button>Start Learning</button>):
                (<button onClick={()=>setIsLogedIn(true)}>Login</button>)
            }
        </ul>
    </div>
  )
}
