# Fanap Front-End Challenge [Live_Demo](https://fanap-challenge.vercel.app)
## installation via pnpm
```
pnpm i
```
## Runing on Dev
```
pnpm run dev
```
## Prod
```
pnpm run build && pnpm run start
```
## Implementation Details
### Stack

<ul>
  <li> Nextjs 15 , React 19</li>
  <li> Tailwindcss 4 , Shadcn/ui(Only Skeletons) </li>
  <li> Zustand(state-management & persist), React Hooks(to manage the LifeCyle Events, not state management), Custom Hooks(For Theme Button + Cookie manipulation and server side loading for the theme class using /src/lib/middlewares) </li>
</ul>

### Notes
```
I've implemented both CSR and SSR approaches
- utilized App Router with 1 simple layout , simple <TopNav /> and <Footer />
- The SSR does not use any state manager and has basic metadata using generateMetaData for product/[id] and metaData for the pagination pages
  -- fetching data using server actions
- The CSR on the other hand uses Zustand for state management in 2 stores (shop.store.ts & product.store.ts) inside /src/lib/store
  -- by leveraging zustand/middleware implemented, state persistance on localStorage only for shop.store with
  -- implemented client side fetching with loading status and basic error handling (404 and 400) for product/[id] and /product-csr/[id] for showcasing
  -- Clear LocalStorage Button on the top nav when in CSR Mode to clear localStorage and refresh
- tailwind / shadcn color pallete in global.css with some basic styling and font-sizing for several semantic tags
```
### Deployed on Vercel [Live_Demo](https://fanap-challenge.vercel.app)
