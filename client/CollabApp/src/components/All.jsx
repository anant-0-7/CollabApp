import Card from "./Card";
import Navbar from "./Navbar";
import "../../public/All.css";


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