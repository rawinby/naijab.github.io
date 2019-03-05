import React from "react"
import { Link } from "gatsby"
import Layout from "../components/container/layout"

const NotFoundPage = props => {
  return (
    <Layout title="404 Not Found" location={props.location} isPostDetail>
      <h1>404 Not Found</h1>
      <p>
        ขออภัยไม่พบหน้าที่ต้องการ :( <br /> <Link to="/">ลองค้นหาบทความ</Link>
      </p>
    </Layout>
  )
}

export default NotFoundPage
