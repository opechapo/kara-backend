const Imagekit = require("imagekit");

const imagekit = new Imagekit({
  publicKey: "public_V73kbGeJSn6+c95OemDP7rT0cdQ=",
  privateKey: "private_w4T22+cUNAKZ9uPBs/UnJkaxE+g=",
  urlEndpoint: "https://ik.imagekit.io/bigq627wt/",
});

async function uploadImage(file) {
  console.log(file);

  const media = await imagekit.upload({
    folder: "images",
    file: file.data,
    fileName: `${new Date().toISOString()}.webp`,
    transformation: {
      pre: "lo-true,q-100,f-webp,w-350",
    },
  });

  return media.url;
}

module.exports = uploadImage;
