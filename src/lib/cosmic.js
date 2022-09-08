const Cosmic = require('cosmicjs')
const api = Cosmic()

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = api.bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

const is404 = error => /not found/i.test(error.message)

export async function getPreviewPostBySlug(slug) {
  try {
    const data = await bucket.objects
      .find({
        slug: slug,
      })
      .props('slug')
      .status('any')
    return data.objects[0]
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getAllPosts(preview, postType, postCount) {
  try {
    const data = await bucket.objects
      .find({
        type: postType,
      })
      .props(
        'title,slug,metadata.category,metadata.excerpt,metadata.published_date,created_at,status'
      )
      .limit(postCount)
      .sort('-created_at')
      .status(preview ? 'any' : 'published')
    return data.objects
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getPostAndMorePosts(slug, preview) {
  try {
    const data = await bucket.objects
      .find({
        slug: slug,
      })
      .props('slug,title,metadata,created_at')
      .status(preview ? 'any' : 'published')

    const moreObjects = await bucket.objects
      .find({
        type: 'posts',
      })
      .props('slug,title,metadata,created_at')
      .status(preview ? 'any' : 'published')

    const morePosts = moreObjects.objects
      ?.filter(({ slug: object_slug }) => object_slug !== slug)
      .slice(0, 2)

    return {
      post: data?.objects[0],
      morePosts,
    }
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getAllCategories(category) {
  try {
    const data = await bucket.objects
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
