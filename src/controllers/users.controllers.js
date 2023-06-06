import { repair } from '../models/repair.model.js';
import { user } from '../models/user.model.js';

export const getUsers = async (req, res) => {
  const newUser = await user.findAll({
    where: {
      status: 'available',
    },
  });

  if (!newUser.length) {
    return res.status(400).json({
      status: 'error',
      message: 'No users found 😭',
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'User(s) found 😍',
    results: newUser.length,
    newUser,
  });
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    //!challenge 1
    //check if it already exists by email
    const existingUserByEmail = await user.findOne({ where: { email } });
    if (existingUserByEmail) {
      return res.status(409).json({
        status: 'error',
        message: `A user with this email: ${email} already exists 😨`,
      });
    }

    const newUser = await user.create({
      name,
      email,
      password,
      role,
    });

    return res.status(201).json({
      message: 'The user has been created 😍',
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong 😪',
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    //fields to update, info from client
    const { name, email } = req.body;
    //look for product to update
    const newUser = await user.findOne({
      where: {
        id,
        status: 'available',
      },
    });
    //check if user exists
    if (!newUser) {
      return res.status(404).json({
        status: 'error',
        message: `User with id: ${id} not found 😪`,
      });
    }
    //updating
    const userUpdated = await newUser.update(
      { name, email },
      {
        where: {
          id,
          status: 'available',
        },
      }
    );
    //send new info to client
    return res.status(200).json({
      status: 'success',
      message: `User with id: ${id} has been updated`,
      userUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await user.findOne({
      where: {
        id,
        status: 'available',
      },
    });

    //check if user exists
    if (!newUser) {
      return res.status(404).json({
        status: 'error',
        message: `User with id:${id} not found`,
      });
    }
    //deleting 'virtually'
    //update status to 'cancelled'
    await newUser.update({ status: 'cancelled' });
    //send response to client
    return res.status(200).json({
      status: 'success',
      message: `User with id:${id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const newUser = await user.findOne({
      where: {
        id,
        status: 'available',
      },
    });
    //check if user exists
    if (!newUser) {
      return res.status(404).json({
        status: 'error',
        message: `User with id:${id} not found`,
      });
    }
    //send response to client
    return res.status(200).json({
      status: 'success',
      message: `User with id:${id} found 😍`,
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Somenthing went wrong',
    });
  }
};

export const getUsersRepairs = async (req, res) => {
  try {
    const { id } = req.params;
    const newRepair = await repair.findAll({
      where: {
        userId: id,
      },
    });
    if (!newRepair.length) {
      return res.status(404).json({
        status: 'error',
        message: `No repair services made by the user with id:${id}`,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: `Getting all repair services made by user ${id}`,
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
