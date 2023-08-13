import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Header = ({ category, title }) => {
  const { currentMode } = useStateContext();
  const isDark = currentMode === "Dark";

  return (
    <div className='mb-10 p-5'>
      <p className="text-gray-400">
        {category}
      </p>
      <p className={`text-3xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
        {title}
      </p>
    </div>
  )
}

export default Header