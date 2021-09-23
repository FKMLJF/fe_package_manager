export class LoginDto {
  constructor(data: any) {
    this.userName = data?.userName;
    this.password = data?.password;
    this.rememberMe = data?.rememberMe;
  }

  public userName?: string
  public password?: string
  public rememberMe?: boolean
}
