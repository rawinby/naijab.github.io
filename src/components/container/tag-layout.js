import React from "react"
import Layout from "./layout"

const TagLayout = props => {
  return (
    <Layout
      title={props.title}
      keywords={props.keywords}
      location={props.location}
    >
      <h1>{props.title} Posts List</h1>
      <span>อัพเดตล่าสุด: {props.lastUpdate}</span>
      <br />
      <br />
      {props.children}
    </Layout>
  )
}

export default TagLayout
