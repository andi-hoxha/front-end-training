/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@go-prime/ui/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

import boardInstructions from 'assets/images/lecture1/board_instruction.png'
import boardInstructions2 from 'assets/images/lecture1/board_instruction_part_2.png'
import firstTask from 'assets/images/lecture1/first_task.png'
import editTask from 'assets/images/lecture1/edit_task.png'
import fetchNewBranch from 'assets/images/lecture1/fetch_new_branch.png'
import firstPush from 'assets/images/lecture1/first_push.png'

class WayOfWorking extends React.Component {
  render() {
    const { classes, section } = this.props
    const exercise = section.children[0]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Way of Working
          <Typography>During this training we are going to use the agile methodology and work as if we were following and doing an agile driven project. </Typography>
          <Divider />
        </Typography>
        <Typography>
          Before we explain the rules, make sure your GitLab Board (Under the Issues section) has the following Columns:
        </Typography>

        <Typography>
          <ul>
            <li>Open: We will consider this our backlog</li>
            <li>Doing: The assignments that are under progress</li>
            <li>Review: The assignments that are under review by your trainer or assistant</li>
            <li>Done: The assignments that are reviewed and merged</li>
          </ul>
        </Typography>
        <Typography variant={'p'}>
          <img src={boardInstructions}></img>
        </Typography>
        <Typography variant={'p'}>
          <img src={boardInstructions2}></img>
        </Typography>
        <Typography>
          These are the following rules of the game that we will follow throughout the training:
          <ol>
            <li>Each of the participants shall organise their own tasks at the GitLab board at the backlog section, as if he/she was working on a project.</li>
            <li>Each of the assignments will have to be written as a task in GitLab. Their acceptance criteria is the information of the assignment (it contains a description and a “Definition of Done”).  Add it initially at the open issues column.</li>
            <li>Every task will have its own feature branch that references the task.</li>
            <li>The participant will make all the necessary changes at the feature branch (multiple commits). In parallel, when this process starts, the participant will move the task to “doing”</li>
            <li>When the feature is ready to be merged back, the participant will perform a pull request. At this point, add the feature to “review” column.</li>
            <li>This pull request has to be then approved by the trainer/assistant in order for it to be merged and considered done. These are the steps on how this will proceed:
              <ol>
                <li>You will make the code changes that fulfill the definition of done for the respective task for which the branch is created</li>
                <li>You will do a pull request (See below for more information)</li>
                <li>If everything is ok, your trainer or assistant will approve and merge it, at this point you can consider it done, thus move it to done (at the GitLab board)</li>
                <li>Otherwise the trainer or assistant has disapproved your changes and provided feedback to the reason why. At this point, go back to step 1 and restart.</li>
              </ol>
            </li>
          </ol>
        </Typography>

        <Typography>
          Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
        </Typography>
        <Typography id={exercise.id} variant={'title'}>
          Exercise 1:
        </Typography>
        <Typography>
          Step 1: Create your first task with the title "Exercise 1" and add it at doing:
        </Typography>
        <Typography variant={'p'}>
          <img src={firstTask}></img>
        </Typography>
        <Typography>
          Step 2: Click the title of the task to go to its details page
        </Typography>
        <Typography variant={'p'}>
          <img src={editTask}></img>
        </Typography>
        <Typography>
          Step 3: Add the description: “In order to learn on how to exercise the way of working, I will change the “README.md” file to contain my name on it”
        </Typography>
        <Typography>
          Step 4: Create a pull (merge) request at GitLab
        </Typography>
        <Typography>
          Step 5: Go to Source Tree, and fetch all the remote branches
        </Typography>
        <Typography>
          Step 6: Double-click to jump to the new branch
        </Typography>
        <Typography variant={'p'}>
          <img src={fetchNewBranch}></img>
        </Typography>
        <Typography>
          Step 7: Perform the task, using VS Code -> Add your name at the READE.md file
        </Typography>
        <Typography>
          Step 8: On Source Tree, commit and push the changes!
        </Typography>
        <Typography variant={'p'}>
          <img src={firstPush}></img>
        </Typography>
        <Typography>
          Step 9: Wait for us to approve your merge request. Don't close it yourself. You are Done!
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(WayOfWorking)
