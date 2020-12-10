import React from "react";
import ReactDOM from "react-dom";


import "./style.css";

function MainTitle(props){


    return(<div id="top">
             <h1 class='rem'>{props.title}</h1>
              <p  class='rem'>The best place to make groceries</p>
           </div>
           );



}


function OptionsHeader(props){

    return <div class='cho'>
        <h2>Choose Options</h2>
        <p>New Only  <input type="checkbox" id="coding" name="interest" value="coding"/> </p>


       <p/>
Select Type &nbsp;
<select>
    <option value ="All">All</option>
    <option value ={props.items[0]}>{props.items[0]}</option>
    <option value ={props.items[1]}>{props.items[1]}</option>
    <option value ={props.items[2]}>{props.items[2]}</option>
</select>

 </div>


}

function ObjectList(props){
    const $a=props.data[0][1];
    const $b=props.data[1][1];
    const $c=props.data[2][1];
    return <div id='remo'>
    <h2>{props.title}</h2>
        <ul class='rem'>
        <table>
            <tr>
                <th>Item</th>
                <th>Color</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
            <tr>
                <td>{props.data[0][0]}</td>
                <td>{props.data[0][1]}</td>
                <td>{props.data[0][2]}</td>
                <td><button style={{background:$a}}>Buy</button></td>
            </tr>
            <br/>
            <tr>
                <td>{props.data[1][0]}</td>
                <td>{props.data[1][1]}</td>
                <td>{props.data[1][2]}</td>
                <td><button style={{background:$b}}>Buy</button></td>
            </tr>
            <br/>
            <tr>
                <td>{props.data[2][0]}</td>
                <td>{props.data[2][1]}</td>
                <td>{props.data[2][2]}</td>
                <td><button style={{background:$c}}>Buy</button></td>
            </tr>

        </table>
        </ul></div>

}

function App(props){

return<div>
<MainTitle title = "Welcome to the Market"/>
<OptionsHeader items = {["Fruits","Snacks", "Beverages"]}/>
<ObjectList title = "Fruits" data= {[["Banana", "Yellow", "$1"],
 ["Apple", "Red", "$2"], ["Grapes", "Purple", "$2"] ]}/>
 <ObjectList title = "Snacks" data= {[["Chocolate", "Brown", "$5"],
 ["Doritos", "Red", "$1"], ["Mentos", "White", "$2"] ]}/>
 <ObjectList title = "Beverages" data= {[["Soda", "Black", "$2"],
 ["Beer", "Yellow", "$3"], ["Coffee", "Brown", "$1"] ]}/>

</div>
}

ReactDOM.render(

    <App/>,
    document.getElementById("root")
)