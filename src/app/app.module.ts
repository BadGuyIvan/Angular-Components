import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

import { HnResolver } from './products/resolver';
import { HttpClientModule } from '@angular/common/http';
import { HnService } from './hn.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ResolveDetailPost } from './services/resolveDetailPost';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalComponent } from './modal/modal.component';
import { ModalOpenDirective } from './modal/modal-open.directive';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxComponent } from './ngrx/ngrx.component';
import { NgrxFirstExampleComponent } from './ngrx-first-example/ngrx-first-example.component';

import { simpleReducer } from './ngrx/simple.reducer';
import { postReducer } from './ngrx/post/post.reducer';
import { NgrxSeondExampleComponent } from './ngrx-seond-example/ngrx-seond-example.component';
import { TaxComponent } from './tax/tax.component';
import { PaAddTaxPipe } from './tax/add-tax.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CategoryFilterPipe } from './category-filter/category-filter.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { TooltipComponentContainer } from './tooltip-container/tooltip-container.component';
import { TooltipFirstComponent } from './tooltip-first/tooltip-first.component';
import { TooltipDirective } from './tooltip-first/directive/tooltip.directive';
import { TooltipComponent } from './tooltip-first/tooltip.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalFirstComponent } from './modal-first/modal-first.component';
import { DirectiveMainComponent } from './directive-main/directive-main.component';
import { DirectiveFirstDirective } from './directive/directive-first.directive';
import { TooltipComponentComponent } from './tooltip-first/tooltip-component-first/tooltip-component/tooltip-component.component';
import { EventEmitterContainerComponent } from './event-emitter-container/event-emitter-container.component';
import { EventEmitterFirstComponent } from './event-emitter-container/components/event-emitter-first/event-emitter-first.component';
import { EventEmitterFirtsChildComponent } from './event-emitter-container/components/event-emitter-first/event-emitter-firts-child/event-emitter-firts-child.component';
import { EventEmitterSecondComponent } from './event-emitter-container/components/event-emitter-second/event-emitter-second.component';
import { StockstatusComponent } from './event-emitter-container/components/event-emitter-second/stockstatus/stockstatus.component';
import { ToastMessageContainerComponent } from './toast-message-container/toast-message-container.component';
import { ToastMessageFirstComponent } from './toast-message-container/toast-message-first/toast-message-first.component';
import { ToastMessageCreateComponent } from './toast-message-container/toast-message-create/toast-message-create.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'post', component: ServicesComponent, resolve: {
    post: HnResolver
    }
  },
  {path: 'post/:id', component: PostDetailsComponent, resolve: {
    post: ResolveDetailPost
    }
  },
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductsDetailsComponent }
  ]
  },
  { path: 'ngrx', component: NgrxComponent},
  { path: 'ngrx/1', component: NgrxFirstExampleComponent },
  { path: 'ngrx/2', component: NgrxSeondExampleComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'categoryFilter', component: CategoryFilterComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tooltip', component: TooltipComponentContainer },
  { path: 'tooltip-first', component: TooltipFirstComponent },
  { path: 'modal', component: ModalContainerComponent },
  { path: 'modal-first', component: ModalFirstComponent },
  { path: 'directive', component: DirectiveMainComponent },
  { path: 'eventemitter', component: EventEmitterContainerComponent },
  { path: 'eventemitter-firts', component: EventEmitterFirstComponent },
  { path: 'eventemitter-second', component: EventEmitterSecondComponent },
  { path: 'toast', component: ToastMessageContainerComponent },
  { path: 'toast.create', component: ToastMessageCreateComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    PostDetailsComponent,
    AuFaInputComponent,
    ModalComponent,
    ModalOpenDirective,
    NgrxComponent,
    NgrxFirstExampleComponent,
    NgrxSeondExampleComponent,
    TaxComponent,
    PaAddTaxPipe,
    PipeComponent,
    CategoryFilterComponent,
    CategoryFilterPipe,
    PaginationComponent,
    TooltipComponentContainer,
    TooltipFirstComponent,
    TooltipDirective,
    TooltipComponent,
    ModalContainerComponent,
    ModalFirstComponent,
    DirectiveMainComponent,
    DirectiveFirstDirective,
    TooltipComponentComponent,
    EventEmitterContainerComponent,
    EventEmitterFirstComponent,
    EventEmitterFirtsChildComponent,
    EventEmitterSecondComponent,
    StockstatusComponent,
    ToastMessageContainerComponent,
    ToastMessageFirstComponent,
    ToastMessageCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({
      message: simpleReducer,
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    HnResolver,
    HnService,
    ResolveDetailPost
  ],
  bootstrap: [AppComponent],
  entryComponents: [ TooltipComponent, TooltipComponentComponent ],
})
export class AppModule { }
