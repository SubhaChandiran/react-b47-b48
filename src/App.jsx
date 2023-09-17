// our first react component
// javascript function
const App = () => {
  const now = new Date();
  const a = 20;
  const b = 20;
  console.log(now, a + b);
  return (
    <div>
      <p>Hello World!, it is{now.toString()}</p>
      <p>
        {a} plus {b} is {a+b} 
      </p> <br />
    </div>
  )
}


export default App;