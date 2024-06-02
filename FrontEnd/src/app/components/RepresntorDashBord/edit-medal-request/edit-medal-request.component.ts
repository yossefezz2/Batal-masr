import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from 'src/app/core/services/player.service';
import { RepresntorService } from 'src/app/core/services/represntor.service';
@Component({
  selector: 'app-edit-medal-request',

  templateUrl: './edit-medal-request.component.html',
  styleUrl: './edit-medal-request.component.scss'
})
export class EditMedalRequestComponent {
  model: any = {
    MedalAchievementDate: null,
    typeOfMedal: '',
    isWin: true,
    year: null,
    championshipID: null,
    description:''
  }
  model2: any = {
    MedalAchievementDate: null,
    typeOfMedal: '',
    isWin: true,
    year: null,
    championshipID: null,
  }

  reqId:any
  errMessage: string = '';
  isLoading: boolean = false;
  nameArray:any[] = [];
  selectedChampionshipInfo: string = "";
constructor(private _ActivatedRoute:ActivatedRoute,
  private _RepresntorService:RepresntorService,
  private _ToastrService:ToastrService,
private _Router:Router,
){}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (params) => {
      this.reqId = params.get('id');
      console.log(this.reqId);
      this._RepresntorService.getSingleMedalToAccept(this.reqId).subscribe({
        next:(res)=>{
          console.log(res.data.requestmadelToCompare[0].description);
          
        this.model.MedalAchievementDate=res.data.requestmadelToCompare[0].MedalAchievementDate;
          this.model.typeOfMedal=res.data.requestmadelToCompare[0].typeOfMedal;
          this.model.isWin=res.data.requestmadelToCompare[0].isWin;
          this.model.year=res.data.requestmadelToCompare[0].year;
          this.model.championshipID=res.data.requestmadelToCompare[0].championshipID;
          this.model.description=res.data.requestmadelToCompare[0].description;

          const originalDateString = this.model.MedalAchievementDate;
    const originalDate = new Date(originalDateString);
    
    const formattedDate = originalDate.toISOString().split('T')[0];
    this .model.MedalAchievementDate =formattedDate

/////////////////////////////////////////////////////////////////////////////////////////////////

        this.model2.MedalAchievementDate=res.data.singleMadelWantToCompare[0].MedalAchievementDate;
          this.model2.typeOfMedal=res.data.singleMadelWantToCompare[0].typeOfMedal;
          this.model2.isWin=res.data.singleMadelWantToCompare[0].isWin;
          this.model2.year=res.data.singleMadelWantToCompare[0].year;
          this.model2.championshipID=res.data.singleMadelWantToCompare[0].championshipID;
          const originalDateString2 = this.model2.MedalAchievementDate;
    const originalDate2 = new Date(originalDateString2);
    
    const formattedDate2 = originalDate2.toISOString().split('T')[0];
    this .model2.MedalAchievementDate =formattedDate2
        }
      })
    }
  });
  this._RepresntorService.getAllChampionships().subscribe({
    next: (res) => {
      let data = res.data

      for (let i = 0; i < data.length; i++) {
        this.nameArray.push(data[i])
        // this.nameArray.push(data[i].id+"-"+data[i].name +"-"+ data[i].typeOfChampionship +"-"+data[i].gender)

      }
      console.log(this.nameArray);

    }
  })


}
acceptReq(){
  this._RepresntorService.acceptEditMedal(this.reqId).subscribe({
    next:(res)=>{
      console.log(res);
      // this._Router.navigate(['/MangeIssues'])

      this._ToastrService.success('The Request has been Accepted ');


    },
    error:(err)=>{
      console.log(err);
      
      this.errMessage = err.error.data
    }
  })

}
rejectReq(){
  this._RepresntorService.rejectEditMedal(this.reqId).subscribe({
    next:(res)=>{
      console.log(res);
      // this._Router.navigate(['/MangeIssues'])

      this._ToastrService.success('The Request has been rejected ');


    },
    error:(err)=>{
      console.log(err);
      
      this.errMessage = err.error.data
    }
    
  })

}
onChampionshipChange() {
  const selectedChampionship = this.nameArray.find(item => item.id === this.model.championshipID);
  if (selectedChampionship) {
    this.selectedChampionshipInfo = "Name: " + selectedChampionship.name + " Type of championship: " + selectedChampionship.typeOfChampionship + " Gender: " + selectedChampionship.gender;
  } else {
    this.selectedChampionshipInfo = ""; // Clear the selected championship info if no championship is selected
  }
  console.log(selectedChampionship);
}
}
