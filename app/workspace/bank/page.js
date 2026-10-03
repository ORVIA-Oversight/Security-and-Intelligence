import MasterBankExplorer from '../../../components/MasterBankExplorer';
import {loadMasterBank} from '../../../lib/masterBank';

export const metadata={
  title:'Master Evidence Challenge Bank',
  description:'ORVIA Master Core 500 evidence-review question bank and mandatory controls.',
  robots:{index:false,follow:false}
};

export default function Page(){
  const bank=loadMasterBank();
  return <MasterBankExplorer bank={bank}/>;
}
