const { paginate } = require('gatsby-awesome-pagination')
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash");
const path = require("path")
const pinyin = require("chinese-to-pinyin")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    const single = new RegExp('^/(\\w+)/$')
    const re = new RegExp('/(\\w+)/(\\w+)?/?(\\w+)?/?')
    
    let category;
    if(!single.test(value.toString())){
      category = re.exec(value.toString())[3] === undefined 
      ? 'uncategorized ' + re.exec(value.toString())[1]
      : re.exec(value.toString())[2]
    }
    
    createNodeField({
      node,
      name: "slug",
      value: value.toString(),
    })

    createNodeField({
      node,
      name: "category",
      value: category,
    })
  }
}


exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type Mdx implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        tags: {
          type: "[String!]",
          resolve(source, args, context, info) {
            const { tags } = source
            if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
              return ["uncategorized"]
            }
            return tags
          },
        },
        TOC: {
          type: "Boolean!",
          resolve(source, args, context, info) {
            const { TOC } = source
            if (source.TOC == null) {
              return false
            }
            return TOC
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      postMdx: allMdx(
        filter: {fileAbsolutePath: {regex: "/posts/"}}
      ){
        edges {
          node {
            id
            fields {
              slug
              category
            }
            frontmatter {
                title
                tags
                date
            }
          }
        }
      }
      tagGroup: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            id
          }
        }
      }
      categoryGroup: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        group(field: fields___category) {
          fieldValue
          nodes {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create post pages.
  const posts = result.data.postMdx.edges
  const tagGroup = result.data.tagGroup.group
  const categoryGroup = result.data.categoryGroup.group
  
  posts.map(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: { 
        id: node.id,
        prev: index === 0 ? null : posts[index-1].node,
        next: index === (posts.length - 1) ? null : posts[index+1].node,
      },
    })
  })

  // Create post index.
  paginate({
    createPage,
    component: path.resolve('./src/templates/post-list.js'),
    items: posts,
    itemsPerPage: 6,
    itemsPerFirstPage: 6,
    pathPrefix: '/posts',
    context:{
    }
  })

  const toPinyin=(word)=>(
    pinyin(word, { keepRest: true, removeTone: true })
  )

  // Create tag page.
  tagGroup.map(tag => {
    const tagName = tag.fieldValue
    const tagPath = `/archives/tag/${_.kebabCase(toPinyin(tagName))}`

    paginate({
      createPage,
      component: path.resolve('./src/templates/tag.js'),
      items: tag.nodes,
      itemsPerPage: 6,
      itemsPerFirstPage: 6,
      pathPrefix: tagPath,
      context:{
        tagPath,
        tagName,
      }
    })
  })

  // Create category page.
  categoryGroup.map(category => {
    const categoryName = category.fieldValue
    const categoryPath = `/archives/category/${_.kebabCase(toPinyin(categoryName))}`

    paginate({
      createPage,
      component: path.resolve('./src/templates/category.js'),
      items: category.nodes,
      itemsPerPage: 6,
      itemsPerFirstPage: 6,
      pathPrefix: categoryPath,
      context:{
        categoryPath,
        categoryName,
      }
    })
  })

}