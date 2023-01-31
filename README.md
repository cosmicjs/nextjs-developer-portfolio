# Developer Portfolio built with Next.js and Cosmic

To build this app, we’re going to use the following technologies:

- [Next.js](https://nextjs.org/docs) - A React framework for production that makes it easy to spin up a full-stack application.
- [Cosmic](https://www.cosmicjs.com/) - A Headless CMS enables the independence of the data (content) layer and gives us the ability to quickly manage template content.
- [Tailwind CSS](https://tailwindcss.com/) - A performant utility-first CSS framework that can be composed directly in your markup.

### Links

- [Read how the template was built](https://www.cosmicjs.com/articles/creating-a-developer-portfolio-with-nextjs-and-cosmic)
- [Install the App Template](https://www.cosmicjs.com/apps/developer-portfolio)
- [View the live demo](https://nextjs-developer-portfolio-cms.vercel.app/)

## Screenshots

![developer porfolio home](/public/images/developer-portfolio-cover-2.png)

![developer porfolio blog](/public/images/blog-post-cover.png)

## Getting started

### Environment Variables

You'll need to create an .env file in the root of the project. Log in to Cosmic and from Bucket Settings > API Access take the following values:

```
//.env
COSMIC_BUCKET_SLUG=your_cosmic_slug
COSMIC_READ_KEY=your_cosmic_read_key
COSMIC_PREVIEW_SECRET=your_preview_secret
```

Install the dependencies with

```
pnpm install
# or
yarn install
# or
npm install
```

Then run the development server:

```
pnpm run dev
# or
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on Vercel

<p>Use the following button to deploy to <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a>. You will need to add API accesss keys as environment variables. Find these in <em>Bucket Settings &gt; API Access</em>.</p>
<p>
<a href="https://vercel.com/new/clone?env=COSMIC_BUCKET_SLUG%2CCOSMIC_READ_KEY%2CCOSMIC_PREVIEW_SECRET&repository-url=https%3A%2F%2Fgithub.com%2Fcosmicjs%2Fnextjs-developer-portfolio%2Ftree%2Fapi-v3" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/d3f0d5e0-c064-11ea-9a05-6f8a16b0b14c-deploy-to-vercel.svg" style="width: 100px;" class="fr-fic fr-dib fr-fil"></a>
</p>

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Your feedback and contributions are welcome!
