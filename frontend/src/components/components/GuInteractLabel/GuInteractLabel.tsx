// Imported Components
import PickIcon from '../../../assets/pickIcon.svg'

export default function GuInteractLabel(){
    return(
        <div id="guinteractLabel">
            <div className="flex items-center justify-center">

                <p className="select-none text-white font-semibold font-sans text-[2rem] md:text-[4rem] lg:text-[5rem] landscape:text-[1.75rem] md:landscape:text-[3rem] lg:landscape:text-[4rem]">GuInter</p>

                <img src={PickIcon} alt="" className='h-8 w-8 md:h-16 md:w-16 lg:h-20 lg:w-20 landscape:h-6 landscape:w-6 md:landscape:h-12 md:landscape:w-12 lg:landscape:h-15 lg:landscape:w-15'  draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()}/>

                <p className="select-none text-white font-semibold font-sans text-[2rem] md:text-[4rem] lg:text-[5rem] landscape:text-[1.75rem] md:landscape:text-[3rem] lg:landscape:text-[4rem]">ct</p>
                
            </div>
        </div>
    );
}