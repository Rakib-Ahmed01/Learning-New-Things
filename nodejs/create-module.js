const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');
const util = require('util');

const moduleName = process.argv[2];
const fileType = process.argv[3];
const ext = fileType === 'js' || fileType === 'ts' ? fileType : 'js';

if (!moduleName || typeof moduleName !== 'string') {
  console.error('please provide a valid module name like user, book');
  process.exit(0);
}

const mkDirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);
const currentDir = process.cwd();
const currentDirWithSrc = path.join(currentDir, 'src');
const currentDirWithSrcAndModules = path.join(currentDirWithSrc, 'modules');
const currentDirWithSrcAndModulesAndModule = path.join(
  currentDirWithSrcAndModules,
  moduleName
);

const isAgree = readlineSync.keyInYN(
  `Do you want to create a module named ${currentDirWithSrcAndModulesAndModule}? like ${moduleName}.schema.${ext}`
);

if (!isAgree) {
  console.log('Canceling module creation...');
  process.exit(0);
}

async function createModule() {
  try {
    await createModulesDirIfNotFound();
    await createFiles();
    console.log('Module files created successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function createModulesDirIfNotFound() {
  if (!fs.existsSync(currentDirWithSrc)) {
    await mkDirAsync(path.join(currentDirWithSrc));
  }

  if (!fs.existsSync(currentDirWithSrcAndModules)) {
    await mkDirAsync(currentDirWithSrcAndModules);
  }

  if (!fs.existsSync(currentDirWithSrcAndModulesAndModule)) {
    await mkDirAsync(currentDirWithSrcAndModulesAndModule);
  }
}

async function createFiles() {
  for (const file of necessaryFiles) {
    const filePath = path.join(
      currentDirWithSrcAndModulesAndModule,
      `${moduleName}.${file}.${ext}`
    );
    if (!fs.existsSync(filePath)) {
      await writeFileAsync(filePath, '');
    }
  }
}

const necessaryFiles = [
  'constants',
  'controller',
  'interface',
  'model',
  'route',
  'schema',
  'services',
  'validation',
];

createModule();
