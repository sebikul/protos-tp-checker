import { execSync } from 'child_process';
import debug from 'debug';

const log = debug('tp-tester');

try {
  execSync(
    'node ./node_modules/.bin/cucumber-js --require-module ts-node/register --exit -r src/setup.ts test-cases',
    {
      env: {
        ...process.env,
        DEBUG: '*',
        TS_NODE_FILES: 'true',
      },
      stdio: 'inherit',
    },
  );
} catch (e) {
  log('Finished');
}
