export interface User {
  _id:number;
  username:string;
  //fullname:string;
  //email:string;
  //country:string;
  //team_id:number;
  //solved_tasks:number[];
  roles: string[];
  isAdmin: boolean;
}
