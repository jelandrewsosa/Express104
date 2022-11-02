export default function CheckIfValidEmail(req, res, next) {
  const {email} = req.body;

  if (!email.includes("@")) {
    console.log(email);
    return res.status(422).json({
      error: "Email Address is Invalid",
    });
  }
  next();
}

