import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  
  return (
    <div>
      {!data.members ? (
        <p>Loading...</p> 
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  );
}
export default App;