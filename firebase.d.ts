declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class FirebaseInstanceId {
					public getToken(param0: string, param1: string): string;
					public getId(): string;
					public static getInstance(): com.google.firebase.iid.FirebaseInstanceId;
					public deleteInstanceId(): void;
					public getToken(): string;
					public deleteToken(param0: string, param1: string): void;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.iid.FirebaseInstanceId;
					public getCreationTime(): number;
					public zziy(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class FirebaseInstanceIdInternalReceiver {
					public static zzi(param0: android.content.Context, param1: android.content.Intent): android.content.Intent;
					public constructor();
					public static zzh(param0: android.content.Context, param1: android.content.Intent): android.content.Intent;
					public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
					public static zzUq(): android.content.Intent;
					public static zzUr(): android.content.Intent;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class FirebaseInstanceIdReceiver {
					public constructor();
					public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class FirebaseInstanceIdService extends com.google.firebase.iid.zzb {
					public zzB(param0: android.content.Intent): void;
					public zzA(param0: android.content.Intent): number;
					public zzm(param0: android.content.Intent): void;
					public onTokenRefresh(): void;
					public constructor();
					public zzz(param0: android.content.Intent): android.content.Intent;
				}
			}
		}
	}
}

/// <reference path="./java.security.KeyPair.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class zza {
					public static zzCc(): java.security.KeyPair;
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export abstract class zzb {
					public onBind(param0: android.content.Intent): android.os.IBinder;
					public zzA(param0: android.content.Intent): number;
					public zzm(param0: android.content.Intent): void;
					public constructor();
					public zzBL(): void;
					public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;
					public zzz(param0: android.content.Intent): android.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class zzc {
					public getId(): string;
					public getToken(): string;
					public static zzUl(): com.google.firebase.iid.zzc;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.google.firebase.iid.zzf.d.ts" />
/// <reference path="./com.google.firebase.iid.zzg.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class zzd {
					public zzCe(): void;
					public zzc(param0: string, param1: string, param2: android.os.Bundle): string;
					public zzUt(): com.google.firebase.iid.zzf;
					public static zzb(param0: android.content.Context, param1: android.os.Bundle): com.google.firebase.iid.zzd;
					public zzb(param0: string, param1: string, param2: android.os.Bundle): void;
					public getToken(param0: string, param1: string, param2: android.os.Bundle): string;
					public constructor(param0: android.content.Context, param1: string, param2: android.os.Bundle);
					public zzUs(): com.google.firebase.iid.zzg;
					public getCreationTime(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class zze {
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyPair.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class zzf {
					public zze(param0: android.os.Message): void;
					public static zzCj(): string;
					public constructor(param0: android.content.Context);
					public static zzaX(param0: android.content.Context): string;
					public zzb(param0: android.content.Intent, param1: string): void;
					public zza(param0: android.os.Bundle, param1: java.security.KeyPair, param2: string): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyPair.d.ts" />
declare module com {
	export module google {
		export module firebase {
			export module iid {
				export class zzg {
					public zzi(param0: string, param1: string, param2: string): string;
					public zzUv(): android.content.SharedPreferences;
					public zzeE(param0: string): java.security.KeyPair;
					public isEmpty(): boolean;
					public zzeD(param0: string): void;
					public zzCk(): void;
					public constructor(param0: android.content.Context);
					public zza(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public zzj(param0: string, param1: string, param2: string): void;
					public zzeG(param0: string): void;
					public constructor(param0: android.content.Context, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseApp {
				public static DEFAULT_APP_NAME: string;
				public equals(param0: java.lang.Object): boolean;
				public static initializeApp(param0: com.google.firebase.FirebaseOptions, param1: string): com.google.firebase.FirebaseApp;
				public getOptions(): com.google.firebase.FirebaseOptions;
				public hashCode(): number;
				public static getInstance(param0: string): com.google.firebase.FirebaseApp;
				public static getApps(): java.util.List<any>;
				public getName(): string;
				public toString(): string;
				public static getInstance(): com.google.firebase.FirebaseApp;
				public static initializeApp(param0: com.google.firebase.FirebaseOptions): com.google.firebase.FirebaseApp;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseOptions {
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public getDatabaseAuthVariableOverride(): java.util.Map<any, any>;
				public getDatabaseUrl(): string;
				public toString(): string;
			}
			export module FirebaseOptions {
				export class Builder {
					public constructor(param0: com.google.firebase.FirebaseOptions);
					public build(): com.google.firebase.FirebaseOptions;
					public constructor();
					public setDatabaseUrl(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public setServiceAccount(param0: java.io.InputStream): com.google.firebase.FirebaseOptions.Builder;
					public setDatabaseAuthVariableOverride(param0: java.util.Map<any, any>): com.google.firebase.FirebaseOptions.Builder;
				}
			}
		}
	}
}