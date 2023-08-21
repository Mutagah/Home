import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home page"
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: "Home Details"
    },
    {
        path: 'post',
        component: PostComponent,
        title : "Post page"
    }
];
export default routeConfig;
