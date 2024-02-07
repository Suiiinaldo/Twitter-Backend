import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import { BUCKET_NAME, AWS_ACCESS_ID, AWS_SECRET_KEY } from "./server-config.js";

aws.config.update({
    region: 'ap-south-1',
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_ID,
})

const s3 = new aws.S3;

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: BUCKET_NAME,
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  });

export default upload;