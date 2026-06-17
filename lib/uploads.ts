// Shared constraints for client document uploads (Request a Proposal).
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB per file
export const MAX_FILES = 8;

// Allowed MIME types: PDF, Word, Excel, common images.
export const ALLOWED_CONTENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
];

// For the <input accept="..."> attribute.
export const ACCEPT_ATTR =
  ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png," + ALLOWED_CONTENT_TYPES.join(",");

export type UploadedFile = {
  pathname: string;
  url: string;
  name: string;
  size: number;
  type: string;
};
