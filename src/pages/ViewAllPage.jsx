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
      <div className="max-w-7xl mx-auto">
        <h1 className="capitalize text-lightPrimaryText dark:text-darkPrimaryText font-bold text-3xl md:text-5xl text-center md:text-left mb-8">
          {category} Projects
        </h1>

        {renderData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {renderData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClickOnImg(item.id)}
                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video w-full">
                  <img
                    src={item.imgpath}
                    alt={item.title || "Project thumbnail"}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg truncate">
                      {item.title || "Untitled Project"}
                    </h3>
                    {item.description && (
                      <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPage;
