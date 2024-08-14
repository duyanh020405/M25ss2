import React from 'react'
import siu from '../components/form/form.module.css'
export default function Bt7() {
  return (
    <div>
      <button className={siu.primary}>Primary</button>
      <button className={siu.danger}>Danger</button>
      <button className={siu.sucess}>Succes</button>
      <button className={siu.waring}>Waring</button>
    </div>
  )
}
