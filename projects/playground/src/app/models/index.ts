export class Post {
  userId: number;
  id: number;
  title: string;
  description: string;

  initialize(obj: any): Post {
    const { userId, id, title, description } = obj;
    this.description = description;
    this.userId = userId;
    this.id = id;
    this.title = title;

    return this;
  }
}
