import React, { useState } from "react";
function TrialComponent() {

    let aVariable = "A variable string";

    function clickMessage()  {
        console.log("click to see message");
    };

    let anArray = [
        { id: 0, series: "origin", main: "rx_78" },
        { id: 1, series: "wing", main: "gundam_wing" },
        { id: 2, series: "ibo", main: "barbatos_lupus" },
    ];

    const [arrayOfItems, setArrayOfItems] = useState(anArray);

    function itemDeletion(id) {
        let afterSetItems = arrayOfItems.filter((item) => {
            return item.id != id;
        });

        setArrayOfItems(afterSetItems);
    }

    return (
        <div>
            <p>String: {"A string"}</p>
            <p>Variable: {aVariable}</p>
            <button onClick={clickMessage}>Click</button>
            <ul>
                {
                    arrayOfItems.map((item, index) => (
                        <li key={`name_${index}`}> 
                            series:  {item.series}
                            <button onClick={() => itemDeletion(item.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TrialComponent;