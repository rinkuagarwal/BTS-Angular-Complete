import { PRIORITY } from './PRIORITY';
import { TYPE } from './TYPE';
import { STATUS } from './STATUS';
import { SEVERITY } from './SEVERITY';
export class Bug{
  name:string='';
  projectId:string='';
  module:string='';
  product:string='';
  synopsis:string='';
  description:string='';
  eta:Date=new Date();
  id:string='';
  priority:string='LOW';
  type:string='COMPILETIME';
  status:string='NEW';
  severity:string='MILD';
  buildVersion:string='';
}

