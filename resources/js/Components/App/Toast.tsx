import { useEffect, useState } from "react"


interface TypePropsToast{
    message:string | null,
    isShow?:boolean,
    setIsShow:()=>void,
}
export default function Toast({message,isShow=true,setIsShow}:TypePropsToast) {
useEffect(()=>{
const time= setTimeout(() => {
    setIsShow();
}, 5000);
return ()=> clearTimeout(time);
},[isShow])

  return (
    <div
    role="dialog"
     className={`fixed top-10 right-5 z-50
         bg-green-800 text-white border-green-500
          text-center font-semibold max-w-sm w-full py-3 text-sm border-1 rounded-md
          transition-all duration-300
     ${isShow ?"opacity-100 pointer-events-auto scale-105" :"opacity-0 pointer-events-none scale-95 "}
           `}>
        {message}

    </div>
  )
}
