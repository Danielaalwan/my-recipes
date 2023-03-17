import { getOneRecipe } from "@/utils/recipeUtils";
import Link from "next/link";
import styles from "@/styles/recepie.module.css";

export default function RecipePage(props) {
  if (!props.recipe) {
    return <div>Not Found</div>;
  }

  return (
    <div className={styles.head}>
      <h1>{props.recipe.title}</h1>
      <h2>{props.recipe.description}</h2>
      <div>
        <h3 className={styles.text}>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={styles.text2}>Instructions</h3>
        <ul>
          {props.recipe.instructions.map((inst) => (
            <li key={inst}>{inst}</li>
          ))}
        </ul>
      </div>
      <div>
        <button>
          {" "}
          <Link href="/">← Back to home</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipe: getOneRecipe(context.params.id) || null,
    }, // will be passed to the page component as props
  };
}
