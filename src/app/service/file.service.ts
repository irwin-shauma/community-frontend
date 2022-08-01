import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FileService {
  constructor(private http: HttpClient) {}

  uploadAsBase64(file: any): Promise<[string, string]> {
    return new Promise<[string, string]>((resolve, reject) => {
      const fileName = file.name as string;
      const extension = fileName.substring(fileName.lastIndexOf('.') + 1);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const resultTemp = result.substring(result.indexOf('base64,') + 7);
        resolve([resultTemp, extension]);
      };
      reader.onerror = (error) => reject(JSON.stringify(error));
    });
  }
}
