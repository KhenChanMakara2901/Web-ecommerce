import { MenuItem } from "@/src/types/MenuItem";
export interface ProductListProps {
  items: MenuItem[];
  handleOrderNow: (item: MenuItem) => void;
}
