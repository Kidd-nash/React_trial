import React, { useEffect, useState } from "react";
import Crud from "./crud";
function TrialComponent() {
    const crud = new Crud();

    let aVariable = "A variable string";

    function clickMessage()  {
        console.log("click to see message");
    };

    let anArray = [
        { id: 0, series: "origin", main: "rx_78" },
        { id: 1, series: "wing", main: "gundam_wing" },
        { id: 2, series: "ibo", main: "barbatos_lupus" },
    ];

    const [arrayOfItems, setArrayOfItems] = useState([]);

    let aTrialObject = {
        id: "",
        series: ""
    };

    const [currentObject, setCurrentObject] = useState(aTrialObject);

    useEffect(() => {
        refreshData();
    }, [ ]);

    function refreshData() {
        console.log('refreshing data');
        crud.retrieve()
            .then((tasks) => {
                var taskObjects = tasks.map(function(loopItem) {
                    return { id: loopItem.id, series: loopItem.title, main: loopItem.description };
                  });

                setArrayOfItems(taskObjects);
            });
    }

    function addNew() {
        let objects = arrayOfItems;
        objects.push({
            id: currentObject.id,
            title: currentObject.title,
            upVotes: 0
        })
    }

    function itemDeletion(id) {
        crud.delete({ id: id }).then((response) => {
            refreshData();
        });
    }

    function addNewItem() {
        let maxId = Math.max(...arrayOfItems.map(item => item.id));
        if (currentObject.id !== "") {
            let temporaryObjects = arrayOfItems.map((item) => {
                return {
                    id: item.id,
                    series: item.id === currentObject.id ? currentObject.series : item.series,
                }
            });
            crud.update({
                title: currentObject.series, 
                id: currentObject.id
            });
            setArrayOfItems(temporaryObjects);
            setCurrentObject(aTrialObject);
            return;
        }
        setArrayOfItems([
            ...arrayOfItems,
            {
                id: maxId + 1,
                series: currentObject.series,
                upVotes: 0
            }
        ]);
        crud.create({
            title: currentObject.series,
            description: currentObject
        });
        setCurrentObject(aTrialObject);
    }
    function handleChange(e) {
        setCurrentObject({
            ...currentObject,
            [e.target.name]: e.target.value
        })
    }
    function editCurrentItem(id) {
        let editItems = arrayOfItems.filter((item) => {
            return item.id === id;
        });
        setCurrentObject({
            id: editItems[0].id,
            series: editItems[0].series
        })
    }

    return (
        <div>
            <p>String: {"A string"}</p>
            <p>Variable: {aVariable}</p>
            <button onClick={clickMessage}>Click</button>
            <ul>
                {
                    arrayOfItems.length === 0 
                    ? (<li>loading...</li>)
                    : arrayOfItems.map((item, index) => (
                        <li key={`name_${index}`}> 
                            series:  {item.series}
                            <button onClick={() => itemDeletion(item.id)}>Delete</button>
                            <button onClick={() => editCurrentItem(item.id)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="series" 
                    id="series_name" 
                    placeholder="insert series here"
                    value={currentObject.series} />
                <input 
                    onChange={handleChange}
                    type="hidden" 
                    name="id" 
                    id="id_series" 
                    placeholder="insert id here"
                    value={currentObject.id} />
                <button 
                    type="button" 
                    onClick={addNewItem}>
                        { currentObject.id === "" ? "ADD" : "UPDATE"}
                    </button>
            </div>
        </div>
    );
}

export default TrialComponent;