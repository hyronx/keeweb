'use strict';

//var Logger = require('../util/logger');

//var logger = new Logger('storage-onedrive');

var StorageOneDrive = {
    name: 'onedrive',
    icon: '',
    enabled: false,
    uipos: 40,

    iconSvg: '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="256" height="256" version="1.1" viewBox="0 0 256 256">' +
        '<g transform="translate(296.64282,-100.61434)"><g transform="translate(222.85714,-11.428576)"><g transform="matrix(0.83394139,0,0,0.83394139,' +
        '-86.101383,10.950635)"><path d="m-419.5 365.94c-18.48-4.62-28.77-19.31-28.81-41.1-0.01-6.97 0.49-10.31 2.23-14.79 4.26-10.99 15.55-19.27 ' +
        '30.41-22.33 7.39-1.52 9.67-3.15 9.67-6.92 0-1.18 0.88-4.71 1.95-7.83 4.88-14.2 13.93-26.03 23.59-30.87 10.11-5.07 15.22-6.21 27.45-6.14 17.38 ' +
        '0.09 26.04 3.86 38.17 16.6l6.67 7 5.97-2.07c28.91-10.01 57.73 7.03 60.06 35.49l0.64 7.79 5.69 2.04c16.26 5.83 23.9 18.06 22.52 36.04-0.91 11.76-6.4 ' +
        '21.15-15.11 25.81l-4.09 2.19-91 0.18c-69.93 0.13-92.16-0.11-96-1.07zM-487.72 353.36" fill="#000"/><path d="m-487.72 353.36c-10.79-2.56-22.22-12.09-' +
        '27.58-22.99-3.04-6.18-3.2-7.09-3.2-18.03 0-10.4 0.26-12.07 2.68-17.23 5.1-10.89 14.88-18.75 27.15-21.84 2.59-0.65 5.02-1.69 5.41-2.31 0.38-0.62 ' +
        '0.81-4 0.95-7.5 0.85-21.78 15.15-40.97 35.1-47.14 10.78-3.33 24.33-2.51 36.05 2.18 3.72 1.49 3.3 1.81 11.16-8.5 4.65-6.1 14.05-13.68 21.74-17.55 ' +
        '8.3-4.17 16.94-6.09 27.26-6.07 28.86 0.07 53.73 18.12 62.92 45.67 2.94 8.8 2.79 11.27-0.67 11.34-1.51 0.03-5.85 0.86-9.63 1.85l-6.88 1.79-6.28-' +
        '6.28c-17.7-17.7-46.59-21.53-71.15-9.42-9.81 4.84-17.7 11.78-23.65 20.83-4.25 6.45-9.66 18.48-9.66 21.47 0 2.12-1.72 3.18-9.05 5.58-22.69 7.44-' +
        '35.94 24.63-35.93 46.62 0 8 2.06 17.8 4.93 23.41 1.08 2.11 1.68 4.13 1.34 4.47-0.88 0.88-29.11 0.58-33.01-0.35z" /></g></g></g></svg>',

    load: function(path, opts, callback) {
        if (callback) { callback('not implemented'); }
    },

    stat: function(path, opts, callback) {
        if (callback) { callback('not implemented'); }
    },

    save: function(path, opts, data, callback/*, rev*/) {
        if (callback) { callback('not implemented'); }
    }
};

module.exports = StorageOneDrive;
