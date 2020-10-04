
import { Component, OnInit } from '@angular/core';
import { Imovel } from '../models/imovel';
import { ImovelService } from '../services/imovel.service';
import { LocationService } from '../services/location.service';
import { QueryOptions } from '../services/query-options';

@Component({
  selector: 'app-imovel-mapa',
  templateUrl: './imovel-mapa.component.html',
  styleUrls: ['./imovel-mapa.component.css']
})
export class ImovelMapaComponent implements OnInit {


  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  //lat: number = -8.619084;
  //lng: number = -35.900808;

  lat: number
  lng: number

  imoveis: Imovel[]
  imovelSelected: Imovel

  iconRed
  iconYellow
  iconGreen
  iconUser

  visible

  origin: any;
  destination: any;
  rota: boolean

  btnRotaName: string

  distance: number;

  constructor(private imovelService: ImovelService, private locationService: LocationService) { }

  ngOnInit(): void {


        this.locationService.getLocation().then(pos =>{
          this.lat = pos.lat
          this.lng = pos.lng

          this.origin = {
            lat: this.lat,
            lng: this.lng
        };
        })

        this.visible = false
        this.iconUser = {

            path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
            fillColor: '#000000',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }

        this.iconRed = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#FF0000',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }

        this.iconYellow = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#FFCC00',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }

        this.iconGreen = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#004d00',
            fillOpacity: .9,
            strokeWeight: 0,
            scale: 1
        }



        this.imovelService.list(new QueryOptions).
                subscribe( imovel => {
                    this.imoveis = imovel
                    console.log(this.imoveis)
                });
  }



  setDestination(){
    this.destination = {
            lat: this.imovelSelected.latitude,
            lng: this.imovelSelected.longitude
        };
  }


  clickedMarker(imovel: Imovel, index: number) {
    this.changeVisible()
    this.imovelSelected = imovel

    console.log(`clicked the marker: ${imovel.nome || index}`)
  }

  mapClicked($event: MouseEvent) {

  }

  toString(value){
    return (value!=null?value.toString():"X")
  }

  getIcon(){

        return this.iconGreen

  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }




  changeVisible(){
    this.visible = true
  }


}



// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}


