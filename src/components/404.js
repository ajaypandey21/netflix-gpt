import React from 'react'

const ErrorPage = () => {
  return (
    <div className=" p-14 flex flex-col items-center justify-center ">
      <img cc
        src="https://ih1.redbubble.net/image.1540429389.8145/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" // Replace with an image of your choice
        alt="Funny Cat"
        className=" h-48 "
      />
      <h1 className="text-4xl text-red-500 mb-4">Oops! Error-404</h1>
      <p className="text-3xl text-gray-600 mb-8 text-center">
         {/* That page doesn't exist,<br/>
        just like your Girlfriend/Boyfriend.  */}
        {/* "The page has vanished into thin air,<br/> like my last date." */}
        {/* "Page not found,<br /> much like my soulmate in a crowded room." */}
        "Page missing, much like my romantic luck."

      </p>
    </div>
  )
}

export default ErrorPage