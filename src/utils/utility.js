export const postListFromTag = (posts, key) => {
  return posts.filter(({ node }) =>
    node.frontmatter.tags.some(tag => tag === key)
  )
}
