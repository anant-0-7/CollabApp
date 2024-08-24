import Card from "./Card";
import Navbar from "./Navbar";
import "../../public/All.css";
import { useEffect } from "react";
import axios from "axios";


function All(props) {

    const projects = [

        {
            title: "Lorem Ipsum",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.",
            img: "https://picsum.photos/50"
        },
        {
            title: "Lorem Ipsum",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.",
            img: "https://picsum.photos/50"
        },
        {
            title: "Lorem Ipsum",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.",
            img: "https://picsum.photos/50"
        },
        {
            title: "Lorem Ipsum",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.",
            img: "https://picsum.photos/50"
        }
    ]
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
          console.log(data.data);
          
  
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
            return <Card key={index} title={project.title} summary={project.summary} img={project.icon[0].url} id = {index} />
        })}
      </div>
    </div>
  );
}

export default All;