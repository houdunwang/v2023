export class JsonResponse<T extends Record<keyof any, any>> {
  constructor(protected data: T, protected hidden: (keyof T)[] = []) {}

  protected filter() {
    Object.keys(this.data).forEach((key) => {
      if (this.hidden.includes(key)) delete this.data[key]
    })
  }

  public make() {
    this.filter()
    return this.data
  }

  public static handle<T>(data: T, hidden: (keyof T)[]) {
    return new JsonResponse(data, hidden).make()
  }
}
