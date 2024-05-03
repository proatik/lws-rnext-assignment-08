import Link from "next/link";

// constant data.
import categories from "@/data/category";

const Sidebar = () => {
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="text-xl font-bold">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
        {categories.map(({ id, label }) => (
          <li key={id}>
            <Link href={`category/${id}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
