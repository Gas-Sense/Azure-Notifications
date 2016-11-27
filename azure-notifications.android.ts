/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
// <reference path="./firebase.d.ts" />

import { Common } from './azure-notifications.common';
import * as utils from "utils/utils";
import application = require("application");

export class AzureNotifications extends Common {
    public mainActivity;
    public isVisible = false;
    private TAG = "MainActivity";
    private PLAY_SERVICES_RESOLUTION_REQUEST = 9000;

}

class NotificationSettings {
    public SenderId = "<Your project number>";
    public HubName = "<Your HubName>";
    public HubListenConnectionString = "<Enter your DefaultListenSharedAccessSignature connection string>";

    constructor(private senderId, private hubName, private hubListenConnection) {
        this.SenderId = senderId;
        this.HubName = hubName;
        this.HubListenConnectionString = hubListenConnection;
    }

}

class MyInstanceIDService extends com.google.firebase.iid.FirebaseInstanceIdService {

    private TAG: string = "MyInstanceIDService";

    public onTokenRefresh(): void {

        console.log(this.TAG + " Refreshing GCM Registration Token");

        let intent = new android.content.Intent(utils.ad.getApplicationContext(), RegistrationIntentService.class);
        startService(intent);
    }
};

class RegistrationIntentService extends android.app.IntentService {

    private hub: com.microsoft.windowsazure.messaging.NotificationHub;

    constructor(private TAG: string) {
        //TAG = "RegIntentService";
        super(TAG);
    }

    protected onHandleIntent(intent: android.content.Intent): void {

        let sharedPreferences: android.content.SharedPreferences = android.preference.PreferenceManager.getDefaultSharedPreferences(this);
        let resultString: string = null;
        const regID: string = null;
        const storedToken: string = null;

        try {
            let FCM_token = com.google.firebase.iid.FirebaseInstanceId.getInstance().getToken();
            console.log(this.TAG + " FCM Registration Token: " + FCM_token);

            // Storing the registration id that indicates whether the generated token has been
            // sent to your server. If it is not stored, send the token to your server,
            // otherwise your server should have already received the token.
            let regID = sharedPreferences.getString("registrationID", null);
            let storedToken = sharedPreferences.getString("FCMtoken", "");
            // TODO: These values should be real ones specified by user
            const settings = new NotificationSettings("<Your project number>", "<Your HubName>", "<Enter your DefaultListenSharedAccessSignature connection string>");
            if ((regID == null)) {

                let hub = new com.microsoft.windowsazure.messaging.NotificationHub(settings.HubName,
                    settings.HubListenConnectionString, this);
                console.log(this.TAG + " Attempting a new registration with NH using FCM token : " + FCM_token);
                regID = hub.register(FCM_token).getRegistrationId();

                // If you want to use tags...
                // Refer to : https://azure.microsoft.com/en-us/documentation/articles/notification-hubs-routing-tag-expressions/
                // regID = hub.register(token, "tag1,tag2").getRegistrationId();

                resultString = "New NH Registration Successfully - RegId : " + regID;
                console.log(this.TAG + resultString);

                sharedPreferences.edit().putString("registrationID", regID).apply();
                sharedPreferences.edit().putString("FCMtoken", FCM_token).apply();
            }

            // Check if the token may have been compromised and needs refreshing.
            else if (storedToken != FCM_token) {

                let hub = new com.microsoft.windowsazure.messaging.NotificationHub(settings.HubName,
                    settings.HubListenConnectionString, this);
                console.log(this.TAG + "NH Registration refreshing with token : " + FCM_token);
                regID = hub.register(FCM_token).getRegistrationId();

                // If you want to use tags...
                // Refer to : https://azure.microsoft.com/en-us/documentation/articles/notification-hubs-routing-tag-expressions/
                // regID = hub.register(token, "tag1,tag2").getRegistrationId();

                resultString = "New NH Registration Successfully - RegId : " + regID;
                console.log(this.TAG, resultString);

                sharedPreferences.edit().putString("registrationID", regID).apply();
                sharedPreferences.edit().putString("FCMtoken", FCM_token).apply();
            }

            else {
                resultString = "Previously Registered Successfully - RegId : " + regID;
            }
        } catch (e) {
            resultString = "Failed to complete registration";
            console.exception(this.TAG + resultString + e);
            // If an exception happens while fetching the new token or updating our registration data
            // on a third-party server, this ensures that we'll attempt the update at a later time.
        }

        // Notify UI that registration has completed.
        if (application.android.foregroundActivity.MainActivity.isVisible) {
            application.android.foregroundActivity.MainActivity.mainActivity.ToastNotify(resultString);
        }
    }
}