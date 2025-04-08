"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "branding", name: "Branding" },
  { id: "marketing", name: "Marketing" },
  { id: "advertising", name: "Advertising" },
  { id: "design", name: "Design" },
  { id: "case-studies", name: "Case Studies" },
];

export default function BlogCategoriesClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get the current category from URL or default to "all"
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (categoryId: string) => {
    // Create new URLSearchParams
    const params = new URLSearchParams(searchParams);

    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }

    // Update the URL with the new search params
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={currentCategory === category.id ? "default" : "outline"}
          className={`rounded-full ${
            currentCategory === category.id
              ? "bg-primary hover:bg-primary/90"
              : ""
          }`}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
