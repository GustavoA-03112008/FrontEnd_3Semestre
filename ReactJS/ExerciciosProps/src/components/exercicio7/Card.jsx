function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "15px",
        borderRadius: "10px",
        margin: "10px"
      }}
    >
      {children}
    </div>
  );
}

export default Card;