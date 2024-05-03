"use client";

import { useRouter } from "next/navigation";

// actions.
import { toggleFavourites } from "@/actions";

// custom hooks.
import { useAuth } from "@/hooks/useAuth";

const FavouriteButton = ({ recipeId }) => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const isFavourite = auth?.favourites?.includes(recipeId);

  const handleClick = async () => {
    if (auth) {
      const favourites = await toggleFavourites(recipeId, auth?.id);
      setAuth({ ...auth, favourites });
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex gap-2 border-gray-600 transition-all  cursor-pointer hover:text-[#eb4a36] ${
        isFavourite
          ? "text-[#eb4a36] fill-[#eb4a36]"
          : "text-gray-600 fill-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span>Favourite</span>
    </button>
  );
};

export default FavouriteButton;
