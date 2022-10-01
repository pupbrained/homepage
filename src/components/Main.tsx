import { motion } from "framer-motion"
import { useState } from "react"
import Bookmarks from "./Bookmarks"
import Clock from "./Clock"
import Todo from "./Todo"

export default function Main() {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className='h-[500px] w-[800px] bg-ctp-base rounded-2xl flex select-none'
    >
      <Clock />
      {!active ? (
        <Bookmarks active={active} setActive={setActive} />
      ) : (
        <Todo active={active} setActive={setActive} />
      )}
    </motion.div>
  )
}
