const createError = require("http-errors");
const { Event } = require("../../models");
const { updateEventValidation } = require("../../validations");

module.exports = async (req, res, next) => {
  try {
    const getParamsId = req.params.id;

    const { _id, ...data } = await updateEventValidation.validateAsync({
      _id: getParamsId,
      ...req?.body,
    });

    // continue processing the request if validation passes
    try {
      await Event.findByIdAndUpdate(_id, data, { new: true });

      return res.status(200).json({
        statusCode: 200,
        message: "Update event Successfully",
      });
    } catch (err) {
      return next(createError(err));
    }
  } catch (error) {
    console.error("error update", error?.message);
    return next(createError.BadRequest(error?.message));
  }
};
