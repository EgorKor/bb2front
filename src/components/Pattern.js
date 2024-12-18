import "./componentsStyle.css";
import { useState } from "react";
import axios from "axios";


function Pattern(){
    const checkPattern = {
        pattern: "1,3,?,7",
        hint: "подсказка",
        answer: "5"
    };


    const [content, setContent] = useState(checkPattern);
    const [error, setError] = useState(""); 


    const generateInequality = async () => {
        await fetchContent();
    }

    

    const fetchContent = async () => {
        axios.get("http://localhost:8080/generate/pattern")
        .then(response => {setContent(response.data); setError("")})
        .catch(error => {setError(error)});
    }

    const renderContent = () => {
        if(error !== ""){
            return "Произошла ошибка при генерации";
        }else{
            return renderPattern();            
        }
    }

    const renderPattern = () => {
        if(content === "Результат"){
            return "Результат";   
        }else{
            return (
                <div>
                    <div>{`Последовательность: ${content.pattern}`}</div>
                    <br></br>
                    <div>{`Подсказка: ${content.hint}`}</div>
                    <br></br>
                    <div>{`Ответ:${content.answer}`}</div>
                </div>
            );
        }
    }


    return (<div>
        <div style={{paddingTop:"10%"}}>
            <div style={{width:"100%"}}>
                <button style={{display: "block",margin: "0 auto",border:"1px solid black", backgroundColor:"antiquewhite", width:"fit-content", height:"70px",fontSize:"24px"}} 
                    onClick={generateInequality}>
                    Генерация последовательности
                </button>
            </div>
            <div style={{width:"100%", marginTop:"50px", textAlign:"center"}}>
                <div placeholder="результат" style={{display:"block", margin: "0 auto",fontSize:"24px"}}>
                    {renderContent()}   
                </div>
            </div>

        </div>
    </div>);
}

export default Pattern;