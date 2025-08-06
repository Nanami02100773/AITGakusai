import './DetailTable.css';
function DetailTable({ details = [] }) {
 
  return (
    <div className="detail-table">
      {details.map((d, i) => (
        <div className="detail-row" key={i}>
          <span className="detail-label">{d.label}</span>
          <span className="detail-value">{d.value}</span>
        </div>
      ))}
    </div>
  );
}

export default DetailTable;
