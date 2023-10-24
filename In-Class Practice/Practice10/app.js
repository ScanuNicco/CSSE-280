const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
//const msg = getNotes();
//const command = process.argv[2];
//customization
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function () {
        console.log(chalk.red('Removing a note'));
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log(chalk.yellowBright('Listing all notes'))
    }
});
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function () {
        console.log('Reading a note')
    }
});

yargs.parse();