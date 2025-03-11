import { useEffect, useState } from 'react';
import Video from './components/video';
import Form from './components/form';

function App() {
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);

  // Fetch entities from the server
  const fetchEntities = () => {
    fetch('http://localhost:8989/entities')
      .then(response => response.json())
      .then(data => setEntities(data))
      .catch(error => console.error('Error fetching entities:', error));
  };

  // Load entities when component mounts
  useEffect(() => {
    fetchEntities();
  }, []);

  // Called after adding/updating/deleting an entity
  const handleUpdate = () => {
    fetchEntities(); // Refresh the list of videos
    setSelectedEntity(null); // Clear selected entity after update
  };

  return (
    <>
      <h1>Welcome to ASAP Project</h1>

      <div style={{ marginBottom: '2rem' }}>
        <Form entityToUpdate={selectedEntity} onUpdate={handleUpdate} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}
      >
        {entities.map((entity) => (
          <Video
            key={entity.id}
            entity={entity}
            onEdit={() => setSelectedEntity(entity)} // Pass entity to form for editing
            onDelete={handleUpdate} // Refresh list after deletion
          />
        ))}
      </div>
    </>
  );
}

export default App;
