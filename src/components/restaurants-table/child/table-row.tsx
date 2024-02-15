import { useCallback, useState } from "react";
import TableRowDetail from "./table-row-detail";
import { Restaurant } from "../../../entity/restaurant/restaurant";

interface TableRowProps{
    restaurant: Restaurant
}

const TableRow = ({ restaurant }: TableRowProps) => {
    const [ isButtonClicked, setButtonClicked ] = useState(false);

    const handleClick = useCallback(() => { 
        setButtonClicked(!isButtonClicked);
    },[isButtonClicked]);

    return (
        <tbody>
            <tr>
                <td>{restaurant.name}</td>
                <td>{restaurant.address}</td>
                <td>{restaurant.startTime}</td>
                <td>{restaurant.endTime}</td>
                <td>{restaurant.day}</td>
                <td>{restaurant.food ? "yes" : "no"}</td>
                <td>{restaurant.drink ? "yes" : "no"}</td>
                <td>
                    <a href={restaurant.link} target="_blank">click</a>
                </td>
                <td><button onClick={handleClick}>Click</button></td>
            </tr>
            {isButtonClicked && <TableRowDetail detail={restaurant.detail}/>}
        </tbody>
    )
}



export default TableRow;