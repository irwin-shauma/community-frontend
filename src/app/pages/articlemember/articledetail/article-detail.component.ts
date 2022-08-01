import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleHeaderData } from "src/app/dto/article/article-data";
import { ArticleHeaderService } from "src/app/service/article.service";

@Component({
    selector: 'app-articledetail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./../articlemember.styles.css']
})
export class ArticleDetailComponent implements OnInit{
    articleDetail: ArticleHeaderData = {} as ArticleHeaderData;
    idParam! : number

    constructor(private articleHeaderService : ArticleHeaderService,
         private router: Router,
         private activatedRoute : ActivatedRoute){
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((result) => {
            const resultTemp : any = result;
            
            this.idParam = resultTemp.id;

            this.articleHeaderService.findById(this.idParam).subscribe((res) =>{
                this.articleDetail.id = res.data?.id;
                this.articleDetail.contents = res.data?.contents
                this.articleDetail.title = res.data?.title
                this.articleDetail.fileId = res.data?.fileId

            })
        })
    }

    // initData(): void{
    //     this.articleHeaderService.findById()
    // }
}