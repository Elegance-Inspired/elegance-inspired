import { Suspense } from "react"
import BlogCategoriesClient from "./blog-categories-client"

export default function BlogCategories() {
  return (
    <section className="py-8 bg-background border-b">
      <div className="container mx-auto px-4">
        <Suspense
          fallback={
            <div className="flex flex-wrap gap-2 justify-center">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-10 w-24 rounded-full bg-gray-200 animate-pulse"></div>
                ))}
            </div>
          }
        >
          <BlogCategoriesClient />
        </Suspense>
      </div>
    </section>
  )
}
