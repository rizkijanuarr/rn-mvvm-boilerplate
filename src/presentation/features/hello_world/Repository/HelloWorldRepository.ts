import { type HelloWorldResponse } from '../Response/HelloWorldResponse';
import { HelloWorldService } from '../Service/HelloWorldService';

class HelloWorldRepository {
    async getHelloWorld(): Promise<HelloWorldResponse> {
        return HelloWorldService.getHelloWorld();
    }
}

// Singleton instance (menggantikan RepositoryModule DI)
export const helloWorldRepository = new HelloWorldRepository();
