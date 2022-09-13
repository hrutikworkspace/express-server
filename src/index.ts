import Server from "./Server";
import {configuration,IConfig} from './config';
const server = new Server(configuration);

server.bootstrap();
server.run();
