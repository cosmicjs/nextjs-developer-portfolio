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
  const params = {
    query: { slug },
    status: 'any',
    props: 'slug',
  }

  try {
    const data = await bucket.getObjects(params)
    return data.objects[0]
  } catch (error) {
    // Don't throw if a slug doesn't exist
    if (is404(error)) return
    throw error
  }
}

export async function getAllPostsWithSlug() {
  const params = {
    query: { type: 'posts' },
    props: 'title,slug,metadata,created_at',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllPosts(preview, postType, postCount) {
  const params = {
    query: { type: postType },
    ...(preview && { status: 'any' }),
    props:
      'title,slug,metadata.category,metadata.excerpt,metadata.published_date,created_at,status',
    limit: postCount,
    sort: '-created_at',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getPostAndMorePosts(slug, preview) {
  const singleObjectParams = {
    query: { slug: slug },
    ...(preview && { status: 'any' }),
    props: 'slug,title,metadata,created_at',
  }
  const moreObjectParams = {
    query: { type: 'posts' },
    ...(preview && { status: 'any' }),
    limit: 3,
    props: 'title,slug,metadata,created_at',
  }

  try {
    const data = await bucket.getObjects(singleObjectParams)
    const moreObjects = await bucket.getObjects(moreObjectParams)
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
  const params = {
    query: { type: category },
    props: 'title',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}
