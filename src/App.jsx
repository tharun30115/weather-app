const App = () => {
  return (
    <div className="container">
      <div className="search-section">
        <form action="#" className="search-form">
          <span className="material-symbols-rounded">search</span>
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            required
          />
        </form>
        <button className="location-button">
          <span class="material-symbols-outlined">arrows_input</span>
        </button>
      </div>
    </div>
  );
};

export default App;
