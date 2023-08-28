import "./styles.scss";

function Button({ size }: { size: string }) {
  return (
    <button className={`Button ${size}`}>
      <p>버튼</p>
    </button>
  );
}

const Sasss = () => {
  return (
    <>
      <div className="sasss">
        <h1>Sasss</h1>
      </div>
      <div>
        <Button size="large" />
        <Button size="medium" />
        <Button size="small" />
      </div>
    </>
  );
};

export default Sasss;
