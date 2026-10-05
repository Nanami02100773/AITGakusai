import "./Title.css";

function Title({ text = "操作方法" }) {
  return (
    <div className="Title-wrapper">
      <div className="Title">
        {text}
      </div>
    </div>
  );
}

export default Title;