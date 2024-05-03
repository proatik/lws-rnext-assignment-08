import Image from "next/image";
import { notFound } from "next/navigation";

// react components.
import ShareButton from "@/components/details/ShareButton";
import FavouriteButton from "@/components/details/FavouriteButton";

// utility functions.
import { getRecipeById } from "@/lib/recipe";

export async function generateMetadata({ params: { id } }) {
  const recipe = await getRecipeById(id);

  const shareUrl = process.env.BASE_URL + `/details/${id}`;

  return {
    title: `Khana Khazana | ${recipe?.name || "404"}`,
    description: recipe?.description || "Recipe doesn't exist.",
    author: recipe?.author,
    openGraph: {
      title: recipe?.name,
      description: recipe?.description,
      type: "article",
      url: shareUrl,
      images: [{ url: recipe?.thumbnail }],
    },
  };
}

const DetailsPage = async ({ params: { id } }) => {
  const recipe = await getRecipeById(id);

  if (!recipe) notFound();

  return (
    <main>
      <section>
        <div className="container grid grid-cols-12 gap-8 justify-items-center">
          <div className="col-span-12 md:col-span-6">
            <Image
              alt="image"
              width={800}
              height={600}
              src={recipe?.image}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center col-span-12 py-8 md:col-span-6">
            <h2 className="text-4xl font-semibold leading-10 lg:w-8/12">
              {recipe?.name}
            </h2>
            <p className="text-xs text-[#eb4a36] italic my-2">
              {recipe?.category}
            </p>
            <p className="my-6 text-sm leading-6 text-gray-600">
              {recipe?.description}
            </p>
            <div className="flex justify-center gap-4 my-12 divide-x">
              <div className="flex-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-700">
                  Prep time
                </h3>
                <p className="text-sm text-gray-500">{recipe?.activeTime}</p>
              </div>

              <div className="flex-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.5 17h11" />
                  <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-700">
                  Cook time
                </h3>
                <p className="text-sm text-gray-500">{recipe?.totalTime}</p>
              </div>

              <div className="flex-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-700">
                  Servings
                </h3>
                <p className="text-sm text-gray-500">{recipe?.serves}</p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <FavouriteButton recipeId={id} />
              <ShareButton />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-12">
          <h3 className="py-6 text-xl font-semibold">How to Make it</h3>
          <div>
            {recipe?.steps?.map((step, index) => (
              <div key={index} className="step">
                <h3>Step {index + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailsPage;
