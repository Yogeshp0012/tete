import { Component } from '@angular/core';
import { Document, formatFileSize,generateRandomId } from '../shared/utils';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-upload',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './upload.component.html',
    styleUrl: './upload.component.scss'
})
export class UploadComponent {
    documents: Document[] = [];
    files: File[] = [];
    fileContents: { [key: string]: string } = {};
    allowedExtensions = ['.html', '.pdf'];

    openSideBar() {
        document.getElementById('sidebar-mobile')?.classList.remove("hidden")
    }

    onFilesSelected(event: Event) {
        const target = event.target as HTMLInputElement;
        this.files = Array.from(target.files || []);
        this.files.forEach(file => {
            const fileExtension = file.name.slice(file.name.lastIndexOf('.'));
            if (this.allowedExtensions.includes(fileExtension.toLowerCase())) {
                const document: Document = {
                    filename: file.name,
                    filesize: formatFileSize(file.size),
                    filedata: file,
                    status: 'Uploading',
                    extension: fileExtension.toLowerCase(),
                    id: generateRandomId(),
                    progress: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
                };
                this.documents.push(document);
                this.uploadFile(document);
            } else {
                const document: Document = {
                    filename: file.name,
                    filesize: "Insupported File Extension",
                    filedata: file,
                    extension: fileExtension.toLowerCase(),
                    status: 'Failed',
                    id: generateRandomId(),
                    progress: 100,
                };
                this.documents.push(document);
            }
        });
        console.log(this.documents);
    }

    uploadFile(document: Document){
        setTimeout(() => {
            document.progress = 100;
            document.status = 'Uploaded';
          }, 2000);
    }

    deleteDoc(id: string) {
        this.documents = this.documents.filter(doc => doc.id !== id);
        console.log(this.documents);
      }

      clearFileInput(input: any) {
        input.value = '';
      }

      reset(): void{
        this.documents = [];
      }
}
