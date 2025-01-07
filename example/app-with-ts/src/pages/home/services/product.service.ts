import { Http } from '@/services'
import { Product } from '@pages/home/models'

export class ProductHttpService {
  private http: Http

  constructor() {
    this.http = new Http()
  }

  async findAll(): Promise<Product[]> {
    const response = await this.http.get<Product[]>('product')
    return response
  }
}
