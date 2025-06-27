import React from 'react'

import FacebookLogo from '../assets/images/icon-facebook.svg'
import TwitterLogo from '../assets/images/icon-twitter.svg'
import InstagramLogo from '../assets/images/icon-instagram.svg'
import YoutubeLogo from '../assets/images/icon-youtube.svg'

{/*importar imagenes flecha arriba y abajo para today segudires:*/}

import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

const networkLogos = {
  Facebook: FacebookLogo,
  Twitter: TwitterLogo,
  Instagram: InstagramLogo,
  YouTube: YoutubeLogo
}

const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram-Gradient',
  YouTube: 'bg-YouTube'
}

export const OverviewCard = ({user, audienceType, audience, today, network, isUp}) => {
    return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[220px] mb-4 mx-auto rounded-[5px] overflow-hidden text-center font-inter dark:bg-Dark-Desaturated-Blue-Card hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
        
        <div className={`${networkColors[network]} h-1 mb-8`}></div>

          {/* Este div inicia el tamaño de la tarjeta:*/}

        <div className='flex items-center place-content-center gap-2 mb-[6px]'>
          <img src={networkLogos[network]} alt={`Logo ${network}`} />
          <p className='text-xs text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue-Text'>{user}</p>
        </div>
       
        <p className='text-[56px] font-bold text-Very-Dark-Blue-Top dark:text-White-Text'>{audience}</p>
        
        <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6 dark:text-Desaturated-Blue-Text'>{audienceType}</p>
        

        {/* Creamos un div para el Today que muestra si esta bajando o subiendo los seguidores*/}

        <div className='flex items-center place-content-center gap-1'>
          <img src={isUp ? iconUp : iconDown} alt="icono arriba" /> {/* lo escrito en src es como un if*/}
          <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{today} Today</p>
        </div>

    </article>
  )
}

{/* Para subir las card to header, change in OverviewConteiner*/}

{/* Inicio del overviewTodayContainer*/}


export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
    return (
        
        <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] dark:bg-Dark-Desaturated-Blue-Card hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
          
          <div className='flex items-center justify-between'>
            <p className='font-bold text-Dark-Grayish-Blue dark:text-Desaturated-Blue-Text'>{statsType}</p>
            <img src={networkLogos[network]} alt={`Logo ${network}`} />
          </div>  
          
          <div className='flex items-center justify-between'>
            <p className='text-[42px] font-bold text-Very-Dark-Blue-Top dark:text-White-Text'>{stats}</p>

            <div className='flex items-center place-content-center gap-1'>
              <img src={isUp ? iconUp : iconDown} alt="icono arriba" /> {/* lo escrito en src es como un if*/}
              <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage}%</p>
            </div>
          </div> 
        </article>
    )
}