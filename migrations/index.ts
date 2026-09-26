import * as migration_20260926_151634_initial from './20260926_151634_initial';

export const migrations = [
  {
    up: migration_20260926_151634_initial.up,
    down: migration_20260926_151634_initial.down,
    name: '20260926_151634_initial'
  },
];
