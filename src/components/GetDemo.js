import React from 'react'
import { Button } from './ui/button'

const GetDemo = () => {
  return (
    <div className='bg-light-blue flex flex-col gap-5 justify-center items-center py-[35px] text-center'>
        <h1 className='font-semibold leading-[76px] text-[64px] mb-4'>Pellentesque suscipit  <br />fringilla libero eu.</h1>
        <Button>Get a Demo</Button>
    </div>
  )
}

export default GetDemo