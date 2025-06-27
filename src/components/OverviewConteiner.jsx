import React from "react";
import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from "./OverviewCard";

const convertirnumeroTok = (number) => {
    if(number > 10000){
        number = number / 1000
        return `${number}k` 
    }
    return number
  }

  {/* convertirnumeroTok se coloca fuera de los contenedores para que se puedan usar en ambos contenedores, para este caso OverviewConteiner y OverviewTodayConteiner. si no tenemos que poner dentro de cada uno ese codigo.*/}

export const OverviewConteiner = () => {
    return (
        <section className='max-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[200px] left-0 right-0 mx-auto'> 
            {
                data.overview.map(object => 
                    <OverviewCard key={object.id}
                    user={object.user}
                    audienceType={object.audienceType}
                    audience={convertirnumeroTok(object.audience)}
                    today={object.today}
                    network={object.network}
                    isUp={object.isUp}
                     />
                )
            }
        </section>
    )
}

{/* En el selection, the card estan mas arriba en el header. usamos absolute que pasa de objeto de bloque a en linea. 
    Cuando usamos left-0 y rigth-0 se centran las card por lo que no usamos mx-auto, que no funcionaria por ser absolute.
    En este caso, funciona porque los articulos en el OverviewCard ya tienen el mx-auto. Que se centre el padre o los hijos 
    dependeran del programador.
*/}

    export const OverviewTodayConteiner= () => {
        return(
            <section> 
                <h2 className='text-Dark-Grayish-Blue dark:text-Very-Pale-Blue-Top text-2xl font-bold mb-[27px] ml-8 pt-5'>Overview-Today</h2>      
                <div className='flex flex-wrap'>
                    {data['overview-today'].map(object => 
                        <OverviewTodayCard key={object.id}
                        statsType={object.statsType}
                        stats={convertirnumeroTok(object.stats)}
                        network={object.network}
                        porcentage={object.porcentage}
                        isUp={object.isUp}
                        />   
                    )}
                </div> 
            </section>
        )
    }