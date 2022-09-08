import axios from 'axios';


const FIRE_URL = "http://localhost:9000/firestation";

class FirestationService {

   getFire = async(number)=>{
      
      try {
         return await axios.get(FIRE_URL, { params: { stationNumber: number } });
      } catch (error) {
         return 0
      } 
   }
}
export default new FirestationService();