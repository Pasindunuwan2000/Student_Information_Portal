import logo from './logo.svg';
import './App.css';

function App() {
  const [currentFontSize, setCurrentFontSize] = useState("16px");

const handleFontSizeChange = (selectedSize) => {
  switch (selectedSize) {
    case "small":
      setCurrentFontSize("16px");
      break;
    case "medium":
      setCurrentFontSize("20px");
      break;
    case "large":
      setCurrentFontSize("24px");
      break;
    default:
      setCurrentFontSize("16px");
  }
};

return (
  <>
    <div style={{ fontSize: currentFontSize }}>
      <div>
        <h3>Adjust Font Size</h3>
        <button onClick={() => handleFontSizeChange("small")}>Small</button>
        <button onClick={() => handleFontSizeChange("medium")}>Medium</button>
        <button onClick={() => handleFontSizeChange("large")}>Large</button>
      </div>
      <div>
        <TableCreate students={students} />
      </div>
    </div>
  </>
);
}

export default App;
