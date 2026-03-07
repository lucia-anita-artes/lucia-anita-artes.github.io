export type ActionCategory = 'instagram' | 'pintura' | 'negocio';
export type ActionPriority = 'alta' | 'media' | 'baixa';

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  category: ActionCategory;
  priority: ActionPriority;
  done: boolean;
  order: number;
}

export interface ProximosPassosData {
  actions: ActionItem[];
}
