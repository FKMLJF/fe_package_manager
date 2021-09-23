
export class UserDto {
  constructor(user: any) {
      this.userName = user?.userName;
      this.rememberMe = user?.rememberMe;
  }

  public userName?: string;
  public rememberMe?: boolean;
}
