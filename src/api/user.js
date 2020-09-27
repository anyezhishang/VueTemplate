import axios from 'axios'
import Url from '../utils/url';

// 财务绩效系统登录接口
const apiUserLogin = (ruleForm) => {
  return new Promise((resolve, reject) => {
    axios.post(Url.UserLogin, ruleForm)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      });
  })
}

// 财务绩效系统单点登录
const apiUserSso = (accounts) => {
  return new Promise((resolve, reject) => {
    axios.get(Url.UserSso, {
        params: {
          accounts
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      });
  })
}

// 根据Token获取用户信息
const apiGetTokenUser = (token) => {
  return new Promise((resolve, reject) => {
    axios.get(Url.GetTokenUser, {
        params: {
          token
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      });
  })
}

// 查询用户列表
const apiGetUserList = (name) => {
  return new Promise((resolve, reject) => {
    axios.post(Url.GetUserList, {
        name
      })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      });
  })
}

// 修改密码
const apiChangePassword = ({
  accounts,
  oldPassword,
  password
}) => {
  return new Promise((resolve, reject) => {
    axios.post(Url.ChangePassword, {
        accounts,
        oldPassword,
        password
      })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      });
  })
}

export {
  apiUserLogin,
  apiUserSso,
  apiGetTokenUser,
  apiGetUserList,
  apiChangePassword
}
