import "./componentsStyle.css";
import GenerationNavButton from "./GenerationNavButton";

function GenerationNav(props){
    return (
        <div className="generation-nav">
            <div className="generation-nav-button-div">
                <GenerationNavButton 
                onClick={props.switchBody} 
                content="Equation"
                text="Сгенерировать уравнение"
                />
            </div>
            <div className="generation-nav-button-div">
                <GenerationNavButton 
                onClick={props.switchBody} 
                content="Inequality"
                text="Сгенерировать неравенство"
                />
            </div>
            <div className="generation-nav-button-div">
                <GenerationNavButton 
                onClick={props.switchBody} 
                content="Pattern"
                text="Сгенерировать последовательность"
                />                   
            </div>
        </div>
    );
}

export default GenerationNav;