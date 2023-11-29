"use client"
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const TopLoader = () => {
  return (
    <div><ProgressBar height="3px" color="#269669" options={{ showSpinner: false }} shallowRouting/></div>
  )
}

export default TopLoader