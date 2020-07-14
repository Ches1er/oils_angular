export class User {
  get password(): string {
    return this.pPassword;
  }

  set password(value: string) {
    this.pPassword = value;
  }

  constructor(private pId,
              private pName: string,
              private pEmail: string,
              private pEmailVerifiedAt,
              private pPhones: string,
              private pApiToken: string,
              private pRememberToken: string,
              private pPassword: string
  ) {
  }

  get id() {
    return this.pId;
  }

  set id(value) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get email(): string {
    return this.pEmail;
  }

  set email(value: string) {
    this.pEmail = value;
  }

  get emailVerifiedAt() {
    return this.pEmailVerifiedAt;
  }

  set emailVerifiedAt(value) {
    this.pEmailVerifiedAt = value;
  }

  get phones(): string {
    return this.pPhones;
  }

  set phones(value: string) {
    this.pPhones = value;
  }

  get apiToken(): string {
    return this.pApiToken;
  }

  set apiToken(value: string) {
    this.pApiToken = value;
  }

  get rememberToken(): string {
    return this.pRememberToken;
  }

  set rememberToken(value: string) {
    this.pRememberToken = value;
  }

  public static fromJson(jsonObj: any): User {
    return new User(
      jsonObj.id,
      jsonObj.name,
      jsonObj.email,
      jsonObj.email_verified_at,
      jsonObj.phones,
      jsonObj.api_token,
      jsonObj.remember_token,
      jsonObj.password);
  }
}
