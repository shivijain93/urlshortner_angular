import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {


  form;
  list;

  constructor(private urlservice:UrlService, private router: Router) {
    this.form = new FormGroup({
      'URL': new FormControl('',Validators.required), 
     

     
    }) 

    this.urlservice.getURLs().subscribe((data) => {
      this.list = data;
    })
  }

  ngOnInit(): void {

  }
    postURL() {
      if (this.form.valid) {
        this.urlservice.postURL(this.form.value).subscribe((url)=>{
           this.router.navigate([''])
        })
      }

    }
  }
  
