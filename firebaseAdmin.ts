import admin from "firebase-admin";

const serviceAccount = require("./next-firebase-auth-examp-e5e16-firebase-adminsdk-g2u4f-622d64e2e0.json");

/**
 * @description Firebase Admin SDKを扱うためのオブジェクト
 * @note バックエンドのみで使用可能
 */
export const firebaseAdmin =
  admin.apps[0] ||
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
