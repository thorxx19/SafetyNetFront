import axios from 'axios';


const FIRE_URL = "http://localhost:9000/childAlert";

class FirestationService {

   getChildren = async(adress)=>{
      
      try {
         return await axios.get(FIRE_URL, { params: { address: adress } });
      } catch (error) {
         return 0
      } 
   }
}
export default new FirestationService();