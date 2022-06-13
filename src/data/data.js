// categories.catName and projects.categories have to match for the project to show under that category in the navigation.
const data = {
  categories: [
    {
      catId: 1,
      catName: 'home',
      shortDisplay: 'Home',
      displayName: 'Home',
      subCategory: false,
    },
    {
      catId: 2,
      catName: 'contact',
      shortDisplay: 'Contact',
      displayName: 'Contact',
      subCategory: false,
    },
    {
      catId: 3,
      catName: 'about',
      shortDisplay: 'About',
      displayName: 'About',
      subCategory: false,
    },
    {
      catId: 4,
      catName: 'projects',
      shortDisplay: 'Projects',
      displayName: 'Projects',
      subCategory: false,
    },
    {
      catId: 5,
      catName: 'app',
      shortDisplay: 'Apps',
      displayName: 'Full Stack Applications',
      subCategory: true,
    },
    {
      catId: 6,
      catName: 'game',
      shortDisplay: 'Games',
      displayName: 'Games',
      subCategory: true,
    },
    {
      catId: 7,
      catName: 'creative',
      shortDisplay: 'Creative',
      displayName: 'Creative Development',
      subCategory: true,
    },
  ],
  projects: [
    {
      id: 15,
      projectName: 'example 1',
      title: 'Example 1',
      tagLine: 'An example of a full stack web application.',
      tech: ['reactJS', 'node', 'html5', 'css3', 'heroku'],
      role: [
        'reactJS',
        'Node',
        'html5',
        'css3',
        'javascript',
        'heroku',
        'express',
        'schema',
        'sequelize',
        'postgres',
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      design: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      features: [
        'Example feature 1',
        'Example feature 2',
        'Example feature 3',
        'Example feature 4',
        'Example feature 5',
      ],
      links: { gitHub: 'https://github.com/', live: 'https://www.example.com' },
      images: { prevImgName: 'portfolio', prevImg: '800x400.png' },
      categories: ['app', 'creative'],
      featured: true,
    },
    {
      id: 16,
      projectName: 'example 2',
      title: 'Example 2',
      tagLine: 'A game made using various technology',
      tech: [
        'reactJS',
        'Node',
        'html5',
        'css3',
        'javascript',
        'heroku',
        'express',
        'schema',
        'sequelize',
        'postgres',
      ],
      role: ['Developer', 'UI/UX Design', 'Graphic Design'],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      design: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      features: [
        'Example feature 1',
        'Example feature 2',
        'Example feature 3',
        'Example feature 4',
        'Example feature 5',
      ],
      links: { gitHub: 'https://github.com/', live: 'https://www.example.com' },
      images: { prevImgName: 'portfolio', prevImg: '800x400.png' },
      categories: ['game'],
      featured: true,
    },
    {
      id: 17,
      projectName: 'example 3',
      title: 'Example 3',
      tagLine: 'An example project',
      tech: [
        'reactJS',
        'Node',
        'html5',
        'css3',
        'javascript',
        'heroku',
        'express',
        'schema',
        'sequelize',
        'postgres',
      ],
      role: ['Developer', 'UI/UX Design', 'Graphic Design'],
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      design: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      features: [
        'Example feature 1',
        'Example feature 2',
        'Example feature 3',
        'Example feature 4',
        'Example feature 5',
      ],
      links: { gitHub: 'https://github.com/', live: 'https://www.example.com' },
      images: { prevImgName: 'portfolio', prevImg: '800x400.png' },
      categories: ['app', 'creative'],
      featured: true,
    },
    {
      id: 18,
      projectName: 'example 4',
      title: 'Example 4',
      tagLine: 'A design example',
      tech: [
        'reactJS',
        'Node',
        'html5',
        'css3',
        'javascript',
        'heroku',
        'express',
        'schema',
        'sequelize',
        'postgres',
      ],
      role: ['Developer', 'UI/UX Design', 'Graphic Design'],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      design: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      features: [
        'Example feature 1',
        'Example feature 2',
        'Example feature 3',
        'Example feature 4',
        'Example feature 5',
      ],
      links: { gitHub: 'https://github.com/', live: 'https://www.example.com' },
      images: { prevImgName: 'portfolio', prevImg: '800x400.png' },
      categories: ['app', 'creative'],
      featured: false,
    },
  ],
};

export const getProjects = () => {
  return data.projects;
};
export const getCategories = () => {
  return data.categories;
};
export const getCategoryDisplayNames = () => {
  const catArray = [];
  data.categories.forEach((category) => catArray.push(category.displayName));
  return catArray;
};
export function getCategoriesFromProjects(projects) {
  return projects
    .reduce((acc, project) => {
      console.log(acc, project.category);
      return [...new Set([...acc, ...([project.category] || [])])];
    }, [])
    .sort();
}
export default data;
