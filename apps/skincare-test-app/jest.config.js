module.exports = {
  name: 'skincare-test-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/skincare-test-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
