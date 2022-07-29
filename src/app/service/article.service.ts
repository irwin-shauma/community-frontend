import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ArticleHeaderFindAll } from "../dto/article/article-find-all";
import { ArticleHedaerFindById } from "../dto/article/article-find-by-id";
import { ArticleInsertReq } from "../dto/article/article-insert";
import { ArticleUpdateReq } from "../dto/article/article-update";
import { DeleteRes } from "../dto/delete-res";
import { InsertRes } from "../dto/insert-res";
import { UpdateRes } from "../dto/update-res";

@Injectable({
    providedIn:'root'
})

export class ArticleHeaderService{

    constructor(private http: HttpClient){}

    showAllArticle(startPage: number, maxPage: number): Observable<ArticleHeaderFindAll>{
        return this.http.get<ArticleHeaderFindAll>(`http://localhost:1234/article-headers?startPage=${startPage}&maxPage=${maxPage}`);
    }

    addArticle(data: ArticleInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>('http://localhost:1234/article-headers', data);
      }
    
      findById(id: number): Observable<ArticleHedaerFindById> {
        return this.http.get<ArticleHedaerFindById>('http://localhost:1234/article-headers/' + id);
      }
    
      editArticle(data: ArticleUpdateReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>('http://localhost:1234/article-headers', data);
      }
    
      deleteArticle(id: number): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>('http://localhost:1234/article-headers/' + id);
      }
    }