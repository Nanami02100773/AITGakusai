import './Title.css';

function Title({ text = "きらきらPAKE"}) {
  return (
    <div className="kirakiraparc-title">{text}</div>
  );
}

export default Title;
