interface TableRowDetailProps{
    detail: string
}

const TableRowDetail = ({detail}: TableRowDetailProps) => {
    return (
        <tr>
            <td>{detail}</td>
        </tr>
    )
}

export default TableRowDetail;