import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './style.scss'

let socket = null
let initStr = ''

export default props => {

  const [message, setMessage] = useState('')
  const [str, setStr] = useState('')
  const [list, setList] = useState([])

  useEffect(()=>{
    // 建立WebSocket连接
    // setSocket()
    socket = io('http://10.36.138.24:8888')
    socket.on('connect', ()=>{
      console.log('连接成功')
    })
    socket.on('client', msg=>{
      // str += '<div>'+msg+'</div>'
      // list.push({msg, id:Date.now()})
      // setList(JSON.parse(JSON.stringify(list)))
      initStr+=`<div>${msg}</div>`
      setStr(initStr)
    })
    return ()=>{
      // 关闭WebSocket连接
      socket = null
    }
  }, [])

  // 向服务端发消息
  const send = ()=> {
    socket.emit('server', message)
    setMessage('')
  }

  return (
    <div>
      <h1>聊天室</h1>

      <div className='chat'>
        <div className='panel'>
          {/*list.map(ele=>(
            <div key={ele.id}>{ele.msg}</div>
          ))*/}
          <div dangerouslySetInnerHTML={{__html: str}}>
          </div>
        </div>
        <div className='send'>
          <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button onClick={send}>发送</button>
        </div>
      </div>

    </div>
  )
}
