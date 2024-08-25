import Card from "./Cards/Card_1";
import Navbar from "./Navbar";
import "../../public/All.css";
import { useEffect, useState} from "react";
import axios from "axios";


function All(props) {

    

    const [projects,setProjects]=useState([]);

    useEffect(()=>{

      const config={
        withCredentials:true,
        headers:{
            "Content-Type":"application/json",
        }
      };
      const myFetch=async()=>{
        try{
          const {data}=await axios.get(`http://localhost:3000/project/getall`,config);
          setProjects(data.data);
          
  
        }
        catch(e){
          console.log(e);
          
        }
      }
      myFetch();
      
    },[])

  return (
    <div>
        <Navbar />
      <div className="card-container">
        {projects.map((project, index) => {
            return <Card key={index} title={project.title} summary={project.summary} img={project.icon[0].url} id = {project._id} password={project.password} />
        })}
      </div>
    </div>
  );
}

export default All;