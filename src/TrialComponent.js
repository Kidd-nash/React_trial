function TrialComponent() {

    let aVariable = "A variable string";

    function clickMessage()  {
        console.log("click to see message");
    };

    let anArray = [
        { series: "origin", main: "rx_78" },
        { series: "wing", main: "gundam_wing" },
        { series: "ibo", main: "barbatos_lupus" },
    ];

    return (
        <div>
            <p>String: {"A string"}</p>
            <p>Variable: {aVariable}</p>
            <button onClick={clickMessage}>Click</button>
            <ul>
                {
                    anArray.map((item, index) => (
                        <li key={`name_${index}`}> 
                            series:  {item.series}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TrialComponent;