export type CollectionStatus = 'locked' | 'active' | 'completed';
export type PaintingStatus = 'locked' | 'available' | 'in_progress' | 'completed';

export interface PaintingSteps {
  reference: boolean;
  sketch: boolean;
  started: boolean;
  finished: boolean;
  photo: boolean;
  reel: boolean;
  carousel: boolean;
}

export interface Painting {
  id: string;
  title: string;
  status: PaintingStatus;
  notes: string;
  imageUrl: string | null;
  steps: PaintingSteps;
}

export interface Collection {
  id: string;
  title: string;
  emoji: string;
  description: string;
  status: CollectionStatus;
  paintings: Painting[];
}

export interface ProgressData {
  collections: Collection[];
}

export type UpdatePayload =
  | { action: 'toggle_step'; collectionId: string; paintingId: string; step: keyof PaintingSteps; value: boolean }
  | { action: 'update_notes'; collectionId: string; paintingId: string; notes: string }
  | { action: 'update_painting_status'; collectionId: string; paintingId: string; status: PaintingStatus }
  | { action: 'update_collection_status'; collectionId: string; status: CollectionStatus }
  | { action: 'toggle_action'; actionId: string; value: boolean };
