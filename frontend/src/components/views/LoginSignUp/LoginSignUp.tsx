import { useState } from "react";
import GuInteractLabel from "../../components/GuInteractLabel/GuInteractLabel";

// Image Icons
import FacebookIcon from '../../../assets/facebookIcon.svg';
import GoogleIcon from '../../../assets/googleIcon.svg';
import EyeIcon from '../../../assets/eyeIcon.svg';
import ClosedEyeIcon from '../../../assets/closedEyeIcon.svg';

export default function LoginSignUp() {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleValidation = () => {
        let newErrors = { email: "", password: "", confirmPassword: "" };

        if (!email) {
            newErrors.email = "Please enter a valid email address";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password) newErrors.password = "Password is required.";

        if (!isLogin) {
            if (!confirmPassword) {
                newErrors.confirmPassword = "Confirm password is required.";
            } else if (password !== confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match.";
            }
        }

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === "");
    };

    // For changing of visibility for password and confirm password
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

    const handleSubmit = () => {
        if (handleValidation()) {
            console.log("Form submitted successfully");
        }
    };

    return (
        <div id="loginSignUp" className="h-full w-full flex flex-col p-4 portrait:md:px-10 portrait:lg:px-16 md:landscape:px-8 lg:py-8 gap-[5vh] justify-center">

            {/* Mobile / Portrait View */}
            <div className="landscape:hidden">

                <div id="headContainer" className="flex flex-col">
                    <GuInteractLabel />
                    <p id="mottoLabel" className="font-sans font-light text-stone-400 text-sm md:text-2xl lg:text-[2rem] text-center">
                        Meet and connect with fellow guitarists
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    <p className="font-sans font-normal text-white text-lg md:text-[2rem] lg:text-[2.5rem] text-center">
                        {isLogin ? "Welcome Back!" : "To get started, create an account!"}
                    </p>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1 relative">
                        <p className="font-sans font-normal text-white text-sm md:text-2xl lg:text-[2rem]">Email:</p>
                        <input
                            type="text"
                            placeholder="exampleemail@address.com"
                            className={`bg-white p-1.5 md:p-2.5 lg:p-3 text-base md:text-[1.5rem] lg:text-[2.5rem] font-semibold rounded-lg 
                            ${errors.email ? "border-2 border-red-500" : ""}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-[0.6rem] absolute bottom-[-1rem] md:bottom-[-1.5rem] lg:bottom-[-2rem] md:text-sm lg:text-2xl">{errors.email}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-1 relative">
                        <p className="font-sans font-normal text-white text-sm md:text-2xl lg:text-[2rem]">Password:</p>
                        <input
                            type="password"
                            placeholder="Your password"
                            className={`bg-white p-1.5 md:p-2.5 lg:p-3 text-base md:text-[1.5rem] lg:text-[2.5rem] font-semibold rounded-lg 
                            ${errors.password ? "border-2 border-red-500" : ""}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-[0.6rem] absolute bottom-[-1rem] md:bottom-[-1.5rem] lg:bottom-[-2rem] md:text-sm lg:text-2xl">{errors.password}</p>}

                        {/* Forgot Password Option */}
                        {isLogin ?
                        // If Login-In
                        <>
                            <p className="font-sans font-normal underline text-stone-400 text-sm md:text-2xl lg:text-[2rem]">Forgot password</p>
                        </>

                        :

                        // If Sign-Up
                        <>
                        </>
                        }
                    </div>

                    {/* Confirm Password Input (only in Sign-Up) */}
                    {!isLogin && (
                        <div className="flex flex-col gap-1 relative">
                            <p className="font-sans font-normal text-white text-sm md:text-2xl lg:text-[2rem]">Confirm Password:</p>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className={`bg-white p-1.5 md:p-2.5 lg:p-3 text-base md:text-[1.5rem] lg:text-[2.5rem] font-semibold rounded-lg 
                                ${errors.confirmPassword ? "border-2 border-red-500" : ""}`}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-[0.6rem] absolute bottom-[-1rem] md:bottom-[-1.5rem] lg:bottom-[-2rem] md:text-sm lg:text-2xl">{errors.confirmPassword}</p>}
                        </div>
                    )}
                </div>

                <div id="buttonAndLoginContainer" className="flex flex-col portrait:gap-8 landscape:gap-2 landscape:mt-2 portrait:mt-8 md:portrait:mt-24 lg:portrait:mt-32">
                    <div id="buttonContainer" className="w-full flex justify-center">
                        <button
                            id="goButton"
                            className="text-white font-sans font-bold text-lg py-2 px-8 md:text-[2.5rem] md:py-2 md:px-12 lg:py-3 lg:px-16 rounded-xl md:rounded-2xl lg:text-[3rem] bg-[#e46522]"
                            onClick={handleSubmit}
                        >
                            GO
                        </button>
                    </div>

                    {isLogin ? 
                    
                    // If Log In
                    <div className="flex flex-col gap-4">

                        <p className="font-sans font-normal text-white text-sm md:text-2xl lg:text-[2rem] text-center underline">or login with</p>

                        <div className="flex gap-4 justify-center">

                            {/* Facebook Icon */}
                            <img src={FacebookIcon} alt="" id="facebookIcon" draggable="false" className="h-8 w-8 md:h-14 md:w-14 cursor-pointer select-none pointer-events-none" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} />

                            {/* Google Icon */}
                            <img src={GoogleIcon} alt="" id="googleIcon" draggable="false" className="h-8 w-8 md:h-14 md:w-14 cursor-pointer select-none pointer-events-none" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} />

                        </div>
                    </div>

                    :

                    // If Sign-Up 
                    <>
                    </>
                    }

                    <p className="font-sans font-normal text-white text-sm md:text-2xl lg:text-[2rem] text-center underline" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "or create a new account" : "or login into an existing account"}
                    </p>
                </div>
            </div>
        
            {/* Desktop / Landscape View */}
            <div className="portrait:hidden flex flex-1 gap-4 md:gap-6 lg:gap-8">

                <div id="leftContainer" className="flex flex-col w-2/5 justify-evenly">
                    <div id="headContainer" className="flex flex-col">
                        <GuInteractLabel />
                        <p id="mottoLabel" className="select-none font-sans font-light text-stone-400 text-sm landscape:text-base md:landscape:text-xl lg:landscape:text-[1.5rem] text-center">
                            Meet and connect with fellow guitarists
                        </p>
                    </div>

                    <p className="select-none cursor-pointer font-sans font-normal text-white text-sm md:text-2xl landscape:text-base md:landscape:text-lg lg:landscape:text-[1.5rem] text-center underline" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "or create a new account" : "or login into an existing account"}
                    </p>
                </div>

                <div id="rightContainer" className="flex flex-col flex-1 justify-center">

                    <div className="flex flex-col gap-2 md:landscape:gap-[3vh] lg:landscape:gap-12 h-full md:landscape:h-fit landscape:justify-center">
                        <p className="select-none font-sans font-normal text-white landscape:text-lg md:text-[2rem] lg:landscape:text-[1.5rem] text-center">
                            {isLogin ? "Welcome Back!" : "To get started, create an account!"}
                        </p>

                        {/* Email Input */}
                        <div className="flex flex-col gap-1 relative">
                            <p className="select-none font-sans font-normal text-white landscape:text-sm lg:landscape:text-[1.2rem] md:landscape:text-base">Email:</p>
                            <input
                                type="text"
                                placeholder="exampleemail@address.com"
                                className={`w-full bg-white landscape:p-1.5 md:p-2.5 landscape:text-base lg:landscape:text-[1.5rem] md:landscape:text-xl font-semibold rounded-lg 
                                ${errors.email ? "border-2 border-red-500" : ""}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="select-none text-red-500 text-[0.6rem] absolute bottom-[-0.7rem] md:bottom-[-1rem] lg:bottom-[-2rem] md:text-sm lg:landscape:text-lg">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-1 relative">
                            <p className="select-none font-sans font-normal text-white landscape:text-sm md:landscape:text-base lg:landscape:text-[1.2rem]">Password:</p>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Your password"
                                    className={`w-full bg-white landscape:p-1.5 md:p-2.5 landscape:text-base lg:landscape:text-[1.5rem] md:landscape:text-xl font-semibold rounded-lg 
                                    ${errors.password ? "border-2 border-red-500" : ""}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {passwordVisible ? 
                                
                                // If password is visible
                                <>
                                    <img src={EyeIcon} alt="" id="viewIcon" className="absolute top-1/2 -translate-y-1/2 right-5 bottom-1/2 h-3 w-3 lg:h-6 lg:w-6 cursor-pointer" draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} onClick={() => setPasswordVisible(false)}/>
                                </>

                                :

                                // If password is hidden
                                <>
                                    <img src={ClosedEyeIcon} alt="" id="viewIcon" className="absolute top-1/2 -translate-y-1/2 right-5 bottom-1/2 h-3 w-3 lg:h-6 lg:w-6 cursor-pointer" draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} onClick={() => setPasswordVisible(true)}/>
                                </>
                            
                                }
                            </div>
                            {errors.password && <p className="select-none text-red-500 text-[0.6rem] absolute bottom-[-0.7rem] md:bottom-[-1rem]] lg:bottom-[-2rem] md:text-sm lg:landscape:text-lg">{errors.password}</p>}

                            {/* Forgot Password Option */}
                            {isLogin ?
                            // If Login-In
                            <>
                                <p className="font-sans font-normal underline text-stone-400 landscape:text-sm md:text-2xl lg:text-[2rem] md:landscape:text-lg select-none cursor-pointer">Forgot password</p>
                            </>

                            :

                            // If Sign-Up
                            <>
                            </>
                            }
                        </div>

                        {/* Confirm Password Input (only in Sign-Up) */}
                        {!isLogin && (
                            <div className="flex flex-col gap-1 relative">
                                <p className="select-none font-sans font-normal text-white landscape:text-sm md:landscape:text-base lg:landscape:text-[1.2rem]">Confirm Password:</p>
                                <div className="relative">
                                    <input
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        placeholder="Confirm password"
                                        className={`w-full bg-white landscape:p-1.5 md:p-2.5 landscape:text-base lg:landscape:text-[1.5rem] md:landscape:text-xl font-semibold rounded-lg  
                                        ${errors.confirmPassword ? "border-2 border-red-500" : ""}`}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    {confirmPasswordVisible ? 
                                    
                                    // If password is visible
                                    <>
                                        <img src={EyeIcon} alt="" id="viewIcon" className="absolute top-1/2 -translate-y-1/2 right-5 bottom-1/2 h-3 w-3 lg:h-6 lg:w-6 cursor-pointer" draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} onClick={() => setConfirmPasswordVisible(false)}/>
                                    </>

                                    :

                                    // If password is hidden
                                    <>
                                        <img src={ClosedEyeIcon} alt="" id="viewIcon" className="absolute top-1/2 -translate-y-1/2 right-5 bottom-1/2 h-3 w-3 lg:h-6 lg:w-6 cursor-pointer" draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} onClick={() => setConfirmPasswordVisible(true)}/>
                                    </>
                                
                                    }
                                </div>
                                {errors.confirmPassword && <p className="select-none text-red-500 absolute bottom-[-0.7rem] md:bottom-[-1rem] lg:bottom-[-2rem] text-[0.6rem] md:text-sm lg:landscape:text-lg">{errors.confirmPassword}</p>}
                            </div>
                        )}
                    </div>

                    <div id="buttonAndLoginContainer" className={`flex flex-col gap-2 lg:landscape:gap-8 ${isLogin ? '' : 'landscape:mt-4'} lg:landscape:mt-12 portrait:mt-6`}>
                        <div id="buttonContainer" className="w-full flex justify-center">
                            <button
                                id="goButton"
                                className="select-none cursor-pointer text-white font-sans font-bold landscape:text-lg py-2 px-8 md:text-[2.5rem] md:py-2 md:px-12 lg:py-3 lg:px-16 rounded-xl md:rounded-2xl lg:text-[3rem] bg-[#e46522]"
                                onClick={handleSubmit}
                            >
                                GO
                            </button>
                        </div>

                        {isLogin ? 
                        
                        // If Log In
                        <div className="flex flex-col gap-2 lg:gap-4">

                            <p className="select-none font-sans font-normal text-white landscape:text-sm md:landscape:text-lg md:text-2xl lg:text-[2rem] text-center underline">or login with</p>

                            <div className="flex gap-4 md:gap-12 justify-center">

                                {/* Facebook Icon */}
                                <img src={FacebookIcon} alt="" id="facebookIcon" className="h-8 w-8 lg:h-13 lg:w-13 cursor-pointer" draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} />

                                {/* Google Icon */}
                                <img src={GoogleIcon} alt="" id="googleIcon" className="h-8 w-8 lg:h-12 lg:w-12 cursor-pointer" draggable="false" style={{userSelect: "none"}} onDragStart={(e) => e.preventDefault()} />

                            </div>
                        </div>

                        :

                        // If Sign-Up 
                        <>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
