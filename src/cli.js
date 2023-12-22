#!/usr/bin/env node

const { resolve } = require('path');
const { create } = require('create-create-app');

const templateRoot = resolve(__dirname, '..', 'templates');

create('create-mw-reveal-presentation', {
  templateRoot,
  defaultPackageManage: 'npm',
  promptForLicense: false,
  defaultLicense: 'MIT',
  after: async ({ installNpmPackage }) => {
    console.log('Installing required packages');
    await installNpmPackage('reveal-md');
  },
  caveat: ({ packageDir }) =>  {
    console.log('\nNext steps:');
    console.log(`\tcd ${packageDir} && npm run start`);
  }
});
