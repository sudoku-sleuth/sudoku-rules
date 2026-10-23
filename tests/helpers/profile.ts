// Optional preload: OPEN_RULES_TEST_PROFILE=/tmp/profile.json bun test --preload ./tests/helpers/profile.ts
import { afterAll } from 'bun:test';
import { libraryProfile } from './library';

afterAll(async () => {
  if (process.env.OPEN_RULES_TEST_PROFILE) await Bun.write(process.env.OPEN_RULES_TEST_PROFILE, JSON.stringify(libraryProfile, null, 2) + '\n');
});
