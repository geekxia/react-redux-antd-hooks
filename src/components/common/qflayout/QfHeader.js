import React from 'react'

import { useHistory } from 'react-router-dom'

export default function QfHeader(props) {
  const history = useHistory()
  console.log('qf header history', history)
  return (
    <div className='qf-header'>
      header
    </div>
  )
}
