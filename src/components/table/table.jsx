import { Component } from "react";
import "../../App.css"




class CustomTable extends Component {
    constructor() {
        super()
        this.state = {
            emptyItems: [],

        }
    }
    clickToAddItems = () => {
        const newItem = { name: "subahan", class: "7r" }
        this.setState(prev => ({
            emptyItems: [...prev.emptyItems, newItem]
        }))
    }
    render() {
        return (
            <div className="side-bar">
                <button onClick={this.clickToAddItems} className="button">Add</button>
                <div style={{ display: "flex" }}>
                    <img />
                    <div className="side-bar1">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>


                    <div style={{ display: "flex" }}>
                        <table style={{ border: "2px solid white", height: "20px", overflow: "scroll", marginLeft:"30vw" }}>

                            {
                                this.state.emptyItems.map(each => {
                                    return (

                                        <tr key={each.id}>
                                            <th>{each.name}</th>
                                            <td>{each.class}</td>
                                        </tr>

                                    )
                                })
                            }

                        </table>
                    </div>

                </div>
            </div>
        )
    }
}
export default CustomTable


// <tr>
// <th>{eachItem.name}</th>
// <td>{eachItem.class}</td>
// </tr>