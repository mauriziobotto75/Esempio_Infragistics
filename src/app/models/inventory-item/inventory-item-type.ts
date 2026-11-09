export interface InventoryItemType {
  itemCode?: string;
  description?: string;
  stockQuantity?: number;
  minimumThreshold?: number;
  unitPrice?: number;
  lastMovementDate?: Date;
}
