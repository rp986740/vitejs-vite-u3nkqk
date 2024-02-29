import AutoComplete from './AutoComplete';

function App() {
  return (
    <>
      <div className="px-10">
        <label
          htmlFor="HeadlineAct"
          className="block text-base font-medium text-gray-900"
        >
          Headliner
        </label>
        <AutoComplete
          suggestions={[
            'New York',
            'Los Angeles',
            'Chicago',
            'Houston',
            'Phoenix',
            'Philadelphia',
            'San Antonio',
            'San Diego',
            'Dallas',
            'San Jose',
          ]}
        />
      </div>
    </>
  );
}

export default App;
