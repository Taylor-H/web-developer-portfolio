import React, { useState, useEffect} from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { getProjects, getCategories } from '../../data/data.js';
import { SiteIcon, CaretIconBlack } from '../Styled';

export const Sidebar = (props) => {
  const params = useParams();
  const viewWidth = window.innerWidth;
  const { projectId } = params;
  const [dropdownOpen, setDropdownOpen] = useState({});
  // console.log('sidebar props', props);
  const categories = getCategories();
  const projects = getProjects();

  const onToggleHeader = (category) => {
    if (dropdownOpen[category.catName]) {
      setDropdownOpen((prev) => ({
        ...prev,
        [category.catName]: false,
      }));
    } else {
      setDropdownOpen((prev) => ({
        ...prev,
        [category.catName]: true,
      }));
    }
  };
  const onCollapseCategories = () => {
    setDropdownOpen({});
  };
  const toggleSection = (category) => {
    onToggleHeader(category);
    closeMenu();
  };
  const closeMenu = () => {
    viewWidth < 901 ? props.setOpen(false) : props.setOpen(true);
  };
  useEffect(() => {
    const currentProject = projects.find((project) => project.id === projectId);
    if (currentProject?.categories) {
      const currentCategories = currentProject.categories;
      currentCategories.reduce((acc, val) => ({ ...acc, [val]: true }), {});
      setDropdownOpen((prev) => ({
        ...prev,
        ...currentCategories,
      }));
    }
  }, [projects, projectId]);

  return (
<aside className="sidebar">
  <div className="categories">
    {categories.map((category) => category.subCategory ? (
    <React.Fragment key={category.catName}>
      <button className="category nowrap title" onClick={()=> onToggleHeader(category)}>
        <CaretIconBlack position={dropdownOpen[category.catName] ? 'down' : 'right' }/>
        <div className="sub-category" >
          {category.displayName}
        </div>
      </button>
      <nav className={!dropdownOpen[category.catName] ? 'collapsed' : 'active'}>
        {projects.filter((project) => (project.categories || []).includes(category.catName)).map((project) => {
        return (
          <Link
            key={project.projectName}
            className={project.id === projectId ? 'active' : 'notactive'}
            to={`/projects/${project.id}`} onClick={() => closeMenu()}>
            <div className="file-div">
              <div className="icon">
                <SiteIcon />
              </div>
              <span className="project__text">
                <b className="nowrap">{project.title}</b>&nbsp;
                {project.tagLine}
              </span>
            </div>
          </Link>
        );
        })}
      </nav>
    </React.Fragment>
    ) : (
    <React.Fragment key={category.catName}>
      <button className="category nowrap border-bottom" onClick={()=> toggleSection(category)}>
        <div className="site-link">
          <NavLink to={`/${ category.catName === 'home' ? '' : category.catName }`}>
            {category.displayName}
          </NavLink>
        </div>
      </button>
    </React.Fragment>
    )
    )}
  </div>
  </aside>
  );
  };
  export default Sidebar;
