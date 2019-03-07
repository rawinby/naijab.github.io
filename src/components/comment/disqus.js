import React from "react"
import { DiscussionEmbed } from "disqus-react"

const DisqusComment = ({ id, title }) => {
  const disqusConfig = {
    identifier: id,
    title: title,
  }
  return (
    <div className="mt-3 mb-5">
      <DiscussionEmbed shortname="naijab" config={disqusConfig} />
    </div>
  )
}

export default DisqusComment
