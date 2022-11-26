import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://root:root@ac-is9os0e-shard-00-00.w9novtl.mongodb.net:27017,ac-is9os0e-shard-00-01.w9novtl.mongodb.net:27017,ac-is9os0e-shard-00-02.w9novtl.mongodb.net:27017/flipkart?ssl=true&replicaSet=atlas-laitsy-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connect");
  } catch (err) {
    console.log(err);
  }
};
export default Connection;
