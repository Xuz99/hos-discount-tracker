import './App.css';

function App() {
  return (
<div className="App container mx-auto ">
  <section className="block">
  <form action="#" method="POST">
    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
    First name
    </label>
    <input
    type="text"
    name="first_name"
    id="first_name"
    autoComplete="given-name"
    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
    <button
    type="submit"
    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
    Save
    </button>
  </form>
  </section>
</div>
  );
}

export default App;
