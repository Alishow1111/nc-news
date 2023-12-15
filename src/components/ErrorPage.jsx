import { useState } from 'react'


function ErrorPage({type,msg}) {

  return (
    <>
    <h2 style={{margin: 20}}>{type} Error</h2>
    <p>{msg}</p>
    </>
  )
}

export default ErrorPage

