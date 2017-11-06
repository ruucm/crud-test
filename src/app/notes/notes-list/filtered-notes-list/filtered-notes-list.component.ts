import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NoteService } from '../../note.service';
import { Location } from '@angular/common';
@Component({
	selector: 'filtered-notes-list',
	templateUrl: './filtered-notes-list.component.html',
	styleUrls: ['./filtered-notes-list.component.scss']
})
export class FilteredNotesListComponent {
	Tag: string;
	paramsSub: Subscription;
	notes;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private noteService: NoteService, ) {}
	ngOnInit() {
		this.paramsSub = this.route.params
			.map(params => params['Tag'])
			.subscribe(Tag => {
				this.Tag = Tag;
				console.log('this.Tag : ');
				console.log(this.Tag);
				// this.formDbService.getPossibleRegion(this.Tag).valueChanges().subscribe(queriedItems => {
				// 	this.possibleRegion = queriedItems;
				// });
			});
		this.notes = this.noteService.getFilteredSnapshot(this.Tag);
	}
	goBack(): void {
		this.location.back();
	}
}
