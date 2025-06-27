import { useState, useEffect } from "react"

export const Header = () => {

    const[darkMode, setDarkMode] = useState(false)
    
    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        if(darkMode) {
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        } 
    }, [darkMode])

return (
<header className="bg-Very-Pale-Blue-Top dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[470px] xl:mb-[200px] sm:mb-[990px]">
    
    <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue-Top text-2xl font-bold mb-1">Social Media Dashboard</h1>
    
    <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue-Text font-bold mb-6">Total Followers: 23,004</p>
     {/* estilos de la rayita en modo ligth y dark: */}
    
    <hr className="bg-Dark-Grayish-Blue dark:bg-Desaturated-Blue-Text h-[1.2px] mb-[19px]" />

    <div className="flex justify-between">
        <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue-Text font-bold">Dark Mode</p>
        <label htmlFor="darkmode" className="border relative bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[2.1px]">
            <input onClick={handleClick} id="darkmode" type="checkbox" className="peer sr-only"/> {/* sr-only oculta el checkbox pero sigue hay, cotejandose y descotejandose*/}
            
            <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0">
            </div>
            
            <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all peer-checked:bg-Very-Dark-Blue"></div>
            {/* se coloco tambien transition-all para que no fuera brusco el movimiento de un lado al otros del boton para checkbox*/}
        </label>
    </div>
</header>
)
}
