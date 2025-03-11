import Video from './components/video';
import Form from './components/form';

function App() {
  return (
    <>
    <h1>Welcome to ASAP Project</h1>
    <div style={{ marginBottom: '2rem' }}>
      <Form />
    </div>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem",
    }}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
    </>
  );
}

export default App;
