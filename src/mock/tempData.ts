interface NutrientTable {
  Nutrient: { [key: string]: string };
  "Amount per 100g": { [key: string]: string };
  "% Daily Value*": { [key: string]: string };
}

interface ParsedData {
  food_item_analysis: string;
  benefits_for_pregnancy: string;
  potential_risks_or_contraindications: string;
  preparation_tips: string;
  alternative_options: string;
  additional_information: string;
}

export interface TempData {
  age: number;
  pregnancy_week: number;
  input: string;
  safety_level: number;
  parsed_data: ParsedData;
  nutrient_table: NutrientTable;
}

const tempData: TempData = {
  age: 0,
  pregnancy_week: 31,
  input: "chicken",
  safety_level: 2,
  parsed_data: {
    food_item_analysis:
      "- Name: Chicken\n    - Safety level: 2\n    - Nutritional Value: Chicken is a highly nutritious protein source, offering an array of essential nutrients vital for overall health and well-being, including protein, iron, and calcium.\n    - Recommended Intake: 2-3 servings per week\n    - Trimester-specific Recommendations: During the second trimester, it is essential to consume enough protein to support fetal growth and development. Chicken is an excellent source of protein and can be included in the diet 2-3 times a week.",
    benefits_for_pregnancy:
      "- Chicken is an excellent source of protein, essential for fetal growth and development during pregnancy.",
    potential_risks_or_contraindications:
      "- Undercooked or raw chicken can pose a risk of foodborne illness, which can be severe during pregnancy.",
    preparation_tips:
      "- Always cook chicken thoroughly to an internal temperature of 165°F (74°C) to prevent foodborne illness.",
    alternative_options:
      "- Turkey breast\n    - Lean beef\n    - Fish (low-mercury)",
    additional_information:
      "- It is essential to handle and store chicken safely to prevent cross-contamination and foodborne illness.\n    - Pregnant women should avoid eating chicken that is not cooked thoroughly or is raw.",
  },
  nutrient_table: {
    Nutrient: {
      "0": "Calories      ",
      "1": "Carbohydrates ",
      "2": "Protein       ",
      "3": "Fat           ",
      "4": "Sodium        ",
      "5": "Sugar         ",
    },
    "Amount per 100g": {
      "0": "165 kcal        ",
      "1": "0 g             ",
      "2": "31 g            ",
      "3": "3.5 g           ",
      "4": "20 mg           ",
      "5": "0 g             ",
    },
    "% Daily Value*": {
      "0": "8%             ",
      "1": "0%             ",
      "2": "62%            ",
      "3": "5%             ",
      "4": "1%             ",
      "5": "0%             ",
    },
  },
};

export default tempData;
