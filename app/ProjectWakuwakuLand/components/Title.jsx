import './Title.css';

function Title({ text = "きらきらPARC"}) {
  return (
    <div className="kirakiraparc-title">{text}</div>
  );
}

export default Title;
