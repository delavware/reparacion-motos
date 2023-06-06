import { repair } from '../models/repair.model.js';

export const getRepairs = async (req, res) => {
  //Task: get all pending repairs
  const newRepair = await repair.findAll({
    where: {
      status: 'pending',
    },
  });
  //check if there are repairs
  if (!newRepair.length) {
    return res.status(400).json({
      status: 'error',
      message: 'No repair service found 😪',
    });
  }
  //send info to client
  return res.status(200).json({
    status: 'success',
    message: 'Repair service(s) found 😍',
    results: newRepair.length,
    newRepair,
  });
};

export const createRepair = async (req, res) => {
  try {
    //save info from client
    const { date, userId } = req.body;
    //create repair and store it in a variable
    const newRepair = await repair.create({
      date,
      userId,
    });

    return res.status(201).json({
      status: 'success',
      message: 'Repair service created 🤑',
      newRepair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'something went wrong',
    });
  }
};

export const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    // Check if status is not 'pending'

    const newRepair = await repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!newRepair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair service with id:${id} not found/not available to update😥`,
      });
    }
    const repairUpdated = await newRepair.update(
      { status },
      {
        where: {
          id,
          status: 'pending',
        },
      }
    );
    return res.status(200).json({
      status: 'success',
      message: `Repair service with id: ${id} has been updated to status 'completed'`,
      repairUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

export const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const newRepair = await repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!newRepair.status) {
      return res.status(404).json({
        status: 'error',
        message: `Repair service with id:${id} is not found`,
      });
    }

    await newRepair.update({ status: 'cancelled' });

    return res.status(200).json({
      status: 'success',
      message: `Repair service with id:${id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

export const getRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const newRepair = await repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!newRepair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair service with id:${id} not found`,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: `Repair service with id:${id} found 😍`,
      newRepair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Somenthing went wrong',
    });
  }
};
