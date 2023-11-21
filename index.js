import { server } from './server.js'
import chalk from 'chalk';

const port = '3333';

server.listen(port, () => {
    console.log(`The server is running at port [${chalk.blueBright(port)}]`)
});
