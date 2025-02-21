import Video from './components/video';

function App() {
  return (
    <>
    <h1>Welcome to ASAP Project</h1>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px"
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
