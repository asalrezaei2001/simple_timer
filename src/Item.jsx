import { TestContext } from "./testContext"
import { useContext } from "react"


const Item =(props)=>{
    
    const context = useContext(TestContext);

    const handleDeleteItem =(e)=>{
         context.setTimeArr(context.timeArr.filter(t=>t != e.target.innerHTML))
    }
    
    
    return(
        <div className="time_item" onClick={handleDeleteItem} style={{color:context}}>
            {props.children}
        </div>
    )
}

export default Item;