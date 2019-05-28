import {Component, OnInit, Input, ViewChild, Renderer2, OnChanges, SimpleChanges, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'gravy-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit, OnChanges {

  constructor(private renderer: Renderer2) {
  }

  @Input('label') barTitle: string;
  filterValue = '';

  @Output() filterChange = new EventEmitter<string>();

  @Input()
  get filter() {
    return this.filterValue;
  }

  set filter(val) {
    this.filterValue = val;
    this.filterChange.emit(this.filterValue);
  }

  @Input('height') searchBarHeight: string;

  @ViewChild('mainToolbar') mainToolbar;
  @ViewChild('searchToolbar') searchToolbar;
  @ViewChild('searchInput') searchInput: ElementRef;

  showSearch = false;
  placeholder: string;

  static checkRequiredFields(input) {
    if (input === null) {
      throw new Error('Attribute is required');
    }
  }

  ngOnInit() {
    this.placeholder = 'Search';
    if (this.searchBarHeight) {
      this.renderer.setStyle(this.mainToolbar._elementRef.nativeElement, 'height', this.searchBarHeight);
      this.renderer.setStyle(this.searchToolbar._elementRef.nativeElement, 'height', this.searchBarHeight);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    SearchToolbarComponent.checkRequiredFields(this.barTitle);
  }

  searchEvent(word: string) {
    this.filter = word.trim().toLowerCase();
  }


  handlePlaceholder() {
    if (this.placeholder === 'Search') {
      this.placeholder = null;
    } else {
      this.placeholder = 'Search';
    }
  }

  clearClicked() {
    this.filter = '';
    this.searchInput.nativeElement.value = '';
    this.showSearch = !this.showSearch;
  }

}
