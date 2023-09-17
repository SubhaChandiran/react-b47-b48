// our first react component
// javascript function
const App = () => {
  const now = new Date();
  return (
    <div>
      <p>Hello World!, it is{ now.toString() }</p>
    </div>
  )
}


export default App;