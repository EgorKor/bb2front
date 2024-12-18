import "./componentsStyle.css";

function GenerationNavButton(props){
    const handleClick = (event) => {
        props.onClick(props.content);
    }

    return (
        <button className="generation-nav-button" onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default GenerationNavButton;