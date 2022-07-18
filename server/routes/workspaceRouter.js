const express = require('express');
const router = express.Router();

const WorkspaceController = require('../controllers/WorkspaceController');

// Create a workspace in the database
router.post('/', WorkspaceController.createWorkspace, 
  (req, res) => res.status(201).json(res.locals.newWorkspace));

// Gets a workspace from the database
router.get('/:workspace_id', WorkspaceController.getWorkspace,
  (req, res) => res.status(200).json(res.locals.workspace));

//Gets a workspace from a zipcode search
router.get('/:zipcodeSearch', WorkspaceController.getWorkspaceByZip,
  (req, res) => res.status(200).json(res.locals.workspace));

// Deletes a workspace from the database
router.delete('/:workspace_id', WorkspaceController.deleteWorkspace,
  (req, res) => res.status(200).json(res.locals.deletedWorkspace));


module.exports = router;