const StorageBase = require('./storage-base');

const StorageDropbox = StorageBase.extend({
    name: 'storj',
    icon: 'file',
    enabled: true,
    uipos: 50,
    backup: true,
