/// <reference path="node_modules/tns-platform-declarations/android.d.ts" />

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class GoogleAuthException {
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class GoogleAuthUtil {
						public static GOOGLE_ACCOUNT_TYPE: string;
						public static KEY_HANDLE_NOTIFICATION: string;
						public static KEY_REQUEST_VISIBLE_ACTIVITIES: string;
						public static getTokenWithNotification(param0: android.content.Context, param1: string, param2: string, param3: android.os.Bundle, param4: android.content.Intent): string;
						public static invalidateToken(param0: android.content.Context, param1: string): void;
						public static getTokenWithNotification(param0: android.content.Context, param1: string, param2: string, param3: android.os.Bundle, param4: string, param5: android.os.Bundle): string;
						public static getToken(param0: android.content.Context, param1: string, param2: string): string;
						public static getToken(param0: android.content.Context, param1: string, param2: string, param3: android.os.Bundle): string;
						public static getTokenWithNotification(param0: android.content.Context, param1: string, param2: string, param3: android.os.Bundle): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class GooglePlayServicesAvailabilityException extends com.google.android.gms.auth.UserRecoverableAuthException {
						public getConnectionStatusCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class UserRecoverableAuthException extends com.google.android.gms.auth.GoogleAuthException {
						public constructor(param0: string, param1: android.content.Intent);
						public getIntent(): android.content.Intent;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export class UserRecoverableNotifiedException extends com.google.android.gms.auth.GoogleAuthException {
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class AccountPicker {
						public static newChooseAccountIntent(param0: android.accounts.Account, param1: java.util.ArrayList, param2: native.Array<string>, param3: boolean, param4: string, param5: string, param6: native.Array<string>, param7: android.os.Bundle): android.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailability {
						GOOGLE_PLAY_SERVICES_PACKAGE: string;
						GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						getErrorDialog(activity: android.app.Activity, errorCode: number, requestCode: number);
						getErrorDialog(activity: android.app.Activity , errorCode: number, requestCode: number, cancelListener: android.content.DialogInterface.OnCancelListener )
						getErrorResolutionPendingIntent(context: android.content.Context , result: com.google.android.gms.common.ConnectionResult)
						getErrorResolutionPendingIntent(context: android.content.Context , errorCode: number, requestCode: number)
						getErrorString(errorCode: number)
						getInstance()
						getOpenSourceSoftwareLicenseInfo(context: android.content.Context )
						isGooglePlayServicesAvailable(context: android.content.Context )
						isUserResolvableError(errorCode: number)
						makeGooglePlayServicesAvailable(activity: android.app.Activity) 
						showErrorDialogFragment(activity: android.app.Activity, errorCode: number, requestCode: number) 
						showErrorDialogFragment(activity: android.app.Activity, errorCode: number, requestCode: number, cancelListener: android.content.DialogInterface.OnCancelListener ) 
						showErrorNotification(context: android.content.Context , errorCode: number) 
						showErrorNotification(context: android.content.Context , result: com.google.android.gms.common.ConnectionResult) 
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ConnectionResult {
						public static SUCCESS: number;
						public static SERVICE_MISSING: number;
						public static SERVICE_VERSION_UPDATE_REQUIRED: number;
						public static SERVICE_DISABLED: number;
						public static SIGN_IN_REQUIRED: number;
						public static INVALID_ACCOUNT: number;
						public static RESOLUTION_REQUIRED: number;
						public static NETWORK_ERROR: number;
						public static INTERNAL_ERROR: number;
						public static SERVICE_INVALID: number;
						public static DEVELOPER_ERROR: number;
						public static LICENSE_CHECK_FAILED: number;
						public static bf: com.google.android.gms.common.ConnectionResult;
						public hasResolution(): boolean;
						public getErrorCode(): number;
						public isSuccess(): boolean;
						public startResolutionForResult(param0: android.app.Activity, param1: number): void;
						public getResolution(): android.app.PendingIntent;
						public toString(): string;
						public constructor(param0: number, param1: android.app.PendingIntent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesClient {
						/**
						 * Constructs a new instance of the com.google.android.gms.common.GooglePlayServicesClient interface with the provided implementation.
						 */
						public constructor(implementation: {
							connect(): void;
							disconnect(): void;
							isConnected(): boolean;
							registerConnectionCallbacks(param0: com.google.android.gms.common.GooglePlayServicesClient.ConnectionCallbacks): void;
							isConnectionCallbacksRegistered(param0: com.google.android.gms.common.GooglePlayServicesClient.ConnectionCallbacks): boolean;
							unregisterConnectionCallbacks(param0: com.google.android.gms.common.GooglePlayServicesClient.ConnectionCallbacks): void;
							registerConnectionFailedListener(param0: com.google.android.gms.common.GooglePlayServicesClient.OnConnectionFailedListener): void;
							isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.GooglePlayServicesClient.OnConnectionFailedListener): boolean;
							unregisterConnectionFailedListener(param0: com.google.android.gms.common.GooglePlayServicesClient.OnConnectionFailedListener): void;
						});
						public unregisterConnectionCallbacks(param0: com.google.android.gms.common.GooglePlayServicesClient.ConnectionCallbacks): void;
						public disconnect(): void;
						public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.GooglePlayServicesClient.ConnectionCallbacks): boolean;
						public registerConnectionFailedListener(param0: com.google.android.gms.common.GooglePlayServicesClient.OnConnectionFailedListener): void;
						public unregisterConnectionFailedListener(param0: com.google.android.gms.common.GooglePlayServicesClient.OnConnectionFailedListener): void;
						public isConnected(): boolean;
						public registerConnectionCallbacks(param0: com.google.android.gms.common.GooglePlayServicesClient.ConnectionCallbacks): void;
						public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.GooglePlayServicesClient.OnConnectionFailedListener): boolean;
						public connect(): void;
					}
					export module GooglePlayServicesClient {
						export class ConnectionCallbacks {
							/**
							 * Constructs a new instance of the com.google.android.gms.common.GooglePlayServicesClient$ConnectionCallbacks interface with the provided implementation.
							 */
							public constructor(implementation: {
								onConnected(): void;
								onDisconnected(): void;
							});
							public onConnected(): void;
							public onDisconnected(): void;
						}
						export class OnConnectionFailedListener {
							/**
							 * Constructs a new instance of the com.google.android.gms.common.GooglePlayServicesClient$OnConnectionFailedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							});
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesNotAvailableException {
						public errorCode: number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtil {
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						public static a(param0: android.content.res.Resources): boolean;
						public static getRemoteResource(param0: android.content.Context): android.content.res.Resources;
						public static isGooglePlayServicesAvailable(param0: android.content.Context): number;
						public static isUserRecoverableError(param0: number): boolean;
						public static getErrorDialog(param0: number, param1: android.app.Activity, param2: number): android.app.Dialog;
						public static getErrorDialog(param0: number, param1: android.app.Activity, param2: number, param3: android.content.DialogInterface.OnCancelListener): android.app.Dialog;
						public static getOpenSourceSoftwareLicenseInfo(param0: android.content.Context): string;
						public static getRemoteContext(param0: android.content.Context): android.content.Context;
						public static getErrorString(param0: number): string;
						public static b(param0: android.content.Context, param1: number, param2: number): android.content.Intent;
						public static c(param0: android.content.Context, param1: number, param2: number): string;
						public static getErrorPendingIntent(param0: number, param1: android.content.Context, param2: number): android.app.PendingIntent;
						public static a(param0: android.content.Context, param1: number): string;
						public static a(param0: number, param1: android.app.Activity, param2: number, param3: android.content.DialogInterface.OnCancelListener, param4: number): android.app.Dialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Scopes {
						public static PLUS_PROFILE: string;
						public static PLUS_LOGIN: string;
					}
				}
			}
		}
	}
}