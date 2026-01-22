import "./Title.css";

function Title({ text = "Laugh＆Music" }) {
  return (
    <div className="LaughMusic-title">
      {text}
    </div>
  );
}

export default Title;
