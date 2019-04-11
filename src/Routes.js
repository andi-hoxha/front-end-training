import { PAGES } from 'Constants'

const routes = [
  {
    display: 'Home',
    id: PAGES.HOME,
  },
  {
    display: 'Plan Program',
    id: PAGES.PLAN_PROGRAM
  },
  {
    display: 'Lecture 1',
    id: PAGES.LECTURE_1.ID,
    children: [
      {
        display: 'Getting Started',
        id: PAGES.LECTURE_1.GETTING_STARTED,
        children: [
          {
            display: 'GitLab',
          },
          {
            display: 'Source Tree'
          },
          {
            display: 'VS Code'
          },
          {
            display: 'MongoDB'
          },
          {
            display: 'NPM'
          },
        ]
      },
      {
        display: 'Project Setup',
        id: PAGES.LECTURE_1.PROJECT_SETTUP,
        children: [
          {
            display: 'Running the Application'
          }
        ]
      },
      {
        display: 'Agile Methodology',
        id: PAGES.LECTURE_1.AGILE_METHODOLOGY,
        children: [
          {
            display: 'Scrum'
          }
        ]
      },
      {
        display: 'Way of Working',
        id: PAGES.LECTURE_1.WAY_OF_WORKING,
        children: [
          {
            display: 'Exercise 1'
          }
        ]
      }
    ]
  },
  {
    display: 'Lecture 2',
    id: PAGES.LECTURE_2.ID,
    children: [
      {
        display: 'JavaScript'
      },
      {
        display: 'ReactJS'
      },
      {
        display: 'Project Structure'
      }
    ]
  },
  {
    display: 'Glossary',
    id: PAGES.GLOSSARY,
  },
  {
    display: 'Resources',
    id: PAGES.RESOURCES,
  }
]

const format = (which) => {
  let children = which.children || []
  return {
    ...which,
    id: !which.id ? which.display.replace(' ', '').toLowerCase() : which.id,
    children: children.map(format)
  }
}

export const findById = (id) => {
  return routes.reduce((flatten, next) => {
    let children = next.children || []
    return [...flatten, next, ...children]
  }, []).find(which => which.id === id)
}

/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
export default routes.map(format)


