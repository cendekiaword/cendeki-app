"use client"
import { getStory } from '@/actions/actions';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    // console.log(params);
    const [story, setStory] = useState({})
    async function callAction(){
        let data = await getStory(params.journey)
        setStory(data)
    }

    useEffect(() => {
        callAction()
    },[])
  return (
    <>
    <div>
      {story.fullStory}
      <br />
      ========
    </div>
    <div>
      {story.story}
      <br />
      ========
    </div>
    <div>
      {story.answer}
      <br />
      ========
    </div>
    <div>
      {story.category}
    </div>

    </>
  )
}

export default page