const { GoogleGenerativeAI } = require("@google/generative-ai");
const User = require('../model/user');
const generate = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI("AIzaSyBYJtpcDRb5Yr5HR_d00bhHMHwj5AlaSZY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    if (!req.body.prompt) {
      return res.json({ message: "Error" });
    }

    const prompt = "Give me answer in less than 3 sentence" + req.body.prompt;


    const result = await model.generateContent(prompt);
    console.log(result)
    res.json({ text: result.response.text() });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "An error occurred while generating content." });
  }
}

const registerUser = async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ message: "Check Email or Password" });
  }
  try {
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({ message: "Already Registered" });
    }
    const user = await User(req.body);
    user.save();
    return res.json({message:"Registered Successfully"});
  }
  catch (err) {
    return res.status(400).json({ message: "Error" });
  }

}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
      return res.status(400).json({message:"Check Email or Password"});
    }
    const user = await User.findOne({ email: email});
    if(!user){
      return res.status(400).json({message:"User does not exists"});
    }
    else{
      if (user.password == password) return res.json({ message:"Login Successfull" });
      else return res.status(400).json({ message:"Invalid Password" });
    }
  }
  catch (err) {
    return res.json({message:"Error"});
  }

}

module.exports = { generate, registerUser, loginUser }