import hyRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法 /users/id(如1)
  UserMenus = '/role/' // 用法：/role/id(如1)/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
