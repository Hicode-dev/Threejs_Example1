import React,{useState,useEffect} from 'react'
import { useSnapshot } from 'valtio'
import { AnimatePresence, motion } from 'framer-motion'
// import config from '../config/config '
import state from '../store'
// import {downlaod} from '../assets'
// import {downlaodCanvasToImage , reader} from '../config/config/helpers'
import { EditorTabs,FilterTabs,DecalTypes } from '../config/config/constants'
import { fadeAnimation,slideAnimation } from '../config/config/motion'
import { AIPicker,ColorPicker,Tabs,FilePicker, CustomButton, } from "../component"

const Costomizer = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div  className='absolute top-0 left-0 z-10 ' {...slideAnimation('left')} >
          <div className="flex items-center min-h-screen">
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab)=>(
                <Tabs
                key={tab.name}
                tab={tab}
                handleClick = {()=>{}}
                />
              ))}

            </div>
          </div>
        </motion.div>
        <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}> 
              <CustomButton 
              type='filled'
              title='Go Back Chief'
              handleClick={()=>{state.intro = true}}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm' />
        </motion.div>

        <motion.div className='filtertabs-container ' {...slideAnimation('uo') }>
        {FilterTabs.map((tab)=>(
                <Tabs
                key={tab.name}
                tab={tab}
                handleClick = {()=>{}}
                isFilterTab
                IsActiveTab = ""
                />
              ))}
        </motion.div>
        </>
    )

      }
    </AnimatePresence>
  )
}

export default Costomizer