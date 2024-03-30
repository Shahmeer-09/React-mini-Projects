import Cell from "./Cell";
const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => (
        <Cell value={JSON.stringify(value)} key={key} />
        
      ))}
    </tr>
  );
};

export default Row;
