import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import OverlayWrapper from '../OvelayWrapper'

const DeleteCard = ({toggle, setToggle}) => {
  return (
    <OverlayWrapper toggle={toggle}>
        <div className="pt-4 space-y-5">
          <div className="flex justify-between items-center px-4">
            <div />
            <p className="text-2xl font-medium text-[#001428] font-clash">
              Remove Card
            </p>
            <div className="flex items-center justify-center bg-grey5 h-8 w-8 rounded-full cursor-pointer" onClick = {()=>{setToggle(false)}}>
              <XMarkIcon className="h-5 text-[#1C1B1F]" />
            </div>
          </div>

          <p className="w-80 text-base leading-snug text-center text-gray-600 mx-auto">
            Your Card will also be removed from funding options on the app.
          </p>

          <div className="bg-neutral100 p-4">
          <button
          type="submit"
          className="flex items-center px-4 py-2.5 bg-red500 text-white font-clash font-semibold rounded-full gap-3 w-full justify-center"
        >
          
          Remove
        </button>

          </div>
        </div>
      </OverlayWrapper>
  )
}

export default DeleteCard