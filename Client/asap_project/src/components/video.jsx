import PropTypes from 'prop-types';

const Video = ({ entity, onEdit, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8989/entities/${entity.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Deleted');
        onDelete();
      })
      .catch((error) => console.error('Error deleting:', error));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{entity.title}</h3>
      <p>{entity.description}</p>
      <a href={entity.url} target="_blank" rel="noopener noreferrer">
        Watch Video
      </a>
      <br />
      <button onClick={onEdit} style={{ marginRight: '0.5rem' }}>
        Edit
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


Video.propTypes = {
  entity: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Video;
