const { createBucketClient } = require('@cosmicjs/sdk')

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY,
})

const is404 = error => /not found/i.test(error.message)

export async function getPreviewPostBySlug(slug) {
  try {
    const data = await cosmic.objects
      .findOne({
        slug: slug,
      })
      .props('title,slug,metadata')
      .status('any')
    return data.object
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getAllPosts(preview, postType, postCount) {
  try {
    const data = await cosmic.objects
      .find({
        type: postType,
      })
      .props(
        'title,slug,metadata.category,metadata.excerpt,metadata.published_date,created_at,status'
      )
      .limit(postCount)
      .sort('-created_at')
      .status(preview ? 'any' : 'published')
      .depth(1)
    return data.objects
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getAllPostsWithSlug() {
  try {
    const data = await cosmic.objects.find({
      type: 'posts',
      props: 'title,slug,metadata,created_at',
    })
    return data.objects
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getPostAndMorePosts(slug, preview) {
  try {
    const data = await cosmic.objects
      .findOne({
        slug: slug,
      })
      .props('slug,title,metadata,created_at,status')
      .status(preview ? 'any' : 'published')

    const moreObjects = await cosmic.objects
      .find({
        type: 'posts',
      })
      .props('slug,title,metadata,created_at')
      .status(preview ? 'any' : 'published')

    const morePosts = moreObjects.objects
      ?.filter(({ slug: object_slug }) => object_slug !== slug)
      .slice(0, 2)

    return {
      post: data?.object,
      morePosts,
    }
  } catch (error) {
    if (is404(error)) throw error
  }
}

export async function getAllCategories(category) {
  try {
    const data = await cosmic.objects
      .find({
        type: category,
      })
      .props('title')
    return data.objects
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getPageBySlug(slug, props) {
  try {
    const data = await cosmic.objects
      .findOne({
        slug: slug,
      })
      .props(props)
      .depth(1)
    return data.object
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getSiteSettings() {
  try {
    const data = await cosmic.objects
      .findOne({
        type: 'site-settings',
        slug: 'site-settings',
      })
      .props('metadata')
    return data.object
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}
