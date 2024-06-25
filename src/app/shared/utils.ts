export interface Document {
    filename: string;
    filesize: number | string;
    filedata: any;
    status: 'Uploading' | 'Uploaded' | 'Failed';
    id: string;
    extension: string;
    progress: number;
  }

  export function generateRandomId(): string {
    return Math.random().toString(36).substring(2, 10);
  }

  export function formatFileSize(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let index = 0;
    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }
    return `${size.toFixed(2)} ${units[index]}`;
  }
