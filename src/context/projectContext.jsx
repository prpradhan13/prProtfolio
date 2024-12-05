/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../utils/supabase';

const ProjectContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProject = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
    const [projectData, setProjectData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data, error } = await supabase
            .from('projectData')
            .select('*');
  
          if (error) {
            console.error('Error fetching data:', error);
          } else {
            setProjectData(data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <ProjectContext.Provider value={{ projectData }}>
        {children}
      </ProjectContext.Provider>
    );
  };