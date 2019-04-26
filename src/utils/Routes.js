import { PAGES } from 'Constants'

const routes = [
  {
    display: 'Home',
    id: PAGES.HOME,
  },
  {
    display: '1. Setup and Introduction',
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
            display: 'Slack'
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
            display: 'Seting up the repository'
          },
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
        display: 'Working with GIT (Source Tree or Terminal)',
        id: PAGES.LECTURE_1.WORKING_WITH_GIT,
        children: [
          {
            display: 'Workflow'
          },
          {
            display: 'Add & Commit'
          },
          {
            display: 'Pushing Changes'
          },
          {
            display: 'Branching'
          },
          {
            display: 'Update and Merge'
          }
        ]
      },
      {
        display: 'Way of Working',
        id: PAGES.LECTURE_1.WAY_OF_WORKING,
        children: [
          {
            display: 'GitLab Setup',
          },
          {
            display: 'Rules',
          },
          {
            display: 'Exercise 1'
          }
        ]
      }
    ]
  },
  {
    display: '2. Javascript and React (Part 1)',
    id: PAGES.LECTURE_2.ID,
    children: [
      {
        id: PAGES.LECTURE_2.JAVASCRIPT,
        display: 'JavaScript'
      },
      {
        id: PAGES.LECTURE_2.REACT,
        display: 'ReactJS',
        children: [
          {
            display: 'Introduction',
          },
          {
            display: 'Tic Tac Toe',
          }
        ]
      }
    ]
  },
  {
    display: '3. Javascript and React (Part 2)',
    id: PAGES.LECTURE_3.ID,
    children: [
      {
        id: PAGES.LECTURE_3.TIC_TAC_TOE_RECAP,
        display: 'Tic Tac Toe Recap'
      },
      {
        id: PAGES.LECTURE_3.REACT_FUNCTIONAL_COMPONENTS,
        display: 'ReactJS Functional Components (state-less)',
        children: [
          {
            display: 'Rendering Components',
          },
          {
            display: 'Composing Components',
          },
          {
            display: 'Component Extraction',
          },
          {
            display: 'Read Only Props',
          },
        ]
      },
      {
        id: PAGES.LECTURE_3.REACT_PART_TWO,
        display: 'ReactJS Lifecycle, Props and State',
        children: [
          {
            display: 'render',
          },
          {
            display: 'componentDidMount'
          },
          {
            display: 'shouldComponentUpdate'
          },
          {
            display: 'componentDidUpdate'
          },
          {
            display: 'componentWillUnmount'
          },
          {
            display: 'others'
          }
        ]
      },
      {
        id: PAGES.LECTURE_3.PROJECT_STRUCTURE,
        display: 'Project Structure'
      },
      {
        id: PAGES.LECTURE_3.ASSIGNMENTS,
        display: 'Assignments',
        children: [
          {
            display: 'Graph Functions'
          },
          {
            display: 'Binary Search Sort'
          }
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_4.ID,
    display: '4. Javascript and React (Part 3)',
    children: [
      {
        id: PAGES.LECTURE_4.HANDLING_EVENTS,
        display: 'Handling Events',
        children: [
          {
            display: 'Passing Arguments to Event Handlers'
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.CONDITIONAL_RENDERING,
        display: 'Conditional Rendering',
        children: [
          {
            display: 'Element Variables'
          },
          {
            display: 'Inline Conditional with Operators',
          },
          {
            display: 'Prevent Components from Rendering',
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.FORMS,
        display: 'Forms',
        children: [
          {
            display: 'Controlled Components'
          },
          {
            display: 'Other Tags'
          },
          {
            display: 'Controlled Input Null Value'
          },
          {
            display: 'Uncontrolled Components'
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.COMPOSITION_INHERITANCE,
        display: 'Composition vs Inheritance',
        children: [
          {
            display: 'Containement'
          },
          {
            display: 'Specialization'
          },
          {
            display: 'So What About Inheritance?'
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.EXERCISE,
        display: 'Exercise'
      },
      {
        id: PAGES.LECTURE_4.ASSIGNMENTS,
        display: 'Assignments'
      }
    ]
  },
  {
    display: 'Materials',
    id: PAGES.SUPPORT.ID,
    children: [
      {
        display: 'Plan Program',
        id: PAGES.SUPPORT.PLAN_PROGRAM
      },
      {
        display: 'Glossary',
        id: PAGES.SUPPORT.GLOSSARY,
      },
      {
        display: 'Resources',
        id: PAGES.SUPPORT.RESOURCES,
      },
      {
        display: 'Tips and Tricks',
        id: PAGES.SUPPORT.TIPS_AND_TRICKS,
        children: [
          {
            display: 'Debugging'
          },
          {
            display: 'Logging'
          },
          {
            display: 'React Dev Tools'
          }
        ]
      },
    ]
  },
  {
    display: 'Playground',
    id: PAGES.PLAYGROUND,
  },
]

const format = (which) => {
  let children = which.children || []
  return {
    ...which,
    id: !which.id ? which.display.replace(/ /g, '').toLowerCase() : which.id,
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


