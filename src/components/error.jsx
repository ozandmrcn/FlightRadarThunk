const Error = ({ message }) => {
  return (
    <div className="error">
      <p>Could not get flight data</p>

      <p>{message}</p>
    </div>
  );
};

export default Error;
