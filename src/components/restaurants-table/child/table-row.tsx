import { useCallback, useState } from "react";
import TableRowDetail from "./table-row-detail";

interface TableRowProps{
    info:{
        id: number,
        name: string,
        phone: string,
        email: string,
        country: string,
        alphanumeric: string
    }
}

const TableRow = ({ info }: TableRowProps) => {
    const [ isButtonClicked, setButtonClicked ] = useState(false);

    const handleClick = useCallback(() => { 
        setButtonClicked(!isButtonClicked);
    },[isButtonClicked]);

    return (
        <tbody>
            <tr>
                <td>
                    <button onClick={handleClick}>{isButtonClicked ? "a" : "b"}</button>
                </td>
                <td>{info.name}</td>
            </tr>
            {isButtonClicked && <TableRowDetail/>}
        </tbody>
    )
}



export default TableRow;