'use strict';

import { ServiceBroker } from 'moleculer';
import path from 'path';
import brokerOptions from './moleculer.config';

console.log('Starting broker...');

const broker = new ServiceBroker(brokerOptions);

// Load services
broker.loadServices(path.join(__dirname, 'services'), '**/*.service.ts');
broker.logger.info('Starting broker...');

broker.repl();
broker.start();
