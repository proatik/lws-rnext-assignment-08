// react components.
import Hero from "@/components/home/Hero";
import Sidebar from "@/components/home/Sidebar";
import RecipeList from "@/components/home/RecipeList";

export const metadata = {
  title: "Khana Khazana | Home",
  description:
    "Discover delicious recipes from around the world with Khana Khazana. Explore a wide range of dishes and cooking techniques to satisfy your culinary cravings.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <Sidebar />
          <RecipeList />
        </div>
      </section>
    </main>
  );
}
