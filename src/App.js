import React, { useState } from "react"
import Tweet from "./tweets.js"
import "./App.css"

function App() {
  const [users, setUser] = useState([
    {
      name: "Elliot Alderson", role: "Hey I plyed Role as Hero"
    },
    {
      name: "Darlene Alderson", role: "Hey I plyed Role as Elliot's sis"
    },
    {
      name: "Shela", role: "Hey I plyed Role as Elliots GF killed by vera's gang"
    },
    {
      name: "Mr Robot", role: "Hey I plyed Role as Elliot's dead father"
    },
    {
      name: "Vera", role: "Hey I plyed Role as Drug dealer"
    },
    {
      name: "Tyrell Wellick", role: "Hey I plyed Role as many roles. Hahahahahah"
    },
    {
      name: "Whiterose", role: "Hey I plyed Role as Dark Army's creater"
    },
    {
      name: "Angela Moss", role: "Hey I plyed Role as Elliot's Love"
    }
  ])
  const sayHello = () => {
    console.log('Hello React fom Console')
  }
  return (
    <div className="App">
      <h1>Hello Ract app Component</h1>
      <button onClick={sayHello}>Click Me</button>
      {users.map(user => (
        <Tweet name={user.name} role={user.role} />
      ))}
    </div>
  );
}
export default App;