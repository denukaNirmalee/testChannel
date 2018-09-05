import {MatButtonModule, MatCheckboxModule, MatDatepickerModule,
    MatSelectModule, MatRadioModule, MatNativeDateModule} from '@angular/material';
import { NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,MatIconModule,
    MatMenuModule, MatDividerModule, MatTooltipModule, MatExpansionModule, MatGridListModule,
    MatCardModule, MatTabsModule, MatFormFieldModule,MatInputModule, MatDatepickerModule,
    MatSelectModule, MatRadioModule, MatNativeDateModule, MatChipsModule],
    
    exports: [MatButtonModule,MatCheckboxModule, MatToolbarModule,MatIconModule,
        MatMenuModule, MatDividerModule, MatTooltipModule,MatExpansionModule, MatGridListModule,
        MatCardModule, MatTabsModule,MatFormFieldModule,MatInputModule, MatDatepickerModule,
        MatSelectModule, MatRadioModule, MatNativeDateModule, MatChipsModule],
})

export class MaterialModule {

}
