import { useEffect, useState } from 'react';
import Form from './components/form';
import VideoDashboard from './components/videoDashboard'; 
import './App.css';


function App() {
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);


  const fetchEntities = () => {
    fetch('http://localhost:8989/videos') 
      .then(response => response.json())
      .then(data => setEntities(data))
      .catch(error => console.error('Error fetching entities:', error));
  };

  useEffect(() => {
    fetchEntities();
  }, []);


  const handleUpdate = () => {
    fetchEntities();
    setSelectedEntity(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to ASAP Project</h1>

      <div style={{ marginBottom: '2rem' }}>
        <Form entityToUpdate={selectedEntity} onUpdate={handleUpdate} />
      </div>

      <VideoDashboard
        entities={entities}
        onEdit={setSelectedEntity}
        onDelete={handleUpdate}
      />
    </div>
  );
}

export default App;
