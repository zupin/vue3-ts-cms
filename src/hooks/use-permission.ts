import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`

  // name = 'why'
  // !name -> false
  // !!name -> true
  return !!permissions.find((item) => item === verifyPermission)
  // return Boolean(permissions.find((item) => item === verifyPermission))
}
