import React from 'react';
import { useTable, useRowSelect } from 'react-table';

import trashIcon from '../images/trash.svg';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function MailList({ emails, columns, data, handleDeleteEmails }) {

  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  return(
    <div className="mail-list">
      <table {...getTableProps()}>
        <thead>
          <tr>
            <td>
            {(Object.keys(selectedRowIds).length > 0) && 
              <div className="button" onClick={() => handleDeleteEmails(selectedFlatRows.map(
                d => d.original
              ))}>
                <img src={trashIcon} alt=""/>
              </div>
            }
            </td>
            <td className="email-count">
              Total: {data.length}
            </td>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(0, 10).map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps([
                    {
                      className: cell.column.className,
                      style: cell.column.style,
                    },
                  ])}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MailList;