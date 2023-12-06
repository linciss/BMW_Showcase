import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  //   const [model, setModel] = useState(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/model/${encodeURIComponent(path)}`);
  };

  return (
    <>
      <div>Hello world</div>
      <button onClick={() => handleClick('e36')}>BMW e36</button>
      <button onClick={() => handleClick('e46')}>BMW e46</button>
    </>
  );
};
