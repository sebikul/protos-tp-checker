import debug from 'debug';
import pickledCucumber, { Options, SetupFn } from 'pickled-cucumber';

const logger = debug('tester');

const options: Options = {
  initialContext: () => ({
    NOW: Date.now(),
  }),
  usage: true,
};

const setup: SetupFn = ({
  Before,
  // compare,
  // getCtx,
  // Given,
  // onTearDown,
  // setCtx,
  // Then,
  When,
}) => {
  Before(() => {
    logger('Initializing');
  });

  When('the binary is executed', () => {
    logger('Running binary');
  });
};

pickledCucumber(setup, options);
