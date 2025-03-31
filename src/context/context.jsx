import { createContext, useState } from "react";
import run from "../config/gemini";
export const Context=createContext();


const ContextProvider=(props)=>{

    const [input,setInput]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("")
    const [prevPrompt,setPrevPrompt]=useState("")
    const [showResults,setShowResults]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,SetResultData]=useState("")

    const delayPara=(index,nextWord)=>{
            setTimeout(() => {
                SetResultData((prev)=>prev+nextWord)
            }, 10*index);
    }

    const newChat=()=>{
        setLoading(false)
        setShowResults(false)

    }
     const OnSent=async (prompt)=>{
        SetResultData("")
        setLoading(true)
        setShowResults(true)
        let response="";
        if(prompt!==undefined){
            response=await run(prompt)
            setRecentPrompt(prompt);

        }
        else{
            setPrevPrompt(prev=>[...prev,input]);
            setRecentPrompt(input);
            response=await run(input);
        }
        setRecentPrompt(input)
        setPrevPrompt((prev)=>[...prev,input]);
        let response1=await run(input)
        console.log(prevPrompt)
        let responseArray=response1.split("**")
        let newResponse=""
        for(let i=0;i<responseArray.length;i++){
            //iteration of each word.
            if(i===0 ||i%2===0){
                newResponse+=responseArray[i]
            }
            else{
                newResponse+="<b>" +responseArray[i] +"</b>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")
        let newResponseArray=newResponse2.split(" ")

         for(let i=0;i<newResponseArray.length;i++){
             const nextWord=newResponseArray[i]
             delayPara(i,nextWord + " ")
         }
        //SetResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

 
    const contextValue={
        OnSent,
        prevPrompt,
        setPrevPrompt,
        recentPrompt,
        setRecentPrompt,
        showResults,
        setShowResults,
        loading,
        setLoading,
        resultData,
        SetResultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider