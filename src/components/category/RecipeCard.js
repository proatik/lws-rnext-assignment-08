import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/details/${recipe.id}`}>
      <div className="card">
        <Image
          width={300}
          height={160}
          alt="thumbnail"
          className="rounded-md"
          src={recipe?.thumbnail}
        />
        <h4 className="my-2">{recipe?.name}</h4>
        <div className="flex justify-between py-2 text-xs text-gray-500">
          <span>⭐️ {recipe?.rating?.toFixed(1)}</span>
          <span>By: {recipe?.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
