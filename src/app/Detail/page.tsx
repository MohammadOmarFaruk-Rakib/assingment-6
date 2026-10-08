import React from 'react'

const page=async({params})=> {
  const {id} = await params

  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)
  const SingleData = await res.json()

  return (
    <div>
        {SingleData.map}
    </div>
  )
}
export default page
