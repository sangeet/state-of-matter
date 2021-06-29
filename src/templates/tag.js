import React from "react"
import { Link } from "gatsby"
import slug from "slug"
import Layout from "../components/layout"
import { PostListItem } from "../components/post-list-item"

const Tag = ({ pageContext }) => {
  return (
    <Layout
      header={<HeaderContent title={pageContext.name} />}
      sidebar={<SidebarContent data={pageContext.tags} />}
      body={<BodyContent data={pageContext.posts} />}
    ></Layout>
  )
}

const HeaderContent = ({ title }) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl">{title}</h1>
    </div>
  )
}

const SidebarContent = ({ data }) => {
  return (
    <div className="flex flex-row lg:flex-col -mx-3 lg:mx-0 px-10 lg:px-0 overflow-x-auto">
      {data.map((tag, index) => (
        <Link
          to={`/tag/${slug(tag)}`}
          activeClassName="link-active"
          className="sidebar-link"
          key={index}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

const BodyContent = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <PostListItem data={item} key={index} />
      ))}
    </div>
  )
}

export default Tag
