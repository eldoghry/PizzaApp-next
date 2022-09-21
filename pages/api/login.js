import cookie from "cookie";

export default function handler(req, res) {
  const { method } = req;
  const { username, password } = req.body;

  if (method === "POST") {
    try {
      if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASSWORD
      ) {
        console.log("asdasdasdasd");
        res.setHeader(
          "Set-cookie",
          cookie.serialize("token", process.env.TOKEN, {
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
          })
        );

        res.status(202).json("Login successfuly");
      } else throw Exception("wrong credintails");
    } catch (error) {
      res.status(401).json(error);
    }
  }
}
