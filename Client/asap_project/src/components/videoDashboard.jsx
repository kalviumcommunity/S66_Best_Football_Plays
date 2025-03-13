import PropTypes from 'prop-types';
import Video from './video'; // Assuming your Video component is in the same folder

const VideoDashboard = ({ entities, onEdit, onDelete }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
      }}
    >
      {entities.map((entity) => (
        <Video
          key={entity._id || entity.id}
          entity={entity}
          onEdit={() => onEdit(entity)}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

// ✅ Adding PropTypes validation:
VideoDashboard.propTypes = {
  entities: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default VideoDashboard;
