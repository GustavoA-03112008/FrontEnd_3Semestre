import './Card.css';

const card = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default card;