const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repository");
const AppError = require("../utils/error/app-error");
const userRepository = new UserRepository();

async function create(data) {
  try {
    const user = await userRepository.create(data);

    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      console.log(error);
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "cannot create new user object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getDetails() {
  try {
    const user = await userRepository.getAll();

    if (!user) {
      throw new AppError("User not found", StatusCodes.NOT_FOUND);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Error retrieving user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getDetail(id) {
  try {
    const user = await userRepository.get(id);

    if (!user) {
      throw new AppError("User not found", StatusCodes.NOT_FOUND);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Error retrieving user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function destroydetail(id) {
  try {
    const user = await userRepository.destroy(id);

    if (!user) {
      throw new AppError("User not found", StatusCodes.NOT_FOUND);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Error retrieving user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getUpdate(id, data) {
  try {
    const user = await userRepository.update(id, data);

    if (!user) {
      throw new AppError("User not found", StatusCodes.NOT_FOUND);
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Error retrieving user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  create,
  getDetails,
  getDetail,
  destroydetail,
  getUpdate,
};
