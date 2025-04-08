# Next.js Suspense Guide for Client Components

This guide explains how to properly handle client components that use navigation hooks like `useSearchParams()`, `usePathname()`, and `useRouter()` in Next.js App Router.

## The Issue

In Next.js App Router, client components that use certain navigation hooks (like `useSearchParams()`) must be wrapped in a Suspense boundary. If not, you'll encounter this error during build:

\`\`\`
useSearchParams() should be wrapped in a suspense boundary. Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
\`\`\`

## Solution Patterns

### Pattern 1: Split into Client/Server Components

For complex components, split them into client and server parts:

\`\`\`tsx
// my-component-client.tsx (Client Component)
"use client"
import { useSearchParams } from 'next/navigation'

export default function MyComponentClient() {
  const searchParams = useSearchParams()
  // Client-side logic here
  return <div>...</div>
}

// my-component.tsx (Server Component)
import { Suspense } from 'react'
import MyComponentClient from './my-component-client'

export default function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponentClient />
    </Suspense>
  )
}
\`\`\`

### Pattern 2: Use the ClientSuspense Component

For simpler components, use our `ClientSuspense` wrapper:

\`\`\`tsx
import { ClientSuspense } from '@/components/client-suspense'

export default function MyPage() {
  return (
    <ClientSuspense fallback={<div>Loading...</div>}>
      <MyClientComponent />
    </ClientSuspense>
  )
}
\`\`\`

### Pattern 3: Use the withClientSuspense HOC

For reusable client components:

\`\`\`tsx
import { withClientSuspense } from '@/components/client-suspense'

const MyComponent = withClientSuspense(MyClientComponentBase)
\`\`\`

## Best Practices

1. **Identify Navigation Hooks**: Be aware of components using `useSearchParams()`, `usePathname()`, or `useRouter()`
2. **Provide Meaningful Fallbacks**: Create fallbacks that match the component's dimensions to prevent layout shifts
3. **Keep Client Components Small**: Only include what needs to be client-side in your client components
4. **Use Server Components by Default**: Start with server components and only use client components when necessary

## Common Navigation Hooks That Need Suspense

- `useSearchParams()`
- `usePathname()`
- `useRouter()`
- `useParams()`

## Example Fallbacks

\`\`\`tsx
// Button fallback
<div className="h-10 w-24 rounded-full bg-gray-200 animate-pulse"></div>

// Card fallback
<div className="h-40 w-full rounded-lg bg-gray-200 animate-pulse"></div>

// Text fallback
<div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse"></div>
\`\`\`

By following these patterns, you'll avoid the Suspense boundary errors in your Next.js application.
