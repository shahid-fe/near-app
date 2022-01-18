export interface SideNavType {
  expanded: string[]
  isOpened: boolean
}

export type UIState = {
  modalName: string
  sideNav: SideNavType
  loadingState: string
  successNotificationMessage: string
}
