import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServersService } from '../servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private router :Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }
  onReload(){
// this.router.navigate(['servers',{relativeTo:this.route}]);
  }

}
