function TrialComponent() {

    let aVariable = "A variable string";

    function clickMessage()  {
        console.log("click to see message");
    };

    return (
        <div>
            <p>String: {"A string"}</p>
            <p>Variable: {aVariable}</p>
            <button onClick={clickMessage}>Click</button>
        </div>
    );
}

export default TrialComponent;