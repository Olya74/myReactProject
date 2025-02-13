import React from 'react'

function Error({myError}) {
  return (
    <div className="message error">
      {myError}
      <p>Try again!</p>
    </div>
  )
}

export default Error
