import {addPostAC, changeNewPostTextAC, profileReducer} from './profile-reducer';
import {changeNewMessageTextAC, dialogsReducer, sendMessageAC} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}


type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type SidebarType = {}

type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>


type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post!!!', likesCount: 20},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Alina'},
                {id: 3, name: 'Mark'},
                {id: 4, name: 'Pavel'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Sergei'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'What\'s up!'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: ''
        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },


    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}
