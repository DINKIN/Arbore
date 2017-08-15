// @flow
import ChatRoomList from 'models/ChatRoomList'
import ContactList from 'models/ContactList'
import GlobalError from 'models/GlobalError'
import Profile from 'models/Profile'
import Settings from 'models/Settings'
import ShareList from 'models/ShareList'
import UiState from 'models/UiState'

export type Action<T> = {
  type: string,
  payload: T,
} | {
  type: string,
  error: ?boolean
}

export type Store = {
  chatRoomList: ChatRoomList,
  contactList: ContactList,
  globalError: ?GlobalError,
  profile: Profile,
  settings: Settings,
  shareList: ShareList,
  ui: UiState
}
