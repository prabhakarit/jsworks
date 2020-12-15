function forcedInit() {
    console.log('forced init is executed');
}

function normalInit() {
    console.log('normal init is executed');
}

function forcedProcess() {
    console.log('forced process is executed');
}

function normalProcess() {
    console.log('normal process is executed');
}

function forcedIngest() {
    console.log('forced ingestion is executed');
}

function normalIngest() {
    console.log('normal ingestion is executed');
}

function forcedClose() {
    console.log('forced close is executed');
}

function normalClose() {
    console.log('normal close is executed');
}

const mapOfInits = new Map();
mapOfInits.set('forced', forcedInit);
mapOfInits.set('normal', normalInit);

const mapOfProcesses = new Map();
mapOfProcesses.set('forced', forcedProcess);
mapOfProcesses.set('normal', normalProcess);

const mapOfIngest = new Map();
mapOfIngest.set('forced', forcedProcess);
mapOfIngest.set('normal', normalIngest);

const mapOfClose = new Map();
mapOfClose.set('forced', forcedProcess);
mapOfClose.set('normal', normalClose);

class Processor {
    constructor(mode, type, profile) {
        this.mode = mode;
        this.type = type;
        this.profile = profile;
    }
};

const compose = (mode) => {
    const processor = new Processor(mode, 'address', 'batch');
    processor.__proto__.init = mapOfInits.get(mode);
    processor.__proto__.process = mapOfProcesses.get(mode);
    processor.__proto__.ingest = mapOfIngest.get(mode);
    processor.__proto__.close = mapOfClose.get(mode);
    return processor;
};

function run(processor) {
    processor.init();
    processor.process();
    processor.ingest();
    processor.close();
}

const test = (mode) => {
    const processor = compose(mode);
    run(processor);
};

test('forced');
