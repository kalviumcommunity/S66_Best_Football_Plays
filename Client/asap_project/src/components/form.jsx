import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Form = ({ entityToUpdate, onUpdate }) => {
  const [title, setTitle] = useState(entityToUpdate ? entityToUpdate.title : '');
  const [description, setDescription] = useState(entityToUpdate ? entityToUpdate.description : '');
  const [url, setUrl] = useState(entityToUpdate ? entityToUpdate.url : '');

  useEffect(() => {
    if (entityToUpdate) {
      setTitle(entityToUpdate.title);
      setDescription(entityToUpdate.description);
      setUrl(entityToUpdate.url);
    }
  }, [entityToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntity = { title, description, url };

    fetch(`http://localhost:8989/entities${entityToUpdate ? `/${entityToUpdate.id}` : ''}`, {
      method: entityToUpdate ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        onUpdate(); // refresh the list in parent
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDelete = () => {
    if (entityToUpdate) {
      fetch(`http://localhost:8989/entities/${entityToUpdate.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          console.log('Entity deleted');
          onUpdate();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">{entityToUpdate ? 'Update Entity' : 'Add Entity'}</button>
      {entityToUpdate && (
        <button type="button" onClick={handleDelete}>
          Delete Entity
        </button>
      )}
    </form>
  );
};


Form.propTypes = {
  entityToUpdate: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

export default Form;
