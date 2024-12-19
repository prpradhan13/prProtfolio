import { useNavigate, useParams } from "react-router-dom";
import { useProject } from "../context/projectContext";

const ViewAllPage = () => {
  const { projectData } = useProject();
  const { category } = useParams();

  const navigate = useNavigate();

  const renderData = projectData.filter((data) => data.category === category);

  const handleClickOnImg = (id) => {
    navigate(`/projectPreview/${id}`);
  }

  return (
    <div className="bg-lightBg dark:bg-darkBg min-h-screen p-6 md:p-10 font-montserrat">
      <div>
        <h1 className="capitalize text-lightPrimaryText dark:text-darkPrimaryText font-semibold text-3xl md:text-5xl text-center md:text-left">
          {" "}
          {category} projects{" "}
        </h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
          {renderData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClickOnImg(item.id)}
              className="w-[300px] h-[170px] bg-slate-300 rounded-xl overflow-hidden hover:scale-105 ease-linear duration-200"
            >
              <img
                src={item.imgpath}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllPage;
