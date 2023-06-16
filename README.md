# Secoda 

## Project summary 
### Included in this 2 ~ 3 hours project 
- Libraries
    - Mantine UI libraries
    - axios for making API requests
- Data models at /models
- API Handler for [Crypto API](https://coinmarketcap.com/api/documentation/v1/) - see src/pags/api/crypto.ts
- ... including a consistent way of responding to internal APIs - see src/pages/api/_response.ts
- Table rendering cryptocurrency information at src/pages/index.tsx

### Not included
- State management library as the project was so small it didn't make sense to use one
- Proper icons - used emojis instead, ran out of time

## Candidate experience
The online assignment was alright, but I do think there's some room to tweak it for the better. First off, it wasn't too long, but needing to add and use external libraries could eat up some extra time. I kinda think using libraries we already know might make things smoother for us candidates. 

The real headache came when dealing with the Crypto API. The responses I got from the API were different from what was promised in the docs - some properties were missing. That took up way more time than it should've, so I decided to just roll with what I had.

All in all, it was a decent experience, although some parts were a bit vague. Like, the task was to build a React app that shows a table of the top 10 results from a crypto API, refreshing every minute. But what exactly does "top 10 results" mean here? I thought about shooting out an email for clarification, but I was worried it would take too long to get a reply.

So, overall, it was a good experience. But with clearer instructions and less API drama, it could've been a lot smoother, and more about showing off coding chops.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
