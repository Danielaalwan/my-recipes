// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getOneRecipe } from "@/utils/recipeUtils";

export default function handler(req, res) {
  if (recipes[req.query.recipes]) {
    res.status(200).json(getOneRecipe(req.query.recipes));
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
}
