import {Component, Input, OnInit} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {PostItem} from "../interfaces/post-item";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit{

  postTitle = '';
  postBody = '';
  @Input() post!: PostItem;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.postTitle = this.post.title;
    this.postBody = this.post.body
  }

  updatePost() {
    if (this.postTitle.trim() && this.postBody.trim()) {
      const post = {title: this.postTitle, body: this.postBody}
      this.activeModal.close(post);
   }
  }
 }

