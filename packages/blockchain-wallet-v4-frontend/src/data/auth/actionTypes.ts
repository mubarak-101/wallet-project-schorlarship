// LOGIN
export const LOGIN = 'LOGIN'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SET_FIRST_LOGIN = 'SET_FIRST_LOGIN'
export const LOGIN_ROUTINE_SAGA = 'LOGIN_ROUTINE_SAGA'

// LOGOUT
export const LOGOUT = 'LOGOUT'
export const LOGOUT_CLEAR_REDUX_STORE = 'LOGOUT_CLEAR_REDUX_STORE'
export const START_LOGOUT_TIMER = 'START_LOGOUT_TIMER'
export const PING_MANIFEST_FILE = 'PING_MANIFEST_FILE'
export const SET_MANIFEST_FILE = 'SET_MANIFEST_FILE'

// MOBILE LOGIN
export const MOBILE_LOGIN = 'MOBILE_LOGIN'
export const MOBILE_LOGIN_START = 'MOBILE_LOGIN_START'
export const MOBILE_LOGIN_FINISH = 'MOBILE_LOGIN_FINISH'

// REGISTER
export const REGISTER = 'REGISTER'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const REGISTER_LOADING = 'REGISTER_LOADING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

// RESET ACCOUNT (ASSIGN NABU ACCOUNT TO NEW WALLET)
export const RESET_ACCOUNT = 'RESET_ACCOUNT'
export const RESET_ACCOUNT_FAILURE = 'RESET_ACCOUNT_FAILURE'
export const RESET_ACCOUNT_LOADING = 'RESET_ACCOUNT_LOADING'
export const RESET_ACCOUNT_SUCCESS = 'RESET_ACCOUNT_SUCCESS'
export const SET_RESET_ACCOUNT = 'SET_RESET_ACCOUNT'

// 2FA
export const RESEND_SMS_CODE = 'RESEND_SMS_CODE'

// WALLET RESTORE
export const RESTORE = 'RESTORE'
export const RESTORE_FAILURE = 'RESTORE_FAILURE'
export const RESTORE_LOADING = 'RESTORE_LOADING'
export const RESTORE_SUCCESS = 'RESTORE_SUCCESS'

// WALLET RESTORE FROM METADATA
export const RESTORE_FROM_METADATA = '@EVENT.AUTH.RESTORE_FROM_METADATA'
export const RESTORE_FROM_METADATA_LOADING = '@EVENT.AUTH.RESTORE_FROM_METADATA_LOADING'
export const RESTORE_FROM_METADATA_SUCCESS = '@EVENT.AUTH.RESTORE_FROM_METADATA_SUCCESS'
export const RESTORE_FROM_METADATA_FAILURE = '@EVENT.AUTH.RESTORE_FROM_METADATA_FAILURE'

// MOBILE AUTH CHANNEL LOGIN
export const SECURE_CHANNEL_LOGIN_FAILURE = 'SECURE_CHANNEL_LOGIN_FAILURE'
export const SECURE_CHANNEL_LOGIN_LOADING = 'SECURE_CHANNEL_LOGIN_LOADING'
export const SECURE_CHANNEL_LOGIN_SUCCESS = 'SECURE_CHANNEL_LOGIN_SUCCESS'
export const SECURE_CHANNEL_LOGIN_NOTASKED = 'SECURE_CHANNEL_LOGIN_NOTASKED'

// LOGIN
export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR'

// INITIALIZE LOGIN
export const INITIALIZE_LOGIN = 'INITIALIZE_LOGIN'
export const INITIALIZE_LOGIN_FAILURE = 'INITIALIZE_LOGIN_FAILURE'
export const INITIALIZE_LOGIN_LOADING = 'INITIALIZE_LOGIN_LOADING'
export const INITIALIZE_LOGIN_SUCCESS = 'INITIALIZE_LOGIN_SUCCESS'

// LOGIN GUID REMINDER
export const TRIGGER_WALLET_MAGIC_LINK = 'LOGIN_GUID'
export const TRIGGER_WALLET_MAGIC_LINK_FAILURE = 'LOGIN_GUID_FAILURE'
export const TRIGGER_WALLET_MAGIC_LINK_LOADING = 'LOGIN_GUID_LOADING'
export const TRIGGER_WALLET_MAGIC_LINK_SUCCESS = 'LOGIN_GUID_SUCCESS'
export const TRIGGER_WALLET_MAGIC_LINK_NOTASKED = 'LOGIN_GUID_NOTASKED'
export const SET_MAGIC_LINK_INFO = 'SET_MAGIC_LINK_INFO'

// MISC
export const SET_AUTH_TYPE = 'SET_AUTH_TYPE'
export const UPGRADE_WALLET = 'UPGRADE_WALLET'
export const UPGRADE_WALLET_V4 = 'UPGRADE_WALLET_V4'
export const SET_REGISTER_EMAIL = 'SET_REGISTER_EMAIL'
export const AUTHENTICATE = 'AUTHENTICATE'
export const DEAUTHORIZE_BROWSER = 'DEAUTHORIZE_BROWSER'
export const WRONG_CHANGE_CACHE = 'WRONG_CHANGE_CACHE'
export const WRONG_RECEIVE_CACHE = 'WRONG_RECEIVE_CACHE'
export const SET_KYC_RESET = 'SET_KYC_RESET'
export const GET_USER_GEO_LOCATION = 'GET_USER_GEO_LOCATION'
export const SET_USER_GEO_LOCATION = 'SET_USER_GEO_LOCATION'

// ACTIONS SET UP JUST FOR EVENT TRACKING
export const MAGIC_LINK_PARSED = 'MAGIC_LINK_PARSED'
export const NEED_HELP_CLICKED = 'NEED_HELP_CLICKED'
export const LOGIN_ID_ENTERED = 'LOGIN_ID_ENTERED'
export const LOGIN_METHOD_SELECTED = 'LOGIN_METHOD_SELECTED'
export const LOGIN_PASSWORD_DENIED = 'LOGIN_PASSWORD_DENIED'
export const LOGIN_PASSWORD_ENTERED = 'LOGIN_PASSWORD_ENTERED'
export const LOGIN_TWO_STEP_VERIFICATION_DENIED = 'LOGIN_TWO_STEP_VERIFICATION_DENIED'
export const LOGIN_TWO_STEP_VERIFICATION_ENTERED = 'LOGIN_TWO_STEP_VERIFICATION_ENTERED'
export const RECOVERY_OPTION_SELECTED = 'RECOVERY_OPTION_SELECTED'
export const RECOVERY_PHRASE_ENTERED = 'RECOVERY_PHRASE_ENTERED'
export const RESET_ACCOUNT_CANCELLED = 'RESET_ACCOUNT_CANCELLED'
export const RESET_ACCOUNT_CLICKED = 'RESET_ACCOUNT_CLICKED'
export const SIGNUP_DETAILS_ENTERED = 'SIGNUP_DETAILS_ENTERED'