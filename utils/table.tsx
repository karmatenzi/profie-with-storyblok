export function TableComponent({ tableData }: any) {
  return (
    <table>
      <thead>
        <tr>
          {tableData?.thead[0]?.value?.map((row: any, rowIndex: any) =>
            Object?.values(row)?.map((cell: any, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {tableData?.tbody[0]?.body[0]?.value.map((row: any, rowIndex: any) =>
          Object?.values(row)?.map((cell: any, cellIndex) => (
            <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
          ))
        )}
      </tbody>
    </table>
  );
}
