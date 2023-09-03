import { Component } from '@angular/core';
import { Functionality } from 'src/app/models/functionality';
import { Subscription, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FunctionalitiesService } from 'src/app/services/functionalities.service';
import { CONFIG } from 'src/app/config';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.scss']
})
export class FunctionalitiesComponent {
    projectId : string ='';
    functionalities: Functionality[] = [];
    private subscription: Subscription = new Subscription();

    constructor(private route: ActivatedRoute, private functionalitiesService: FunctionalitiesService ){
    }

    ngOnInit(){
      this.projectId = this.route.snapshot.paramMap.get('id') || '';
      this.getFunctionalities()
    };
    getFunctionalities(): void {
      let url = `${CONFIG.getFunctionalities}${this.projectId}`
      this.functionalitiesService.getFunctionalities(url);
    }

}
