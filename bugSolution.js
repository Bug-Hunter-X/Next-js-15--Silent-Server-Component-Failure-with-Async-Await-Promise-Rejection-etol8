// bugSolution.js
export default async function MyServerComponent() {
  try {
    const response = await fetch('https://api.example.com/data'); // Example API call
    if (!response.ok) {
      const message = `API request failed with status ${response.status}`;
      console.error(message); // Log the error to the console
      throw new Error(message); // Re-throw the error for better error handling
    }
    const data = await response.json();
    return <div>Data: {JSON.stringify(data)}</div>;
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data</div>; // Display an error message
  }
} 