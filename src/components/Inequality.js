import "./componentsStyle.css";
import { useState } from "react";
import axios from "axios";

function Inequality(){
    const checkInequality = {
        scales:[
            {
                leftSide:["1","2"],
                rightSide:["2","3"],
                state:1
            },
            {
                leftSide:["1"],
                rightSide:["2"],
                state:0
            },
            {
                leftSide:["1"],
                rightSide:["3"],
                state:-1
            }
        ],
        hint:"подсказка",
        answer:"ответ"
    };



    const [content, setContent] = useState(checkInequality);
    const [error, setError] = useState("");
    const generateInequality = () => {
        fetchContent();
    }

    const fetchContent = async () => {
        axios.get("http://localhost:8080/generate/inequality")
        .then(response => {setContent(response.data); setError("")})
        .catch(error => {setError(error)});
    }

    const renderContent = () => {
        if(error !== ""){
            return "Произошла ошибка при генерации";
        }else{
            return renderInequality();            
        }
    }

    const renderInequality = () => {
        if(content === "Результат"){
            return "Результат";   
        }else{
            return (
                <div>
                    <div>{`Неравенство: `} {renderInequalityList(content.scales)}</div>
                    <br></br>
                    <div>{`Подсказка: ${content.hint}`}</div>
                    <br></br>
                    <div>{`Ответ:${content.answer}`}</div>
                </div>
            );
        }
    }

    const renderInequalityList = (scales) => {
        const scaleDivs = [];
        for(let i = 0; i < scales.length; i++){
            scaleDivs.push(
                <div>leftSide {scales[i].leftSide} | rightSide {scales[i].rightSide} | state {scales[i].state}</div>
            );
        }
        return scaleDivs;
    }

    return (<div>
        <div style={{paddingTop:"10%"}}>
            <div style={{width:"100%"}}>
                <button style={{display: "block",margin: "0 auto",border:"1px solid black", backgroundColor:"antiquewhite", width:"200px", height:"70px",fontSize:"24px"}} 
                    onClick={generateInequality}>
                    Генерация неравенства
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

export default Inequality;