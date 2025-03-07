import httpErrors from "http-errors";
export const getUsers = async (req, res) => {
  //request handler // controller
  /*   const users = await DatabaseCollection.find() */
  res.send("I recieved get request on /users");
};
export const postUser = async (req, res, next) => {
  try {
    console.log(req.body);
    res.send("I received post request on /users");
  } catch (err) {
    next(httpErrors.BadRequest("request body is missing!"));

    // next() forwarding request
    // next(error) forwarding request along with error
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  // find user in the database depending on the id
  // if we will find that user , we update and send response back
  // if there is nko such user
  const user = null;
  if (user) {
    res.status(200).send("I received patch request on /users");
  } else {
    next(httpErrors.NotFound("no such user exist!"));
    /*  next(httpErrors(404, "no such user exist")); */
  }
};
