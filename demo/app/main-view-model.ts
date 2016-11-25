import {Observable} from 'data/observable';
import {AzureNotifications} from 'nativescript-azure-notifications';

export class HelloWorldModel extends Observable {
  public message: string;
  private azureNotifications: AzureNotifications;

  constructor() {
    super();

    this.azureNotifications = new AzureNotifications();
    this.message = this.azureNotifications.message;
  }
}