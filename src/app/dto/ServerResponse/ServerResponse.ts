export class ServerResponse {
  constructor(private pResponse: string) {
  }

  get response(): string {
    return this.pResponse;
  }

  set response(value: string) {
    this.pResponse = value;
  }

  public static fromJson(jsonObj: any): ServerResponse {
    return new ServerResponse(jsonObj.response);
  }
}
