import { MenuItem } from "@/src/types/MenuItem";
export interface ProductModalProps {
  isOpen: boolean;
  product: MenuItem | null;
  onClose: () => void;
  onSubmitOrder: (e: React.FormEvent) => void;
}
