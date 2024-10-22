export interface CategoryButtonsProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}
