
export class UserDto {
  constructor(user: any) {
      this.userId = user?.userId;
      this.userName = user?.userName;
  }

  private userId?: number;
  private userName?: string;
}
