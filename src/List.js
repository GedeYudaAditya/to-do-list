import React from 'react';

function deleteItem(index){
    const button = document.getElementById(index);
    const row = document.getElementById(index);

    button.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            alert("you done it");
        }
    });

}

function List(props){

    return (
        <div className="dcf-overflow-x-auto" tabindex="0">
        <table className="table-list" border={1}>
            {/* <caption>List</caption> */}
            <thead>
                <tr>
                    <th className="dcf-txt-center">What to do</th>
                    <th className="dcf-txt-center" scope="col">Date Create</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>       
                    {
                        props.items.map((item, index) => {
                            if(index === 0){
                                return '';
                            }
                            return(
                            <tr id={index} key={index}>
                                <td>{item.list}</td>
                                <td>{item.day}<br></br>{item.time}</td>
                                <td>
                                    <input type={"checkbox"} className={"del-button"} id={index} onClick={() => {deleteItem(index)}}></input>
                                </td>
                            </tr>
                            )
                        })
                    }
            </tbody>
        </table></div>
        
    )
}

export default List;