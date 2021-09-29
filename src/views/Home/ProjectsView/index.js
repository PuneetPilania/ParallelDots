import SearchBar from "../../../components/SearchBar";
import "./projectsView.css";
import Box from "@mui/material/Box";

function ProjectsView(props) {
  const { active_project } = props;

  return (
    <div className="projectsView__main">
      <p className="active_project_name">Active Projects</p>
      <SearchBar />
      {active_project &&
        active_project.map((project) => {
          return (
            <Box className="box">
              <div className="active_project_main">
                <div className="active_project_submain">
                  <p>{project.name}</p>
                  <p>{project.weeks} weeks</p>
                </div>
                <p>$ {project.budget}</p>
              </div>
              <div className="a_project_desc">
                <p>{project.desc}</p>
              </div>
            </Box>
          );
        })}
    </div>
  );
}

export default ProjectsView;
