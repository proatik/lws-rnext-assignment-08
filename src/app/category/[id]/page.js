import { notFound } from "next/navigation";

// react components.
import RecipeCard from "@/components/category/RecipeCard";

// utility functions.
import { getCategory } from "@/utils";
import { getRecipesByCategory } from "@/lib/recipe";

export async function generateMetadata({ params: { id } }) {
  const { label } = getCategory(id) || { label: "404" };

  return {
    title: `Khana Khazana | ${label}`,
    description: "List of recipes by category.",
  };
}

const CategoryPage = async ({ params: { id } }) => {
  const category = getCategory(id);

  if (!category) notFound();

  const recipes = await getRecipesByCategory(category.label);

  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="text-xl font-semibold">
            {category.label} ({recipes?.length})
          </h3>
          <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {recipes?.length === 0 && (
              <div className="w-full px-4 py-8 text-2xl text-center border rounded-md text-black/60 border-slate-300 bg-slate-200/20 col-span-full">
                No recipes available for this category!
              </div>
            )}

            {recipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
