import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Bt1() {
  return (
    <div>
      <div>
        <p className="text-blue-600">Label</p>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Placeholder"
            className="border-2 border-blue-600 rounded p-3 pr-10"
            style={{ width: "200px" }}
          />
          <FontAwesomeIcon
            className="absolute left-44 text-gray-400 w-4"
            icon={faEye}
          />
        </div>
      </div><p>Helper</p>
    </div>
  )
}
