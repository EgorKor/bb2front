import "./componentsStyle.css";
import { useState } from "react";
import axios from "axios";


function Equation(){
    const checkEquation = {
        equation: "2x + 6 = 10",
        var: "x",
        hint: "подсказка",
        answer: "2"
    }
    const [content, setContent] = useState(checkEquation);
    const [error, setError] = useState("");
    const generationEquation = async () => {
        await fetchContent();
    }

    const renderContent = () => {
        if(error !== ""){
            return "Произошла ошибка при генерации";
        }else{
            return renderEquation();            
        }
    }

    const renderEquation = () => {
        if(content === "Результат"){
            return "Результат";   
        }else{
            return (
                <div>
                    <div>{`Уравнение: ${content.equation}`}</div>
                    <br></br>
                    <div>{`Найти переменную: ${content.var}`}</div>
                    <br></br>
                    <div>{`Подсказка: ${content.hint}`}</div>
                    <br></br>
                    <div>{`Ответ:${content.answer}`}</div>
                </div>
            );
        }
    }

    const fetchContent = async () => {
        axios.get("http://localhost:8080/generate/equation")
        .then(response => {setContent(response.data.equation); setError("")})
        .catch(error => {setError("Ошибка")})
    }

    return (<div>
        <div style={{paddingTop:"10%"}}>
            <div style={{width:"100%"}}>
                <button style={{display: "block",margin: "0 auto",border:"1px solid black", backgroundColor:"antiquewhite", width:"200px", height:"70px",fontSize:"24px"}} 
                    onClick={generationEquation}>
                    Генерация уравнения
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

export default Equation;