// our first react component
// javascript function
// const App = () => {
//   const now = new Date();
//   const a = 20;
//   const b = 20;
//   console.log(now, a + b);
//   return (
//     <div>
//       <p>Hello World!, it is{now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b} 
//       </p> <br />
//     </div>

//     <div>
//       <h1>Greetings</h1>
//       <Hello/>
//     </div>
//   )
// }


// export default App;

// const Hello = () => {
//   return (
//     <div>
//       <p>hello world</p>
//     </div>
//   )
// }
// const App = () => {
//   return (

//     <div>
//       <h1>Greetings</h1>
//       <Hello/>
//       <Hello/>
//       <Hello/>
//       <Hello/>
//       <Hello/>
//       <Hello/>
//     </div>
//   )
// }



// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>hello {props.name} your age is {props.age}</p>
//     </div>
//   )
// }

// const App = () => {
//   const appStyle = {
//     color: 'white',
//     background: 'red'
//   }
//   return (
//     <div>
//       <h1 style={appStyle}>Greetings</h1>
//       <Hello name='Nimcy'age='19'/>
//       <Hello name='subhash'age='26'/>
//     </div>
//   )
// }




import './App.css';
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>hello {props.name} your age is {props.age}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Nimcy'age='19'/>
      <Hello name='subhash'age='26'/>
    </div>
  )
}
export default App;