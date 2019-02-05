import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText="Hello Gatsby! from a Header Component" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)