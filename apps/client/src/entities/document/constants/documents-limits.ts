import { GetDocumentsQueryKeys } from "../api/documents-query";

export const DocumentsLimits: Record<GetDocumentsQueryKeys, number> = {
  documents: 12,
  bulletins: 12,
  favorites: 12,
};
