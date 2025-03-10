import { useEffect, useState } from "react";

// Imported Components
import GuInteractLabel from "../../components/GuInteractLabel/GuInteractLabel";

export default function SelectAccountType(){

    const [selectedOption, setSelectedOption] = useState('');
    const [selectMyself, setSelectedMyself] = useState(false);
    const [selectMyPage, setSelectedMyPage] = useState(false);

    useEffect(()=> {
        switch(selectedOption){

            case 'myself':
                setSelectedMyself(true);
                setSelectedMyPage(false);
                break;

            case'myPage':
                setSelectedMyself(false);
                setSelectedMyPage(true);
                break;

        }
    }, [selectedOption]);

    return(
        <div id="selectAccountType" className="h-full w-full flex flex-col p-4 portrait:md:px-10 portrait:lg:px-16 md:landscape:px-8 lg:py-8 gap-[5vh] justify-center">

            <div className="flex flex-col gap-6">
                <div id="headContainer" className="flex flex-col">
                    <GuInteractLabel />
                    <p id="mottoLabel" className="font-sans font-light text-stone-400 text-sm md:text-2xl lg:text-[2rem] text-center">Meet and connect with fellow guitarists</p>
                </div>

                <div id="createAccountLabel" className="flex flex-col gap-2">
                    <hr id="dividerLine" className="h-1 w-full text-white"/>
                    <p id="createAccountText" className="font-sans font-semibold text-white text-lg md:text-[2rem] lg:text-[2rem]">Create a new account for...</p>
                    <hr id="dividerLine" className="h-1 w-full text-white"/>
                </div>
            </div>

            <div className="h-5/6 flex flex-col items-center justify-evenly">

                {/* Myself Choice */}   
                <div id="myselfChoice" className={`p-2 md:p-4 gap-2 md:gap-4 flex w-12/13 h-1/3 ${selectMyself ? 'border-3' : 'border'} ${selectMyself ? 'border-[#e46522]' : 'border-white'} rounded-2xl shadow-2xl hover:scale-[1.05]`} onClick={() => setSelectedOption('myself')}>
                
                    <div id="myselfLabel" className="h-full w-1/3 content-center">
                        <p className="text-center font-sans font-bold text-white text-lg md:text-[2rem] lg:text-[2rem]">Myself</p>
                    </div>

                    <div id="descriptionContainer" className="flex-1 content-center">
                        <p className="text-center font-sans font-semibold text-stone-400 text-sm md:text-2xl lg:text-[1.5rem]">An individual and personalized account just for me</p>
                    </div>
                </div>

                {/* My Page Choice */}
                <div id="myPageChoice" className={`p-2 md:p-4 gap-2 md:gap-4 flex w-12/13 h-1/3 ${selectMyPage ? 'border-3' : 'border'} ${selectMyPage ? 'border-[#e46522]' : 'border-white'} rounded-2xl shadow-2xl hover:scale-[1.05]`} onClick={() => setSelectedOption('myPage')}>
                
                    <div id="myselfLabel" className="h-full w-1/3 content-center">
                        <p className="text-center font-sans font-bold text-white text-lg md:text-[2rem] lg:text-[2rem]">My Page</p>
                    </div>

                    <div id="descriptionContainer" className="flex-1 content-center">
                        <p className="text-center font-sans font-semibold text-stone-400 text-sm md:text-2xl lg:text-[1.5rem]">A page for our group to represent, promote our music, identity, and/or products and services</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <hr id="dividerLine" className="h-1 w-full text-white"/>

                <div id="buttonContainer" className="w-full flex justify-center pt-4">
                    <button
                        id="goButton"
                        className="text-white font-sans font-bold text-lg py-2 px-8 md:text-[2.5rem] md:py-2 md:px-12 lg:py-3 lg:px-16 rounded-xl md:rounded-2xl lg:text-[3rem] bg-[#e46522]"
                        >
                        GO
                    </button>
                </div>
            </div>
        </div>
    );
}