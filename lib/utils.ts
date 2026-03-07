import { PaintingStatus, CollectionStatus } from '@/types';

export const STEP_LABELS: Record<string, string> = {
  reference: 'Referência escolhida',
  sketch: 'Esboço feito',
  started: 'Pintura iniciada',
  finished: 'Pintura finalizada',
  photo: 'Foto tirada',
  reel: 'Reel postado',
  carousel: 'Carrossel postado',
};

export function paintingStatusLabel(status: PaintingStatus): string {
  const labels: Record<PaintingStatus, string> = {
    locked: 'Bloqueado',
    available: 'Disponível',
    in_progress: 'Em progresso',
    completed: 'Concluído',
  };
  return labels[status];
}

export function collectionStatusLabel(status: CollectionStatus): string {
  const labels: Record<CollectionStatus, string> = {
    locked: 'Bloqueado',
    active: 'Ativo',
    completed: 'Concluído',
  };
  return labels[status];
}
