//登录相关接口请求
import request from '@/utils/request'
//获取图形验证码
export const getPicCode = () => {
  return request.get("/captcha/image")
}

//获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/api/mall-api/sms/getMobileVerificationCode',
      {
        mobile: mobile
      })
}

//登录接口
export const codeLogin = (mobile, smsCode) => {
  return request.post('/api/mall-api/login', {
      mobile,
      smsCode
  })
}