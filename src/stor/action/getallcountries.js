import { axiosInstance } from "../../Network"

export const GetAllCounties = (data)=> async (dipatch)=>{
    
      const respons= await axiosInstance.get(`/${data}`)
      console.log(respons.data)
      console.log("ffrom action")
      dipatch({
          type:'GetData',
          payload:respons.data
      })
 
    
}
 

  


export default GetAllCounties ;
