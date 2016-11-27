declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class AdmNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
					public getSpecificPayloadNodeName(): string;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class AdmTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
					public getSpecificPayloadNodeName(): string;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class BaiduNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
					public mUserId: string;
					public mChannelId: string;
					public getSpecificPayloadNodeName(): string;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
					public getChannelId(): string;
					public getUserId(): string;
				}
			}
		}
	}
}


declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class BaiduTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
					public mUserId: string;
					public mChannelId: string;
					public getSpecificPayloadNodeName(): string;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
					public getChannelId(): string;
					public getUserId(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class Connection {
					public constructor(param0: string);
					public executeRequest(param0: string, param1: string, param2: string, param3: string, param4: native.Array<org.apache.http.Header>): string;
					public executeRequest(param0: string, param1: string, param2: string, param3: string, param4: string, param5: native.Array<org.apache.http.Header>): string;
				}
			}
		}
	}
}


declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class ConnectionString {
					public constructor();
					public static createUsingSharedAccessKeyWithListenAccess(param0: java.net.URI, param1: string): string;
					public static createUsingSharedAccessKey(param0: java.net.URI, param1: string, param2: string): string;
					public static createUsingSharedAccessKeyWithFullAccess(param0: java.net.URI, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class ConnectionStringParser {
					public static parse(param0: string): java.util.Map<any, any>;
				}
				export module ConnectionStringParser {
					export class ParserState {
						public static EXPECT_KEY: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
						public static EXPECT_ASSIGNMENT: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
						public static EXPECT_VALUE: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
						public static EXPECT_SEPARATOR: com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
						public static valueOf(param0: string): com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState;
						public static values(): native.Array<com.microsoft.windowsazure.messaging.ConnectionStringParser.ParserState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class GcmNativeRegistration extends com.microsoft.windowsazure.messaging.Registration {
					public getSpecificPayloadNodeName(): string;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class GcmTemplateRegistration extends com.microsoft.windowsazure.messaging.TemplateRegistration {
					public getSpecificPayloadNodeName(): string;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class NotificationHub {
					public unregisterTemplate(param0: string): void;
					public setConnectionString(param0: string): void;
					public unregisterAll(param0: string): void;
					public constructor(param0: string, param1: string, param2: android.content.Context);
					public registerBaidu(param0: string, param1: string, param2: native.Array<string>): com.microsoft.windowsazure.messaging.Registration;
					public registerTemplate(param0: string, param1: string, param2: string, param3: native.Array<string>): com.microsoft.windowsazure.messaging.TemplateRegistration;
					public registerBaiduTemplate(param0: string, param1: string, param2: string, param3: string, param4: native.Array<string>): com.microsoft.windowsazure.messaging.TemplateRegistration;
					public getConnectionString(): string;
					public unregister(): void;
					public getNotificationHubPath(): string;
					public register(param0: string, param1?: native.Array<string>): com.microsoft.windowsazure.messaging.Registration;
					public setNotificationHubPath(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class NotificationHubException {
					public getStatusCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class NotificationHubResourceNotFoundException extends com.microsoft.windowsazure.messaging.NotificationHubException {
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class NotificationHubUnauthorizedException extends com.microsoft.windowsazure.messaging.NotificationHubException {
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class PnsSpecificRegistrationFactory {
					public static getInstance(): com.microsoft.windowsazure.messaging.PnsSpecificRegistrationFactory;
					public isTemplateRegistration(param0: string): boolean;
					public createTemplateRegistration(param0: string): com.microsoft.windowsazure.messaging.TemplateRegistration;
					public setRegistrationType(param0: com.microsoft.windowsazure.messaging.Registration.RegistrationType): void;
					public createNativeRegistration(param0: string): com.microsoft.windowsazure.messaging.Registration;
					public getAPIOrigin(): string;
					public getPNSHandleFieldName(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export abstract class Registration {
					public mRegistrationType: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
					public mRegistrationId: string;
					public mNotificationHubPath: string;
					public mExpirationTime: string;
					public mPNSHandle: string;
					public mName: string;
					public mTags: java.util.List<any>;
					public mURI: string;
					public mUpdated: string;
					public mETag: string;
					public static getNodeValue(param0: org.w3c.dom.Element, param1: string): string;
					public appendTagsNode(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
					public getURI(): string;
					public getSpecificPayloadNodeName(): string;
					public getRegistrationId(): string;
					public getNotificationHubPath(): string;
					public getTags(): java.util.List<any>;
					public appendNodeWithValue(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element, param2: string, param3: string): void;
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public getPNSHandle(): string;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
					public getRegistrationType(): com.microsoft.windowsazure.messaging.Registration.RegistrationType;
					public getExpirationTime(): java.util.Date;
				}
				export module Registration {
					export class RegistrationType {
						public static unknown: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
						public static gcm: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
						public static adm: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
						public static baidu: com.microsoft.windowsazure.messaging.Registration.RegistrationType;
						public static valueOf(param0: string): com.microsoft.windowsazure.messaging.Registration.RegistrationType;
						public static values(): native.Array<com.microsoft.windowsazure.messaging.Registration.RegistrationType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class RegistrationGoneException {
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export abstract class TemplateRegistration extends com.microsoft.windowsazure.messaging.Registration {
					public loadCustomXmlData(param0: org.w3c.dom.Element): void;
					public appendCustomPayload(param0: org.w3c.dom.Document, param1: org.w3c.dom.Element): void;
					public getTemplateName(): string;
					public getBodyTemplate(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module messaging {
				export class Utils {
					public static isNullOrWhiteSpace(param0: string): boolean;
					public static getXmlString(param0: org.w3c.dom.Element): string;
				}
			}
		}
	}
}

