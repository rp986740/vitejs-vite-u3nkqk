import AutoComplete from './AutoComplete';

function App() {
  return (
    <div className='relative h-screen'>
      <div className="px-10 absolute bottom-2 w-full">
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
            "Total Calls Handled",
            "Average Handling Time",
            "Service Level",
            "First Call Resolution Rate",
            "Abandoned Call Rate",
            "Customer Satisfaction Score",
            "Agent Utilization",
            "Occupancy Rate",
            "Agent Name",
            "Customer ID",
            "Call Type",
            "Time of Day",
            "Date",
            "Department",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
