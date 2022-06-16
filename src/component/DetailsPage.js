import React from 'react'
import { useParams } from 'react-router-dom'
export default function DetailsPage() {
  const params = useParams();
  return (
    <div>
      <h1>DetailsPage :</h1>
      <div>id : {params.id}</div>
    </div>
  )
}
